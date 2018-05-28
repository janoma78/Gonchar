'use strict'; //comment
;(function () {
    console.log('HELLO!!'); //comment
   var firstTestVariable;
   firstTestVariable = 'test';
   console.log(firstTestVariable);
   var name = prompt('Как вас зовут?'),
       age = prompt('Вам есть 18 лет?', '20'),
       agee = prompt('Кто вы, мужчина или женщина?', 'женщины'),
       access = confirm('Вы идиот?');
   console.log(name,age,agee,access);

   if (access) {
      alert('Hello!');

   } else{
       alert('Goodbay!');

    }
    var color = prompt('Угадайте один из трех цветов'),
        etalonColor = 'Красный',
        etalonColor2 = 'Синий',
        etalonColor3 = 'Зеленый';
   if (color == etalonColor) {
       alert('УРА!' + etalonColor);

   } else if (color == etalonColor2) {
       alert('УРА!' + etalonColor2);

   } else if (color == etalonColor3) {
       alert('УРА!' + etalonColor3);

   } else {
       alert ('NO!');
   }

}) () ;
