var vm = new Vue({
  el: '#app',
  data: {
    tildeToDelete: [
      {value: '~ `', cls: 'btn btn-lg m-1', id: 'Tilde'},
      {value: '1 !', cls: 'btn btn-lg m-1', id: 'One'},
      {value: '2 @', cls: 'btn btn-lg m-1', id: 'Two'},
      {value: '3 #', cls: 'btn btn-lg m-1', id: 'Three'},
      {value: '4 $', cls: 'btn btn-lg m-1', id: 'Four'},
      {value: '5 %', cls: 'btn btn-lg m-1', id: 'Five'},
      {value: '6 ^', cls: 'btn btn-lg m-1', id: 'Six'},
      {value: '7 &', cls: 'btn btn-lg m-1', id: 'Seven'},
      {value: '8 *', cls: 'btn btn-lg m-1', id: 'Eight'},
      {value: '9 (', cls: 'btn btn-lg m-1', id: 'Nine'},
      {value: '0 )', cls: 'btn btn-lg m-1', id: 'Zero'},
      {value: '- _', cls: 'btn btn-lg m-1', id: 'Minus'},
      {value: '+ =', cls: 'btn btn-lg m-1', id: 'Plus'},
      {value: 'Delete', cls: 'btn btn-lg m-1', id: 'Delete'},
    ],
    tabToBackslash: [
      {value: 'Tab', cls: 'btn btn-lg m-1', id: 'Tab'},
      {value: 'Q q', cls: 'btn btn-lg m-1', id: 'Q'},
      {value: 'W w', cls: 'btn btn-lg m-1', id: 'W'},
      {value: 'E e', cls: 'btn btn-lg m-1', id: 'E'},
      {value: 'R r', cls: 'btn btn-lg m-1', id: 'R'},
      {value: 'T t', cls: 'btn btn-lg m-1', id: 'T'},
      {value: 'Y y', cls: 'btn btn-lg m-1', id: 'Y'},
      {value: 'U u', cls: 'btn btn-lg m-1', id: 'U'},
      {value: 'I i', cls: 'btn btn-lg m-1', id: 'I'},
      {value: 'O o', cls: 'btn btn-lg m-1', id: 'O'},
      {value: 'P p', cls: 'btn btn-lg m-1', id: 'P'},
      {value: '{ [', cls: 'btn btn-lg m-1', id: 'LeftBracket'},
      {value: '} ]', cls: 'btn btn-lg m-1', id: 'RightBracket'},
      {value: '| \\', cls: 'btn btn-lg m-1', id: 'VerticalBar'},
    ],
    capsLockToEnter: [
      {value: 'CapsLock', cls: 'btn btn-lg m-1 px-3', id: 'CapsLock'},
      {value: 'A a', cls: 'btn btn-lg m-1', id: 'A'},
      {value: 'S s', cls: 'btn btn-lg m-1', id: 'S'},
      {value: 'D d', cls: 'btn btn-lg m-1', id: 'D'},
      {value: 'F f', cls: 'btn btn-lg m-1', id: 'F'},
      {value: 'G g', cls: 'btn btn-lg m-1', id: 'G'},
      {value: 'H h', cls: 'btn btn-lg m-1', id: 'H'},
      {value: 'J j', cls: 'btn btn-lg m-1', id: 'J'},
      {value: 'K k', cls: 'btn btn-lg m-1', id: 'K'},
      {value: 'L l', cls: 'btn btn-lg m-1', id: 'L'},
      {value: ': ;', cls: 'btn btn-lg m-1', id: 'Colon'},
      {value: '\" \'', cls: 'btn btn-lg m-1', id: 'Quote'},
      {value: 'Enter', cls: 'btn btn-lg m-1', id: 'Enter'},
    ],
    shiftToShift: [
      {value: 'Shift', cls: 'btn btn-lg m-1 px-5', id: 'Shift'},
      {value: 'Z z', cls: 'btn btn-lg m-1', id: 'Z'},
      {value: 'X x', cls: 'btn btn-lg m-1', id: 'X'},
      {value: 'C c', cls: 'btn btn-lg m-1', id: 'C'},
      {value: 'V v', cls: 'btn btn-lg m-1', id: 'V'},
      {value: 'B b', cls: 'btn btn-lg m-1', id: 'B'},
      {value: 'N n', cls: 'btn btn-lg m-1', id: 'N'},
      {value: 'M m', cls: 'btn btn-lg m-1', id: 'M'},
      {value: '< ,', cls: 'btn btn-lg m-1', id: 'Less'},
      {value: '> .', cls: 'btn btn-lg m-1', id: 'Greater'},
      {value: '? /', cls: 'btn btn-lg m-1', id: 'Question'},
      {value: 'Shift', cls: 'btn btn-lg m-1 px-5', id: 'Shift'}
    ],
    ctrlToCtrl: [
      {value: 'Ctrl', cls: 'btn btn-lg m-1 px-4', id: 'Control'},
      {value: '⊞', cls: 'btn btn-lg m-1', id: 'Q'},
      {value: 'Alt', cls: 'btn btn-lg m-1', id: 'Alt'},
      {value: 'Space', cls: 'btn btn-lg m-1 w-50', id: 'Space'},
      {value: 'Alt', cls: 'btn btn-lg m-1', id: 'Alt'},
      {value: '⊞', cls: 'btn btn-lg m-1', id: 'T'},
      {value: '▤', cls: 'btn btn-lg m-1', id: 'Y'},
      {value: 'Ctrl', cls: 'btn btn-lg m-1 px-4', id: 'Control'}
    ],
    active: {},
    keyCodeAlias: {
      '`': 'Tilde',
      '~': 'Tilde',
      1: 'One',
      '!': 'One',
      2: 'Two',
      '@': 'Two',
      3: 'Three',
      '#': 'Three',
      4: 'Four',
      '$': 'Four',
      5: 'Five',
      '%': 'Five',
      6: 'Six',
      '^': 'Six',
      7: 'Seven',
      '&': 'Seven',
      8: 'Eight',
      '*': 'Eight',
      9: 'Nine',
      '(': 'Nine',
      0: 'Zero',
      ')': 'Zero',
      '-': 'Minus',
      '_': 'Minus',
      '=': 'Plus',
      '+': 'Plus',

      '{': 'LeftBracket',
      '[': 'LeftBracket',
      '}': 'RightBracket',
      ']': 'RightBracket',
      '|': 'VerticalBar',
      '\\': 'VerticalBar',

      ':': 'Colon',
      ';': 'Colon',
      '\"': 'Quote',
      '\'': 'Quote',

      '<': 'Less',
      ',': 'Less',
      '>': 'Greater',
      '.': 'Greater',
      '?': 'Question',
      '/': 'Question',

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
      document.getElementById(this.firstUpperCase(this.keyCodeAlias[key] || key))
          .classList.add('btn-success');
      this.used();
    },
    checkUserKeyUp: function (event) {
      var key = event.keyCode === 32 ? 'space' : event.key;
      document.getElementById(this.firstUpperCase(this.keyCodeAlias[key] || key))
          .classList.remove('btn-success');
    },
    firstUpperCase: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    toThousand: function (number) {
      var num = (number || 0).toString();
      var result = '';
      while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
      }

      return num ? num + result : '';
    }
  }
});