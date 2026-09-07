const aiForm = document.querySelector("#ai-form");
const promptInput = document.querySelector("#prompt");
const aiMode = document.querySelector("#ai-mode");
const responseFormat = document.querySelector("#response-format");
const askButton = document.querySelector("#ask-button");
const aiStatus = document.querySelector("#ai-status");
const aiResult = document.querySelector("#ai-result");
const formatBadge = document.querySelector("#format-badge");
const answerText = document.querySelector("#answer-text");
const answerMeta = document.querySelector("#answer-meta");
const rawOutput = document.querySelector("#ai-raw");

function setAiBusy(busy) {
  promptInput.disabled = busy;
  aiMode.disabled = busy;
  responseFormat.disabled = busy;
  askButton.disabled = busy;
  aiForm.setAttribute("aria-busy", String(busy));
}

async function handleAiSubmit(event) {
  event.preventDefault();

  let prompt;
  // ***** TODO 1. 질문의 앞뒤 공백을 제거하고 빈 입력을 검사하기 *****
  prompt = promptInput.value.trim();
  // **************************************************************
  if (prompt === undefined) {
    showStatus(aiStatus, "질문 검사 작성 대기 상태이다.", "idle");
    return;
  }

  if (askButton.disabled || !requireHttp(aiStatus)) return;
  aiResult.hidden = true;
  rawOutput.textContent = "응답을 기다리는 중이다.";
  setAiBusy(true);
  showStatus(aiStatus, "AI 응답을 기다리는 중이다.", "loading");

  try {
    let endpoint;
    // ***** TODO 2. 선택 형식과 lessonApiUrl로 8001 서버 API 주소 만들기 *****
    // lessonApiUrl(): http://127.0.0.1:8001 주소 붙여주는 함수
    endpoint = lessonApiUrl(`/api/openai/${responseFormat.value}`);
    // **************************************************************
    if (endpoint === undefined) return;

    let options;
    // ***** TODO 3. 질문과 mode를 담은 POST JSON 요청 옵션 만들기 *****
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, mode: aiMode.value }),
    };
    // **************************************************************
    if (options === undefined) return;

    let response;
    // ***** TODO 4. 요청을 보내고 HTTP 실패를 오류로 바꾸기 *****
    response = await fetch(endpoint, options);

    if (!response.ok) {
      const problem = await response.json().catch(() => ({}));
      throw new Error(problem.message || `HTTP ${response.status}: AI 요청에 실패했다.`);
    }
    // **************************************************************
    if (response === undefined) return;

    let displayedText;
    let rawText;
    let metaText = "";

    // ***** TODO 5. 선택에 따라 text 또는 JSON 본문을 한 번 읽기 *****
    if (responseFormat.value === "text") {
      displayedText = await response.text();
      rawText = displayedText;
    } else {
      const data = await response.json();
      displayedText = data.text;
      metaText = `출처: ${data.source} · 모델: ${data.model}`;
      rawText = JSON.stringify(data, null, 2);
    }
    // **************************************************************
    if (displayedText === undefined || rawText === undefined) return;

    // ***** TODO 6. 응답 형식과 답변 및 원본을 화면에 표시하기 *****
    formatBadge.textContent = responseFormat.value === "text" ? "text/plain" : "application/json";
    answerText.textContent = displayedText;
    answerMeta.textContent = metaText;
    rawOutput.textContent = rawText;
    aiResult.hidden = false;
    showStatus(aiStatus, "AI 응답을 화면에 표시했다.", "success");
    // **************************************************************
  } catch (error) {
    aiResult.hidden = true;
    rawOutput.textContent = "응답을 표시할 수 없다.";
    showStatus(aiStatus, describeError(error), "error");
  } finally {
    setAiBusy(false);
  }
}

aiForm.addEventListener("submit", handleAiSubmit);
requireHttp(aiStatus);
