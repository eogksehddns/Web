// login.js

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

// 사용자 입력 검증 함수
function validateInput(input, type) {
    const regex = {
        username: /^[a-zA-Z0-9]{4,12}$/, // 4~12글자, 영어와 숫자 조합
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ // 8글자 이상, 영문, 숫자, 특수문자 포함
    };

    if (!input || !regex[type].test(input)) {
        return false;
    }
    return true;
}

document.getElementById('id-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('id-login-error');

    // 입력 검증
    if (!validateInput(username, 'username')) {
        errorMessage.textContent = '아이디는 4~12글자, 영어와 숫자 조합만 가능합니다.';
        errorMessage.style.display = 'block';
    } else if (!validateInput(password, 'password')) {
        errorMessage.textContent = '비밀번호는 8글자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Firebase 로그인 처리 로직
        loginWithUsernameAndPassword(username, password)
            .then(() => {
                console.log('로그인 성공');
                // 리디렉션 또는 다른 작업 수행
                window.location.href = '/heart_rate'; // heart_rate.html로 리디렉션
            })
            .catch((error) => {
                console.log('로그인 오류:', error.message);
                // 에러 메시지 표시
                errorMessage.textContent = error.message;
                errorMessage.style.display = 'block';
            });
    }
});

document.getElementById('bio-login').addEventListener('submit', function(event) {
    event.preventDefault();
    // 생체 인식 로그인 로직 구현 (여기서는 예시로 alert 사용)
    alert('생체 인식 로그인 요청이 전송되었습니다.');
});

// 사용자명과 비밀번호로 로그인하는 Firebase 함수
async function loginWithUsernameAndPassword(username, password) {
    try {
        // Firebase에서 사용자명으로 이메일 주소 가져오기
        const userSnapshot = await firebase.database().ref('users').orderByChild('username').equalTo(username).once('value');
        const userData = userSnapshot.val();

        if (userData) {
            const email = Object.values(userData)[0].email; // 사용자 이메일 가져오기
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } else {
            throw new Error('등록되지 않은 아이디입니다.');
        }
    } catch (error) {
        throw error;
    }
}