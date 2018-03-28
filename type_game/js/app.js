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
    },
    userInput: '',
    startTime: new Date(),
    usedTime: 0
  },
  computed: {
    totalInput: function () {
      return this.toThousand(this.userInput.length);
    },
    formatStartTime: function () {
      return this.formatDate(this.startTime);
    }
  },
  methods: {
    formatDate: function (date) {
      return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' +
        date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' +
        date.getMilliseconds();
    },
    used: function () {
      this.usedTime = this.toThousand(new Date() - this.startTime.valueOf());
    },
    checkUserKeyDown: function (event) {
      var key = event.keyCode === 32 ? 'space' : event.key;
      this.$set(this.active, this.keyCodeAlias[key] || key, true)
    },
    checkUserKeyUp: function (event) {
      var key = event.keyCode === 32 ? 'space' : event.key;
      this.$set(this.active, this.keyCodeAlias[key] || key, false);
      this.used();
    },
    toThousand: function (number) {
      var num = (number || 0).toString();
      var result = '';
      while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
      }

      return num ? num + result : '';
    },
  }
});