// ***** TODO 1. const로 cafeName을 선언하고 카페 이름 출력하기 *****

// 한 줄 주석
/* 여러 줄 주석 */

/*
 변수명 작성법
 - 파이썬      : cafe_name (snake case)
 - 자바스크립트 : cafeName  (camel case)
 */

const cafeName = "고품격 커피 공장";
console.log("카페 이름:", cafeName);

/*
 const로 선언한 변수는 값 변경 불가
 cafeName = "메가커피"; // TypeError: Assignment to constant variable.
 */

// **************************************************************
const orderNumber = 17;
console.log("주문 번호:", orderNumber);

// let: 값 변경 가능한 변수 키워드
let quantity = 2;
console.log("변경 전 수량:", quantity);
// ***** TODO 2. quantity에 새 수량 3을 대입하기 *****
quantity = 3;
// **************************************************************
console.log("변경 후 수량:", quantity);
const savedQuantity = quantity;
quantity = 4;
console.log("현재 수량:", quantity);
console.log("앞서 저장한 수량:", savedQuantity);

// 이 문장은 실행되지 않는 한 줄 주석이다.
let message = "";
/* 안내 문장을 먼저 만들고,
   그 문장을 출력하여 현재 상태를 확인한다. */
// ***** TODO 3. message에 주문 확인 완료 안내 문자열 대입하기 *****
message += "주문 "
message += "확인 완료"
// **************************************************************
console.log("처리 상태:", message);
console.log("마지막 줄까지 실행했습니다.");
