// enum
// js에는 enum이 없기 때문에 컴파일 한 js 파일에는 function으로 구현됨
enum categoryEnum {
    H = "H",
    K = "K",
    S = "S",
}

const category: categoryEnum = categoryEnum.H;

// web app
// base line
// server

function cate(category: any) {
    if(category === "H") {
        console.log("5% 할인")
    } else if(category === "K") {
        console.log("50% 할인")
    } else if(category === "S") {
        console.log("80% 할인")
    } else {
        console.log("server stop")
    }
}

cate(category);

// literal type

enum sexEnum {
    MALE = "MALE",
    FEMALE = "FEMALE",
    ETC = "ETC",
}

const sex: sexEnum = sexEnum.MALE;
const sex2: "MALE" | "FEMALE" | "ETC" = "MALE"; // 재활용하지 않고 값도 많지 않을 경우 사용
