;(function () {
    function doSomething() {
        console.log(222222222222);

    }

    doSomething();

    /*--------------Пример №1--------------------*/

    // var sayHello = function () {
    //     console.log('Hello, Ivan!');
    //
    // }
    // sayHello();
    //

    /*------------------Пример №2-------------------*/
    //
    // var sayHello = function (name) {
    //     console.log('Hello, ' + name + '!');
    //
    // }
    // sayHello('Ivan');
    //
    /*------------------Пример №3-----------------*/
    // var sayHello = function (name) {
    //     if (name === undefined) {
    //         name = 'Дорогой гость!';
    //
    //         console.log('Hello, ' + name + '!');
    //     }
    //
    // }
    //
    // sayHello('Ivan');
    // sayHello();

    /*--------------------Пример №4-----------------*/
    // var sayHello = function (name, lastName) {
    //
    //         person = name || 'Дорогой гость!';
    //
    //         console.log('Hello, ' + person + ' ' + lastName + '!');
    //     }
    //
    //
    //
    // sayHello('Ivan', 'Пупкин');
    // sayHello();

    /*---------------------Пример №5-----------------------*/
    // var sayHello = function (name, lastName) {
    //
    //     if (name && lastName) {
    //
    //         person = name + ' ' + lastName;
    //     } else if (!name && lastName) {
    //         person = lastName;
    //     } else if (name && !lastName) {
    //         person = name;
    //     } else {
    //         person = 'Дорогой гость!';
    //     }
    //
    //     console.log('Hello, ' + person + '!');
    //
    // }
    //
    // sayHello('Ivan', 'Пупкин');
    // sayHello('Ivan');
    // sayHello(' ', 'Пупкин');
    // sayHello();


    /*---------------------Пример №6-----------------------*/
    // var sayHello = function (name, lastName) {
    //     var person;
    //     person = (name && lastName)
    //         ? (name + ' ' + lastName)
    //         : (!name || lastName)
    //             ? name || lastName
    //             : 'Дорогой гость!';
    //
    //
    //     person = (name || lastName) || 'Дорогой гость!';
    //
    //
    //     console.log('Hello, ' + person + '!');
    // }

    /*---------------------Пример №7-----------------------*/
    //
    // var test = function () {
    //     return 'test';
    // }
    // console.log(test());


    /*---------------------Пример №8-----------------------*/
    var param3 = 123;
    var param4 = 777;
    var sum = function (param1, param2) {
        console.log('param1', param1);
        console.log('param2', param2);
        var param3 = 456;
        param4 = 555;
        console.log('local param3', param3);
        console.log('local param4', param4);
        return param1 + param2;
    }

    console.log('tyreof', typeof param1);
    console.log('param3', param3);
    console.log('global param4', param4); //до вызовы функции переменная гдабальная = 777
    console.log('sum', sum(5, 10) + 8);
    console.log('perglobal param4', param4); // после вызова функции переменная переопределяется = 555


    var winsSum = 5000000;
    function cancelWin() {
      //...
      var wins = 60000;
      console.log('Победы до лимита');
      if (wins >= winsSum) {
          return;

      }

    }

})();


