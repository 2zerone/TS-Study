// 타입 주석
const a : number = 1;
const b : string = 'hi ts';
const c : boolean = true;

// any - 모든 것이 다 들어감 .. 최대한 피하기, 모든 에러의 근원이 될 수 있음
// number
// string
// boolean - true, false (0, 1은 number로 구분됨)
// object - 객체 계의 any .. 최대한 피하기, 모든 에러의 근원이 될 수 있음

// 타입 추론
let d = 1;
// d = 'hi';