;(function () {

// var number = 33,
//     string = 'text',
//     boolean = true,
//     varNull = null,
//     varUndefine = undefined,
//     varObject = {
//         num: 44455555,
//         name: 'Ivan',
//         age: number,
//         sport: true,
//         clothes: {
//             shirt: true,
//             sneakers: true
//         }
//     };
// console.log(typeof number, number);
// console.log(typeof string, string);
// console.log(typeof boolean, boolean);
// console.log(typeof varNull, varNull);
// console.log(typeof varUndefine, varUndefine);
// console.log(typeof varObject, varObject);
//
// var result = 10 + 2 * 3 - 8 / 2;
// console.log(result);
// console.log('Число' + result + 'text', result % 53);
//
// var newNumber = result - 5;
// console.log(newNumber);
// newNumber = newNumber + 5;
// console.log(1, newNumber);
// newNumber += 5;
// console.log(2, newNumber);
// newNumber++;
// console.log(3, newNumber);
// console.log(4, newNumber += 5);
//
// console.log(string);

    /*---------------------------------------*/

// var name = prompt('Text');
// var sum = function (min, max) {
//
//     return Math.random() * (max - min) + min;
//
// };
// console.log('Hello,' + name + '! \n\r' + 'Круто ты \'попал\' на  ' + Math.ceil(sum(0, 100)) + '$');
// console.log(5 + ''); //preobrazovat chislo v text
// console.log(+'5'); //preobrazovat  text v chislo
// console.log(true);
// console.log(!true);
// console.log(!!undefined);
// console.log(!!null);
// console.log(!!1);
// console.log(!!0);
// console.log(!!NaN);
// console.log(!!'bnbn');
// console.log(!!'');
// console.log(1 / 0);
// console.log(1 == 1);
// console.log(1 == 2);
// console.log(1 != 2);
// console.log(1 > 2);
// console.log(1 >= 1);
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 !== '1');
// console.log('o' > '12');
//
// console.log(true || false); // true   1 || 1 = 1
// console.log(true && false); // false  1 && 0 = 0
// console.log(1 + 2 || 1 - 2);
//
// if (1 != 1 || 1 < 2 && 'ffffff' || 0) {
//     console.log('From if');
//
// } else {
//     console.log(' From else');
// }
//
// if (1 != 1 && (1 < 2 || 'ffffff' || 0)) {
//     console.log('From if');
//
// } else {
//     console.log(' From else');
// }
// ;


    /*-------------------------------------*/

// var etalonLogin = 'Ivan',
//     etolonPassword = '123456',
//     login = prompt('Введите логин'),
//     password = password;
//
// if (login === etalonLogin && password === etolonPassword) {
//     alert('Добро пожаловать, ' + login + '!');
// }else if (login !== etalonLogin) {
//     alert('Неверный логин');
// }
//  else { password = prompt ('Введите пароль');
//
// };
//
// if (password !== etolonPassword) {
//     alert('Неверный пароль');
// } else {
//     alert('Добро пожаловать!');
// };

    var etalonLogin = ['Ivan', 'Masha', 'Fedor'],
        etolonPassword = '123456',
        login = prompt('Введите логин'),
        password = prompt('Введите пароль');
    console.log(etalonLogin);

    if (login !== etalonLogin[0]
        && login !== etalonLogin[1]
        && login !== etalonLogin[2]) {
        alert('Неверный логин');
    } else if (password !== etolonPassword) {
        alert('Неверный пароль');
    } else {
        alert('Добро пожаловать, ' + login + '!');
    }
    ;


    var users = [{
        name: 'Masha',
        password: '123456',
        job: 'doctor',
        country: 'Ukraine'
    },
        {
            name: 'Ivan',
            password: '12345',

            job: 'lawyer',
            country: 'Russia'

        },
        {
            name: 'Fedor',
            password: '1234',

            job: 'driver',
            country: 'Moldova'
        }
    ];


    console.log(typeof users);
    console.log(users.length);  //Длинна массива
    console.log(users[0].name); // обращение к первому эл. массива
    for (var i = 0; i <= users.length - 1; i++) {
        console.log(users[i].name + ' - ' + users[i].job); // вывести всех пользователей по имени

        if (sum >= 2000000) {
            /*break;*/ //выйти с цикла
            continue; // пропустить
        }

    }


    var i = 0;
    while (i < users.length) {
        //console.log(users[i++]); //если счетчик используется 1 раз, то запись можно сократить
;        console.log(users[i].name + ' from ' + users[i].country);
        i++
    }
})();

