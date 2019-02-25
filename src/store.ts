import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const REG_EXP = /[÷×＋−]/;

const canUpdateNumber = (state: { previous: string; isSelectedOperator: boolean }, current: string): boolean => {
  const { previous, isSelectedOperator } = state;
  const hasZeroOrDot = current === '0' || current === '00' || current === '.';

  // 直前に入力された文字が空文字で、0かドットを入力した場合、何も起こさない
  // 直前に入力された文字がドットで、ドットを入力した場合、何も起こさない
  // 直前に入力された文字が等号で、ドットか0を入力した場合、何も起こさない
  // 演算子入力状態で、0かドットを入力した場合、何も起こさない
  return (
    (previous === '' && hasZeroOrDot) ||
    (previous === '.' && current === '.') ||
    (previous === '＝' && hasZeroOrDot) ||
    (isSelectedOperator && hasZeroOrDot)
  );
};

const canUpdateOperator = (state: { previous: string }, current: string): boolean => {
  const { previous } = state;
  const hasArithmetic = REG_EXP.test(current);

  // 直前に入力された文字が空文字で、四則演算が入力されている場合、何も起こさない
  // 直前に入力された文字がドットで、四則演算が入力されている場合、何も起こさない
  // 直前に入力された文字が等号で、四則演算が入力されている場合、何も起こさない
  return (
    (previous === '' && hasArithmetic) || (previous === '.' && hasArithmetic) || (previous === '＝' && hasArithmetic)
  );
};

const canUpdateAnswer = (
  state: { previous: string; isSelectedOperator: boolean; formula: string[] },
  current: string,
): boolean => {
  const { previous, isSelectedOperator, formula } = state;
  const hasEqual = current === '＝';

  // 直前に入力された文字がドットで、等号を入力した場合、何も起こさない
  // 直前に入力された文字が等号で、等号を入力した場合、何も起こさない
  // 直前の文字が空文字の場合、何も起こさない
  // 演算子入力状態の場合、何も起こさない
  // 四則演算が1つも式にない場合、何も起こさない
  return (
    previous === '' ||
    (previous === '.' && hasEqual) ||
    (previous === '＝' && hasEqual) ||
    isSelectedOperator ||
    !formula.some((_formula) => REG_EXP.test(_formula))
  );
};

export default new Vuex.Store({
  state: {
    previous: '',
    formula: [],
    answer: 0,
    isSelectedOperator: false,
  },

  getters: {
    formula(state): string[] {
      return state.formula;
    },
    answer(state): number {
      return state.answer;
    },
  },

  mutations: {
    updateNumber(state, payload): void {
      // 直前の文字が等号の場合はformulaを空にする
      // 計算が終わってから次の数値入力時に数式と答えをリセットする仕様
      if (state.previous === '＝') {
        state.formula = [];
        state.answer = 0;
      }

      const { text }: { text: string } = payload;
      const formula: string[] = state.formula;

      formula.push(text);
      state.isSelectedOperator = false;
    },

    updateOperator(state, payload): void {
      const { text }: { text: string } = payload;
      const formula: string[] = state.formula;

      // 演算子入力状態で再度演算子が入力されたら配列末尾を削除する
      if (state.isSelectedOperator) {
        state.formula.pop();
      }

      formula.push(`_${text}_`);
      state.isSelectedOperator = true;
    },

    updateAnswer(state): void {
      const answer = state.formula
        .join('')
        .replace(/_/g, '')
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/＋/g, '+')
        .replace(/−/g, '-');

      state.answer = new Function(`return ${answer}`)();
    },

    clearSelectedNumbers(state): void {
      state.previous = '';
      state.formula = [];
      state.answer = 0;
      state.isSelectedOperator = false;
    },

    updateCurrent(state, payload): void {
      const { text }: { text: string } = payload;
      state.previous = text;
    },
  },

  actions: {
    clickNumber({ commit, state }, current): void {
      if (canUpdateNumber(state, current)) {
        return;
      }

      commit('updateNumber', { text: current });
      commit('updateCurrent', { text: current });
    },

    clickOperator({ commit, state }, current): void {
      if (canUpdateOperator(state, current)) {
        return;
      }

      commit('updateOperator', { text: current });
      commit('updateCurrent', { text: current });
    },

    clickAnswer({ commit, state }, current): void {
      if (canUpdateAnswer(state, current)) {
        return;
      }

      commit('updateAnswer');
      commit('updateOperator', { text: current });
      commit('updateCurrent', { text: current });
    },

    clickClear({ commit }): void {
      commit('clearSelectedNumbers');
    },
  },
});
