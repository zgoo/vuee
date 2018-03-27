 Vue.config.keyCode = {
    F1: 112
  };
  var vm = new Vue({
    el: '#app',
    data: {
      active: { },
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
        '|': 'VertialBar',
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
      }
    },
    methods: {
      checkUserKeyDown: function (event) {
        console.log(event.key);
        this.$set(this.active, this.keyCodeAlias[event.key] || event.key, true)
      },
      checkUserKeyUp: function (event) {
        this.$set(this.active, this.keyCodeAlias[event.key] || event.key, false)
      }
    }
  });