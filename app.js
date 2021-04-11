const quiz = [
  {
    question: 'スターバックスのドリンク、次のうち最も販売価格の低いものはどれでしょう？（Tallサイズ）',
    answers: [
      'スターバックスラテ',
      'カフェアメリカーノ',
      'ドリップコーヒー',
      'コーヒーフラペチーノ'
    ],
    correct: 'ドリップコーヒー'
  }, {
    question: '次のうち、大阪から最も遠い都市はどれ？',
    answers: [
      '京都',
      '札幌',
      '東京',
      '広島'
    ],
    correct: '札幌'
  }, {
    question: '次のうち、井手崚太郎が特に好きな食べ物はどれ？',
    answers: [
      'たこ焼き',
      'ポテトサラダ',
      '高野豆腐',
      'ホットケーキ'
    ],
    correct: 'ホットケーキ'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題まだあれば、こっちを実行
    setupQuiz();
  }　else {
    //問題が以上であれば、こっちを実行
    window.alert('問題は以上です！あなたの正解数は' + score + '/' + quizLength + 'です！お疲れ様でした。');
  }
}

//ボタンをクリックしたら、正誤判定
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener ('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
