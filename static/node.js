const express = require('express');
const app = express();
const path = require('path');

// Firebase 추가
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

// Firebase 구성 정보
const firebaseConfig = {
    apiKey: "AIzaSyBcqI5juIUtjHT3GcVfDIvanNQUFS5S5Jo",
    authDomain: "cj-project-da850.firebaseapp.com",
    databaseURL: "https://cj-project-da850-default-rtdb.firebaseio.com",
    projectId: "cj-project-da850",
    storageBucket: "cj-project-da850.appspot.com",
    messagingSenderId: "574274568290",
    appId: "1:574274568290:web:3f90f1caa04dacbd42d13b",
    measurementId: "G-WCDJM6KSMT"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firebase 데이터베이스 인스턴스 가져오기
const database = firebase.database();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { firebase, database };
