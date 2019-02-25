import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '.'],
    operators: ['÷', '×', '＋', '−', '＝'],
    current: '',
    formula: [],
    answer: 0,
    // 演算子が選択されてるか否か
    isSelectedOperator: false,
  },

  getters: {
    numbers(state): string[] {
      return state.numbers;
    },
    operators(state): string[] {
      return state.operators;
    },
    formula(state): string[] {
      return state.formula;
    },
    answer(state): number {
      return state.answer;
    },
  },
  mutations: {
    setNumber(state, payload): void {
      // 直前の文字が等号の場合はformulaを空にする
      if (state.current === '＝') {
        state.formula = [];
        state.answer = 0;
      }

      const { text }: { text: string } = payload;
      const formula: string[] = state.formula;

      formula.push(text);
      state.isSelectedOperator = false;
    },

    setOperator(state, payload): void {
      const { text }: { text: string } = payload;
      const formula: string[] = state.formula;

      // 演算子入力状態で再度演算子が入力されたら末尾演算子を更新する
      if (state.isSelectedOperator) {
        state.formula.pop();
        formula.push(`_${text}_`);
        return;
      }

      formula.push(text);
      state.isSelectedOperator = true;
    },

    setAnswer(state): void {
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
      state.current = '';
      state.formula = [];
      state.answer = 0;
      state.isSelectedOperator = false;
    },

    setCurrent(state, payload): void {
      const { text }: { text: string } = payload;
      state.current = text;
    },
  },

  actions: {
    clickNumber({ commit, state }, text): void {
      // 直前に入力された文字が空文字で、0かドットを入力した場合何も起こさない
      if (state.current === '' && (text === '0' || text === '00' || text === '.')) {
        return;
      }

      // 直前に入力された文字がドットで、ドットを入力した場合何も起こさない
      if (state.current === '.' && text === '.') {
        return;
      }

      // 直前に入力された文字が等号で、ドットか0を入力した場合何も起こさない
      if (state.current === '＝' && (text === '.' || text === '0' || text === '00')) {
        return;
      }

      // 演算子入力状態で、0かドットを入力した場合何も起こさない
      if (state.isSelectedOperator && (text === '0' || text === '00' || text === '.')) {
        return;
      }

      commit('setNumber', { text });
      commit('setCurrent', { text });
    },

    clickOperator({ commit, state }, text): void {
      const hasArithmetic = /[÷×＋−]/g.test(text);

      // 直前に入力された文字が空文字で、四則演算が入力されている場合、何も起こさない
      if (state.current === '' && hasArithmetic) {
        return;
      }

      // 直前に入力された文字がドットで、四則演算が入力されている場合、何も起こさない
      if (state.current === '.' && hasArithmetic) {
        return;
      }

      // 直前に入力された文字が等号で、四則演算が入力されている場合、何も起こさない
      if (state.current === '＝' && hasArithmetic) {
        return;
      }

      commit('setOperator', { text });
      commit('setCurrent', { text });
    },

    clickAnswer({ commit, state }, text): void {
      // 直前に入力された文字がドットで、等号を入力した場合何も起こさない
      if (state.current === '.' && text === '＝') {
        return;
      }

      // 直前に入力された文字が等号で、等号を入力した場合何も起こさない
      if (state.current === '＝' && text === '＝') {
        return;
      }

      // 直前の文字が空文字の場合何も起こさない
      if (state.current === '') {
        return;
      }

      // 直前に四則演算が選択されている場合何も起こさない
      if (state.isSelectedOperator) {
        return;
      }

      // 四則演算が1つも式にない場合何も起こさない
      if (!state.formula.some((formula) => /[÷×＋−]/g.test(formula))) {
        return;
      }

      commit('setAnswer');
      commit('setOperator', { text });
      commit('setCurrent', { text });
    },

    clickClear({ commit }): void {
      commit('clearSelectedNumbers');
    },
  },
});
