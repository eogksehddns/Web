const admin = require('firebase-admin');

// Firebase Admin SDK 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: 'https://cj-project-da850-default-rtdb.firebaseio.com/user_id'
});

// 데이터 추가 예시
const db = admin.database();
const ref = db.ref('dummyData');

ref.push({
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
});