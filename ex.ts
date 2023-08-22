// 1)
function returnMaxNum(x: number, y: number): number {
    return x > y ? x : y;
}

// 2)
function printMaxNum(x: number, y: number): void {
    console.log(`${x > y ? x : y}`)
}

printMaxNum(2, 4)

// 3)
function returnOddOrEven(num: number): string {
    const str: string = num % 2 === 0 ? "even" : "odd";
    return `Num is: ${str}.`;
}

console.log(returnOddOrEven(4));

// 4)
function returnLengthStr(str: string): number {
    return str.length;
}

console.log(returnLengthStr("fabreeaBREBRBRBb"));
// 5)
function returnArrLenOfN(n: number): number[] {
    const arrN = [];
    for (let i = 0; i < n; i++) {
        arrN.push(i + 1)
    }
    return arrN;
}

console.log(returnArrLenOfN(10));

// 6)
function maxNumInArr(arr: number[]): number {
    let maxNum = arr[0];
    for (let num of arr) {
        maxNum = num > maxNum ? num : maxNum;
    }
    return maxNum
}

console.log(maxNumInArr([1, 2, 44, 4, 5]));

// 7)
type Person = {
    Name: string;
    Age: number;
    isStudent: boolean;
}

const dani: Person = {
    Name: "Daniel",
    Age: 17,
    isStudent: true
}

// 8)
function printPerson(person: Person): void {
    console.log(`${person.Name}, ${person.Age}, ${person.isStudent}`);
}

printPerson(dani)

// 9)
function sMinor(person: Person): boolean {
    return person.Age < 18;
}

console.log(sMinor(dani));

// 10)
interface Book {
    Title: string;
    Author: string;
    Year: number;
}

const shayAgnon: Book = {
    Title: "Daber",
    Author: "sssss",
    Year: 1995
}

// 11)
type Reader = Person & {
    favoriteBook: Book;
}

function arrReaders(): Reader[] {
    const read1: Reader = {
        Name: "Daniel",
        Age: 17,
        isStudent: true,
        favoriteBook: {
            Title: "Daber",
            Author: "Adam",
            Year: 1995
        }
    }
    const read2: Reader = {
        Name: "Daniel",
        Age: 17,
        isStudent: true,
        favoriteBook: {
            Title: "koko",
            Author: "Adam",
            Year: 1990
        }
    }
    const read3: Reader = {
        Name: "yoyo",
        Age: 100,
        isStudent: true,
        favoriteBook: {
            Title: "Daber",
            Author: "Adam",
            Year: 1995
        }
    }
    const read4: Reader = {
        Name: "Daniel",
        Age: 17,
        isStudent: true,
        favoriteBook: {
            Title: "Daber",
            Author: "Adam",
            Year: 1995
        }
    }

    return [read1, read2, read3, read4]
}

const arrReaderss: Reader[] = arrReaders()


// 12)
function readerOld(arr: Reader[]): string | undefined {
    let oldestReaderName: string | undefined;
    let maxAge = -1;
    arr.forEach((reader) => {
        if (reader.Age > maxAge) {
            maxAge = reader.Age;
            oldestReaderName = reader.Name;
        }
    })
    return oldestReaderName;
}

console.log(readerOld(arrReaderss));

// 13)
function bookOld(arr: Reader[]): string | undefined {
    let oldestBookName: string | undefined;
    let maxYear = arr[0].favoriteBook.Year;
    arr.forEach((reader) => {
        if (reader.favoriteBook.Year < maxYear) {
            maxYear = reader.favoriteBook.Year;
            oldestBookName = reader.favoriteBook.Title;
        }
    })
    return oldestBookName;
}

console.log(bookOld(arrReaderss));