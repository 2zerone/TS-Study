"use strict";
var man = {
    name: 'younghan',
    age: 28,
    city: 'seoul',
};
// IPerson이 한 번 밖에 안 쓰인다는 가정 하에 직접 정의 가능
var man2 = {
    name: 'younghan',
    age: 28,
    city: 'hanam',
};
// 웹 앱
////////////// 경계선 //////////////
// 서버
function prt(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default");
}
prt(man);
