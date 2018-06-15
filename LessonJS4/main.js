;(function() {
    var student = {
        name: 'Vasya',
        secondName: 'Petrov',
        age: '22',
        country: 'USA',
        relatives: {
            mother: ' Maria Ivanovna ',
            father: ' Fedor Alexseevich'
        }
    };
    console.log(student);
    console.log(' Уважаемый, ' + student.name + ' ' + student.secondName + ', поздравляем с тем, что в свои ' + student.age + ' года Вы уже уехали в ' + student.country);
    student.country = 'Ukraine';
    student.city = ' Kramatorsk ';
    console.log(student);
    console.log(student.country);
    console.log(student.region);
    console.log(student.relatives.mother);
    console.log(student.relatives);
    student.cars = {};
    student.cars.sport = ' ZAZ ';
    console.log(student);


    var fruits = [
        'appel',
        'lime',
        'orange',
         15,
        {
            color: 'green',
            size: 2,
            country: 'Africa'
        },
        null
    ];
    console.log(fruits);
    console.log(typeof fruits);
    console.log('1', fruits [1]);
    console.log('2', fruits [2]);
    console.log('3', fruits [3]);
    console.log('4', fruits [4] ['size']);
    console.log('5', fruits [5]);


    var matrix = [
        [2, 3, 8],
        [1, 5, 6],
        [4,44, 3]
    ];
    console.log(matrix [1] [2]);
    student.relatives = [
        {
            position: 'mother',
            name: ' Maria Ivanovna ',
            phone: 0999995544
        },
        {
            position: 'father',
            name: '  Fedor Alexseevich',
            phone: 0991113388

        }
    ];
    console.log(student);
    console.log(fruits.length);
    fruits[55] = 'banana';
    console.log(fruits.length);
    fruits.push('cocos');
    fruits.unshift('mango');
    console.log(fruits);
    console.log(fruits.shift());
    console.log('pop', fruits.pop());
    console.log(fruits.concat(matrix));
    fruits.splice(3);

    var cars = [ 'ZAZ', 'VAZ', 'ZIL', 'MAZ', 'BMW', 'AUDI']
    console.log('На нашем тестдрайве побывали: ' + cars.join(', '));


    delete student.relatives[0].phone;
    console.log(student);


    for (var i=0; i<cars.length; i++) {
        console.log('Машина ' + (i + 1) + ': ' + cars[i]);
        document.write('<div> Машина ' + (i + 1) + ': ' + cars[i] + '</div>' );

    }


    for (var key in student.relatives [1]) {

        // console.log(key);
        // console.log(key, student.relatives[1][key]);
        console.log(key + ':', student.relatives[1][key]);

    };


    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };

    var sum = 0,
        maxSalary = 0,
        maxSalaryName;

    for (var key in salaries ) {
        sum += salaries[key];

    }
    console.log('sum', sum);

    for (var key in salaries) {
        if (maxSalary < salaries[key]) {
            maxSalary = salaries[key];
            maxSalaryName = key;
        }
    }

    console.log('MAX:' + maxSalary);


    // var max = getMaxValue(salaries);
    // var min = getMinValue(salaries);
    // alert(max);
    // alert(min);
}) ();