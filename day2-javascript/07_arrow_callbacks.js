// 이름이 있는 함수
function multiplyNamed(left, right) {
  return left * right;
}

// 익명 함수를 변수에 대입
// -> 변수명 == 함수명
const multiplyExpression = function (left, right) {
  return left * right;
};
console.log("함수 선언:", multiplyNamed(3, 4));
console.log("익명 함수 표현식:", multiplyExpression(3, 4));

const sayHello = () => "안녕하세요";
const double = (number) => number * 2;
let multiplyArrow;
// ***** TODO 1. 두 매개변수를 곱해 반환하는 화살표 함수 전체를 저장하기 *****
multiplyArrow = (left, right) => left * right;
// **************************************************************
console.log("매개변수 0개:", sayHello());
console.log("매개변수 1개:", double(4));
if (typeof multiplyArrow === "function") {
  console.log("매개변수 2개:", multiplyArrow(3, 4));
} else {
  console.log("두 매개변수 함수 값:", multiplyArrow);
}

// 식 본문이 포함된 화살표 함수
const squareExpression = (number) => number * number;

// 블록 본문이 포함된 화살표 함수
const squareBlock = (number) => {
  const result = number * number;
  // ***** TODO 2. 블록 형태의 화살표 함수에서 result 반환하기 *****
  return result;
  // **************************************************************
};
const squareWithoutReturn = (number) => {
  number * number;
};
console.log("식의 자동 반환:", squareExpression(5));
console.log("블록의 명시적 반환:", squareBlock(5));
console.log("return 없는 블록:", squareWithoutReturn(5));

/* 고차 함수
 - 함수를 매개 변수로 전달받거나, 함수를 반환하는 함수
 */

/* 매개 변수 operation
 - addTen 함수를 전달받음
  == 콜백 함수
    -> 고차 함수 호출(call)시 매개 변수로 전달된 함수
       고차 함수에서 내에서 해당 함수를 이용해서 결과를 만들어 반환(back)
 */
function applyOperation(value, operation) {
  // ***** TODO 3. 전달받은 함수를 value로 호출하고 그 결과 반환하기 *****
  return operation(value);
  // **************************************************************
}
const addTen = function (number) {
  return number + 10;
};
console.log("이름으로 전달:", applyOperation(5, addTen));
console.log("익명 함수로 전달:", applyOperation(5, function (number) {
  return number * 3;
}));
let callbackResult;
// ***** TODO 4. 값을 두 배로 만드는 화살표 콜백을 applyOperation에 전달하기 *****
callbackResult = applyOperation(5, (number) => number * 2);
// **************************************************************
console.log("화살표로 전달:", callbackResult);
console.log("전달할 함수의 자료형:", typeof addTen);
console.log("호출한 결과의 자료형:", typeof addTen(5));

console.log("1. 호출 전");
const nextValue = applyOperation(10, function (number) {
  console.log("2. 콜백 실행:", number);
  return number + 1;
});
console.log("3. 호출 후:", nextValue);
