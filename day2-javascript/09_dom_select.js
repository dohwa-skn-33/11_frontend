const result = document.querySelector("#result");
let classroom = null;

// ***** TODO 1. #classroom 요소를 찾아 classroom에 저장하기 *****

// **************************************************************

// 선택한 부모 안에서 다시 찾으면 검색 범위가 그 영역으로 좁아진다.
if (classroom !== null) {
  const firstLesson = classroom.querySelector(".lesson");
  if (firstLesson !== null) {
    // ***** TODO 2. 첫 수업의 글자를 읽어 result에 안내 문장 표시하기 *****

    // **************************************************************
  }
}

const selectedBook = document.querySelector("#selected-book");
const missingResult = document.querySelector("#missing-result");
let firstBook = null;

// ***** TODO 3. #book-list 안의 첫 .book 요소를 firstBook에 저장하기 *****

// **************************************************************

// 요소 객체가 있을 때만 그 안의 글자를 읽는다.
if (firstBook !== null) {
  // ***** TODO 4. firstBook의 글자를 읽어 선택한 도서 문장으로 출력하기 *****

  // **************************************************************
}

// ***** TODO 5. 없는 .not-found 요소를 찾고 null이면 안내 표시하기 *****

// **************************************************************
