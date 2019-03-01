interface State {
  previous: string;
  formula: string[];
  answer: number;
  isSelectedOperator: boolean;
  [key: string]: string | string[] | number | boolean;
}

const REG_EXP = /[÷×＋−]/;

const canUpdateNumber = (state: { previous: string; isSelectedOperator: boolean }, current: string): boolean => {
  const { previous, isSelectedOperator } = state;
  const hasZeroOrDot = current === '0' || current === '00' || current === '.';

  // TODO 否定しなくてもfalseになる条件にしたほうがよい
  // 以下の条件は入力できない条件なので否定してfalseで返す
  // 直前に入力された文字が空文字で、0かドットを入力した場合、何も起こさない
  // 直前に入力された文字がドットで、ドットを入力した場合、何も起こさない
  // 直前に入力された文字が等号で、ドットか0を入力した場合、何も起こさない
  // 演算子入力状態で、0かドットを入力した場合、何も起こさない
  return !(
    (previous === '' && hasZeroOrDot) ||
    (previous === '.' && current === '.') ||
    (previous === '＝' && hasZeroOrDot) ||
    (isSelectedOperator && hasZeroOrDot)
  );
};

const canUpdateOperator = (state: { previous: string }, current: string): boolean => {
  const { previous } = state;
  const hasArithmetic = REG_EXP.test(current);

  // TODO 否定しなくてもfalseになる条件にしたほうがよい
  // 以下の条件は入力できない条件なので否定してfalseで返す
  // 直前に入力された文字が空文字で、四則演算が入力されている場合、何も起こさない
  // 直前に入力された文字がドットで、四則演算が入力されている場合、何も起こさない
  // 直前に入力された文字が等号で、四則演算が入力されている場合、何も起こさない
  return !(
    (previous === '' && hasArithmetic) ||
    (previous === '.' && hasArithmetic) ||
    (previous === '＝' && hasArithmetic)
  );
};

const canUpdateAnswer = (
  state: { previous: string; isSelectedOperator: boolean; formula: string[] },
  current: string,
): boolean => {
  const { previous, isSelectedOperator, formula } = state;
  const hasEqual = current === '＝';

  // TODO 否定しなくてもfalseになる条件にしたほうがよい
  // 以下の条件は入力できない条件なので否定してfalseで返す
  // 直前に入力された文字がドットで、等号を入力した場合、何も起こさない
  // 直前に入力された文字が等号で、等号を入力した場合、何も起こさない
  // 直前の文字が空文字の場合、何も起こさない
  // 演算子入力状態の場合、何も起こさない
  // 四則演算が1つも式にない場合、何も起こさない
  return !(
    previous === '' ||
    (previous === '.' && hasEqual) ||
    (previous === '＝' && hasEqual) ||
    isSelectedOperator ||
    !formula.some((_formula) => REG_EXP.test(_formula))
  );
};

const initialState = (): State => ({
  previous: '',
  formula: [],
  answer: 0,
  isSelectedOperator: false,
});

const calculator = {
  state: initialState(),

  getters: {
    formula(state: State): string[] {
      return state.formula;
    },
    answer(state: State): number {
      return state.answer;
    },
  },

  mutations: {
    updateNumber(state: State, payload: { text: string }): void {
      // 直前の文字が等号の場合はformulaを空にする
      // 計算が終わってから次の数値入力時に数式と答えをリセットする仕様
      if (state.previous === '＝') {
        state.formula = [];
        state.answer = 0;
      }

      const { text } = payload;
      const formula = state.formula;

      formula.push(text);
      state.isSelectedOperator = false;
    },

    updateOperator(state: State, payload: { text: string }): void {
      const { text } = payload;
      const formula = state.formula;

      // 演算子入力状態で再度演算子が入力されたら配列末尾を削除する
      if (state.isSelectedOperator) {
        state.formula.pop();
      }

      formula.push(`_${text}_`);
      state.isSelectedOperator = true;
    },

    updateAnswer(state: State): void {
      const answer = state.formula
        .join('')
        .replace(/_/g, '')
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/＋/g, '+')
        .replace(/−/g, '-');

      state.answer = new Function(`return ${answer}`)();
    },

    updatePrevious(state: State, payload: { text: string }): void {
      const { text } = payload;
      state.previous = text;
    },

    resetState(state: State): void {
      const s = initialState();
      Object.keys(s).forEach((key) => {
        state[key] = s[key];
      });
    },
  },

  actions: {
    clickNumber({ commit, state }: { commit: any; state: State }, event: Event): void {
      const eventTarget = event.target;
      if (!(eventTarget instanceof HTMLElement)) {
        return;
      }

      const text = eventTarget.innerText;
      // 入力できないならreturnする
      if (!canUpdateNumber(state, text)) {
        return;
      }

      commit('updateNumber', { text });
      commit('updatePrevious', { text });
    },

    clickOperator({ commit, state }: { commit: any; state: State }, event: Event): void {
      const eventTarget = event.target;
      if (!(eventTarget instanceof HTMLElement)) {
        return;
      }

      const text = eventTarget.innerText;
      // 入力できないならreturnする
      if (!canUpdateOperator(state, text)) {
        return;
      }

      commit('updateOperator', { text });
      commit('updatePrevious', { text });
    },

    clickAnswer({ commit, state }: { commit: any; state: State }, event: Event): void {
      const eventTarget = event.target;
      if (!(eventTarget instanceof HTMLElement)) {
        return;
      }

      const text = eventTarget.innerText;
      // 入力できないならreturnする
      if (!canUpdateAnswer(state, text)) {
        return;
      }

      commit('updateAnswer');
      commit('updateOperator', { text });
      commit('updatePrevious', { text });
    },

    clickClear({ commit }: { commit: any }): void {
      commit('resetState');
    },
  },
};

export default calculator;
