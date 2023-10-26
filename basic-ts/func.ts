function add(a: number, b: number): void {
    console.log("hello world!")
    return; // return문이 없거나 return문에 ';'만 찍혀있을 경우 아무것도 반환하지 않는 것이므로 void
}

const minus: minusFunc = (a: number, b: number): string => String(a - b);

const multiple: mainMultiFunc = (a: number, b: number): subMultiFunc => {
    return () => {
        return a * b * 2;
    }
}

// Same function
const multiple2: (a: number, b: number) => () => number = (a: number, b: number): () => number => {
    return () => {
        return a * b * 2;
    }
}

type typeName = any;
type addFunc = (a: number, b: number) => string;
type minusFunc = (a: number, b: number) => string;
type subMultiFunc = () => number;
type mainMultiFunc = (a: number, b: number) => subMultiFunc;

type MyString = string;
type YHNumber = number;
type SuperVoid = void;

// 타입 별칭을 사용하는 대표적 2가지 이유
// 1. 함수가 길 때
// 2. 타입 자체가 길어질 때 >> "hello" | "world" | "hi" | "bye" . . . . .

function sendError() {
    console.log("에러 발생");
}

const result = sendError();
console.log("result: ", result);
