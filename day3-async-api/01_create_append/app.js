const serviceForm = document.querySelector("#service-form");
const serviceNameInput = document.querySelector("#service-name");
const serviceCategorySelect = document.querySelector("#service-category");
const serviceDescriptionInput = document.querySelector("#service-description");
const serviceList = document.querySelector("#service-list");
const serviceMessage = document.querySelector("#service-message");
let nextServiceId = 1;

function addServiceCard(event) {
  let serviceName = "";
  let category = "";
  let description = "";

  // ***** TODO 1. 기본 제출을 막고 폼 입력값 세 개 읽기 *****

  // **************************************************************

  if (serviceName === "" || description === "") {
    serviceMessage.textContent = "서비스 이름과 설명을 모두 입력한다.";
    (serviceName === "" ? serviceNameInput : serviceDescriptionInput).focus();
    return;
  }

  let card = null;
  let badge = null;
  let title = null;
  let descriptionText = null;
  let deleteButton = null;

  // ***** TODO 2. 카드에 필요한 다섯 요소 만들기 *****

  // **************************************************************

  if (!card || !badge || !title || !descriptionText || !deleteButton) return;

  // ***** TODO 3. 사용자 입력을 각 요소의 textContent에 넣기 *****

  // **************************************************************

  // ***** TODO 4. class와 data 속성으로 요소의 역할 기록하기 *****

  // **************************************************************

  // ***** TODO 5. 자식 요소를 카드에 붙이고 카드를 목록에 붙이기 *****

  // **************************************************************

  // ***** TODO 6. 삭제 버튼을 누르면 현재 카드 제거하기 *****

  // **************************************************************

  nextServiceId += 1;
  serviceForm.reset();
  serviceMessage.textContent = serviceName + " 카드를 추가했다.";
  serviceNameInput.focus();
}

// ***** TODO 7. form의 submit 이벤트에 addServiceCard 함수 등록하기 *****

// **************************************************************
