function add(a: number, b: number): void {
    console.log("hello world!")
    return; // return문이 없거나 return문에 ';'만 찍혀있을 경우 아무것도 반환하지 않는 것이므로 void
}

const minus: (a: number, b: number) => string = (
    a: number,
    b: number,
): string => String(a - b);