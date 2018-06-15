;(function() {
    // var arr = [1, 2, 3, 4];
    // var square = arr.map(
    //     function squarexx( x ) {
    //         return x * x;
    //     }
    // );
    // console.log('arr', arr);
    // console.log('square', square );
    // // console.log(map(square, [1, 2, 3, 4]));
    //
    //
    //
    // var arr = [1, 4, 9];
    // var square = arr.map(Math.sqrt);
    // console.log('arr2', arr);
    // console.log('square2', square);
    // // console.log(map(square, arr))

    var promtArr = [];
    promtArr.push(prompt('Введите первое число массива'));
    promtArr.push(prompt('Введите второе число массива'));
    promtArr.push(prompt('Введите третье число массива'));

    function square(x) { return x * x; } // возведение в квадрат
    function cube(x) { return x * x * x; } // возведение в квадрат

    function mapFn(fn, array) {
        var newArray = [];
        for (var i=0; i<array.length; i++) {
            newArray.push(fn(array[i]));

        }

        return newArray;

    }

    console.log(mapFn(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
    console.log(mapFn(square, [])); // []

    var arr = [1, 2, 3];
    console.log(mapFn(square, arr)); // [1, 4, 9]
    console.log(mapFn(cube, arr)); // [1, 4, 9]
    console.log(arr); // [1, 2, 3]


}) ();



