interface IPerson {
    name: string,
    age: number,
    city?: string, // city 값이 넘어올 수도 있고 넘어오지 않을 수도 있음
}

const man = {
    name: 'younghan',
    age: 28,
    city: 'seoul',
};

// IPerson이 한 번 밖에 안 쓰인다는 가정 하에 직접 정의 가능
const man2: {name: string; age: number; city?: string;} = {
    name: 'younghan',
    age: 28,
    city: 'hanam',
};

// 웹 앱
////////////// 경계선 //////////////
// 서버

function prt(params: IPerson) {
    console.log(params?.city ?? "default");
}
prt(man);