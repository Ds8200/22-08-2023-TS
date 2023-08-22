// 1)
function returnMaxNum(x, y) {
    return x > y ? x : y;
}
// 2)
function printMaxNum(x, y) {
    console.log("".concat(x > y ? x : y));
}
printMaxNum(2, 4);
// 3)
function returnOddOrEven(num) {
    var str = num % 2 === 0 ? "even" : "odd";
    return "Num is: ".concat(str, ".");
}
console.log(returnOddOrEven(4));
// 4)
function returnLengthStr(str) {
    return str.length;
}
console.log(returnLengthStr("fabreeaBREBRBRBb"));
// 5)
function returnArrLenOfN(n) {
    var arrN = [];
    for (var i = 0; i < n; i++) {
        arrN.push(i + 1);
    }
    return arrN;
}
console.log(returnArrLenOfN(10));
// 6)
function maxNumInArr(arr) {
    var maxNum = arr[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        maxNum = num > maxNum ? num : maxNum;
    }
    return maxNum;
}
console.log(maxNumInArr([1, 2, 44, 4, 5]));
var dani = {
    Name: "Daniel",
    Age: 17,
    isStudent: true
};
// 8)
function printPerson(person) {
    console.log("".concat(person.Name, ", ").concat(person.Age, ", ").concat(person.isStudent));
}
printPerson(dani);
// 9)
function sMinor(person) {
    return person.Age < 18;
}
console.log(sMinor(dani));
var shayAgnon = {
    Title: "Daber",
    Author: "sssss",
    Year: 1995
};
function arrReaders() {
    var read1 = {
        Name: "Daniel",
        Age: 17,
        isStudent: true,
        favoriteBook: {
            Title: "Daber",
            Author: "Adam",
            Year: 1995
        }
    };
    var read2 = {
        Name: "Daniel",
        Age: 17,
        isStudent: true,
        favoriteBook: {
            Title: "koko",
            Author: "Adam",
            Year: 1990
        }
    };
    var read3 = {
        Name: "yoyo",
        Age: 100,
        isStudent: true,
        favoriteBook: {
            Title: "Daber",
            Author: "Adam",
            Year: 1995
        }
    };
    var read4 = {
        Name: "Daniel",
        Age: 17,
        isStudent: true,
        favoriteBook: {
            Title: "Daber",
            Author: "Adam",
            Year: 1995
        }
    };
    return [read1, read2, read3, read4];
}
var arrReaderss = arrReaders();
// 12)
function readerOld(arr) {
    var oldestReaderName;
    var maxAge = -1;
    arr.forEach(function (reader) {
        if (reader.Age > maxAge) {
            maxAge = reader.Age;
            oldestReaderName = reader.Name;
        }
    });
    return oldestReaderName;
}
console.log(readerOld(arrReaderss));
// 13)
function bookOld(arr) {
    var oldestBookName;
    var maxYear = arr[0].favoriteBook.Year;
    arr.forEach(function (reader) {
        if (reader.favoriteBook.Year < maxYear) {
            maxYear = reader.favoriteBook.Year;
            oldestBookName = reader.favoriteBook.Title;
        }
    });
    return oldestBookName;
}
console.log(bookOld(arrReaderss));
