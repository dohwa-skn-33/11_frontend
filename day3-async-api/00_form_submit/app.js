const joinForm = document.querySelector("#join-form");
const nameInput = document.querySelector("#applicant-name");
const formMessage = document.querySelector("#form-message");
const submitButton = document.querySelector("#submit-join");

function handleSubmit(event) {
  // form의 기본 제출보다 현재 화면의 검증을 먼저 실행한다.
  event.preventDefault();
  let name = "";

  // ***** TODO 1. 현재 입력값의 앞뒤 공백을 제거해 name에 저장하기 *****

  // **************************************************************

  if (name === "") {
    // ***** TODO 2. aria-invalid를 true로 설정하고 빈 이름 오류 표시하기 *****

    // **************************************************************

    nameInput.focus();
    return;
  }

  // ***** TODO 3. 이전 오류 속성을 제거하고 신청 확인 문장 표시하기 *****

  // **************************************************************
}

// 버튼 클릭과 Enter 제출을 하나의 함수로 처리한다.
joinForm.addEventListener("submit", handleSubmit);

// ***** TODO 4. submitButton의 disabled를 false로 바꾸어 제출 버튼 활성화하기 *****

// **************************************************************

const signupForm = document.querySelector("#signup-form");
const signupNameInput = document.querySelector("#signup-name");
const signupEmailInput = document.querySelector("#signup-email");
const signupPasswordInput = document.querySelector("#signup-password");
const signupMessage = document.querySelector("#signup-message");
const signupSubmitButton = document.querySelector("#signup-submit");
const signupInputs = [signupNameInput, signupEmailInput, signupPasswordInput];

function handleSignup(event) {
  let memberName = "";
  let email = "";
  let password = "";

  // ***** TODO 5. 기본 제출을 막고 이름·이메일·비밀번호 값 읽기 *****

  // **************************************************************

  // ***** TODO 6. 세 입력 요소에 남아 있는 이전 오류 상태 제거하기 *****

  // **************************************************************

  let invalidInput = null;
  let errorMessage = "";

  // ***** TODO 7. 이름·이메일·비밀번호 순서로 첫 오류 찾기 *****

  // **************************************************************

  if (invalidInput) {
    invalidInput.setAttribute("aria-invalid", "true");
    signupMessage.textContent = errorMessage;
    invalidInput.focus();
    return;
  }

  // ***** TODO 8. 비밀번호를 제외한 가입 확인 문장을 표시하고 폼 비우기 *****

  // **************************************************************
}

// ***** TODO 9. signup form의 submit 이벤트를 등록하고 버튼 활성화하기 *****

// **************************************************************
