// script.js

// Firebase 초기화
firebase.initializeApp({
  apiKey: "AIzaSyBcqI5juIUtjHT3GcVfDIvanNQUFS5S5Jo",
  authDomain: "cj-project-da850.firebaseapp.com",
  databaseURL: "https://cj-project-da850-default-rtdb.firebaseio.com",
  projectId: "cj-project-da850",
  storageBucket: "cj-project-da850.appspot.com",
  messagingSenderId: "574274568290",
  appId: "1:574274568290:web:3f90f1caa04dacbd42d13b",
  measurementId: "G-WCDJM6KSMT"
});

function showLoginForm(formId) {
  const idLoginForm = document.getElementById('id-login');
  const bioLoginForm = document.getElementById('bio-login');
  const idLoginButton = document.querySelector('.login-tabs button[onclick="showLoginForm(\'id-login\')"]');
  const bioLoginButton = document.querySelector('.login-tabs button[onclick="showLoginForm(\'bio-login\')"]');

  if (formId === 'id-login') {
      idLoginForm.style.display = 'block';
      bioLoginForm.style.display = 'none';
      idLoginButton.classList.add('active');
      bioLoginButton.classList.remove('active');
  } else {
      idLoginForm.style.display = 'none';
      bioLoginForm.style.display = 'block';
      idLoginButton.classList.remove('active');
      bioLoginButton.classList.add('active');
  }
}

document.getElementById('id-login').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const errorMessage = document.getElementById('id-login-error');

  if (!username) {
      errorMessage.textContent = '아이디 입력이 필요합니다';
      errorMessage.style.display = 'block';
  } else if (!password) {
      errorMessage.textContent = '비밀번호 입력이 필요합니다';
      errorMessage.style.display = 'block';
  } else {
      errorMessage.style.display = 'none';
      // Firebase 로그인 처리 로직
      firebase.auth().signInWithEmailAndPassword(username, password)
          .then((userCredential) => {
              // 로그인 성공 처리
              var user = userCredential.user;
              console.log('로그인 성공:', user);
              // 리디렉션 또는 다른 작업 수행
              
          })
          .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log('로그인 오류:', errorCode, errorMessage);
              // 에러 메시지 표시
              document.getElementById('id-login-error').textContent = errorMessage;
              document.getElementById('id-login-error').style.display = 'block';
          });
  }
});

document.getElementById('bio-login').addEventListener('submit', function(event) {
  event.preventDefault();
  // 생체 인식 로그인 로직 구현 (여기서는 예시로 alert 사용)
  alert('생체 인식 로그인 요청이 전송되었습니다.');
});
