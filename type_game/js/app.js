Vue.config.keyCode = {
  F1: 112
};
var vm = new Vue({
  el: '#app',
  data: {
    active: {},
    keyCodeAlias: {
      '`': 'Grave',
      '~': 'Tilde',
      1: 'One',
      '!': 'Exclamation',
      2: 'Two',
      '@': 'AtSign',
      3: 'Three',
      '#': 'Number',
      4: 'Four',
      '$': 'Dollar',
      5: 'Five',
      '%': 'Percent',
      6: 'Six',
      '^': 'Caret',
      7: 'Seven',
      '&': 'Ampersand',
      8: 'Eight',
      '*': 'Asterisk',
      9: 'Nine',
      '(': 'LeftParenthesis',
      0: 'Zero',
      ')': 'RightParenthesis',
      '-': 'Minus',
      '_': 'Underscore',
      '=': 'EqualitySign',
      '+': 'Plus',

      '{': 'LeftSquareBracket',
      '[': 'LeftCurlyBracket',
      '}': 'RightSquareBracket',
      ']': 'RightCurlyBracket',
      '|': 'VerticalBar',
      '\\': 'Backslash',

      ':': 'Colon',
      ';': 'Semicolon',
      '\"': 'DoubleQuote',
      '\'': 'SingleQuote',

      '<': 'LessThan',
      ',': 'Comma',
      '>': 'GreaterThan',
      '.': 'Period',
      '?': 'QuestionMark',
      '/': 'Slash',

      'space': 'Space'
    }
  },
  methods: {
    checkUserKeyDown: function (event) {
      var key = event.keyCode === 32 ? 'space' : event.key;
      console.log(event.keyCode);
      this.$set(this.active, this.keyCodeAlias[key] || key, true)
    },
    checkUserKeyUp: function (event) {
      var key = event.keyCode === 32 ? 'space' : event.key;
      this.$set(this.active, this.keyCodeAlias[key] || key, false)
    }
  }
});