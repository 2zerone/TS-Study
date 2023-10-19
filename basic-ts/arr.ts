const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

const arr3: string[] = ["hi", "hello", "world"];
const arr4: Array<string> = ["hi", "hello", "world"];

interface IPerson {
    name: string,
    age: number,
    city?: string, // city 값이 넘어올 수도 있고 넘어오지 않을 수도 있음
}

const arr5: IPerson[] = [
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

arr5.forEach((v: IPerson) => console.log(v?.city ?? "default"));

// 튜플 - 배열의 length와 원소를 바꿀 수 없는 자료구조
const arr6: [number, string, object ,any[]] = [1, "hi", {}, []];