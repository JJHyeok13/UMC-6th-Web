// 가입하기 버튼을 누르면 handleJoin 함수 호출
document.getElementById("join").addEventListener("click", handleJoin);

// 가입하기 버튼을 누르면 호출할 handleJoin 함수 정의
function handleJoin() {
  const nameInput = document.getElementById("name");
  const nicknameInput = document.getElementById("nickname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const namePass = document.getElementById("name-pass");
  const nicknamePass = document.getElementById("nickname-pass");
  const emailPass = document.getElementById("email-pass");
  const passwordPass = document.getElementById("password-pass");
  const confirmPasswordPass = document.getElementById("confirm-pass");

  const nameWarn = document.getElementById("name-warn");
  const nicknameWarn = document.getElementById("nickname-warn");
  const emailWarn = document.getElementById("email-warn");
  const passwordWarn = document.getElementById("password-warn");
  const confirmPasswordWarn = document.getElementById("confirm-warn");

  // 이름 입력창이 비어있지 않으면 isNameValid === true
  const isNameValid = nameInput.value.trim() !== "";

  // 닉네임이 2자에서 5자 사이면 isNicknameValid === true
  const isNicknameValid =
    nicknameInput.value.trim().length >= 2 &&
    nicknameInput.value.trim().length <= 5;

  // 이메일, 비밀번호 유효성 검사에 사용할 정규식 패턴
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // 이메일, 비밀번호의 형식이 정규식 패턴에 맞으면 true
  const isEmailValid = emailRegex.test(emailInput.value.trim());
  const isPasswordValid = passwordRegex.test(passwordInput.value.trim());

  // 비밀번호가 형식에 맞으며 비밀번호와 비밀번호 확인을 동일하게 입력하면 true
  const isConfirmPasswordValid =
    isPasswordValid && passwordInput.value === confirmPasswordInput.value;

  // isNameValid === true 라면
  if (isNameValid) {
    namePass.style.display = "block"; // 통과 메시지를 출력
    nameWarn.style.display = "none"; // 경고 메시지는 숨김
  } else {
    // false 라면
    namePass.style.display = "none"; // 통과 메시지는 숨김
    nameWarn.style.display = "block"; // 경고 메시지 출력
  }

  if (isNicknameValid) {
    nicknamePass.style.display = "block";
    nicknameWarn.style.display = "none";
  } else {
    nicknamePass.style.display = "none";
    nicknameWarn.style.display = "block";
  }

  if (isEmailValid) {
    emailPass.style.display = "block";
    emailWarn.style.display = "none";
  } else {
    emailPass.style.display = "none";
    emailWarn.style.display = "block";
  }

  if (isPasswordValid) {
    passwordPass.style.display = "block";
    passwordWarn.style.display = "none";
  } else {
    passwordPass.style.display = "none";
    passwordWarn.style.display = "block";
  }

  if (isConfirmPasswordValid) {
    confirmPasswordPass.style.display = "block";
    confirmPasswordWarn.style.display = "none";
  } else {
    confirmPasswordPass.style.display = "none";
    confirmPasswordWarn.style.display = "block";
  }

  // 모든 조건을 통과했을 때
  if (
    isNameValid &&
    isNicknameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    // 모달창을 여는 함수를 호출!
    showModal();
  }
}

// 모달창 여는 함수
function showModal() {
  const modalWrapper = document.querySelector(".modal-wrapper");
  const modalCloseButton = modalWrapper.querySelector(".close-wrapper button");

  // 모달창 표시
  modalWrapper.style.display = "flex";
  // 모달창 닫기 버튼 활성화
  modalCloseButton.addEventListener("click", hideModal);
}

// 모달창 닫는 함수
function hideModal() {
  const modalWrapper = document.querySelector(".modal-wrapper");

  // 모달창 숨김
  modalWrapper.style.display = "none";
}
