"use strict";
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ["hi", "hello", "world"];
var arr4 = ["hi", "hello", "world"];
var arr5 = [
    {
        name: 'younghan',
        age: 28,
        city: 'seoul',
    },
    {
        name: 'whoru',
        age: 22,
        city: 'hanam',
    },
    {
        name: 'carthegarden',
        age: 33,
    },
];
arr5.forEach(function (v) { var _a; return console.log((_a = v === null || v === void 0 ? void 0 : v.city) !== null && _a !== void 0 ? _a : "default"); });
// 튜플 - 배열의 length와 원소를 바꿀 수 없는 자료구조
var arr6 = [1, "hi", {}, []];
