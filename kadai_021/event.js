// HTML要素をIDで取得
const mainText = document.getElementById('text');
const clickBtn = document.getElementById('btn') ;

// 非同期処理　ボタンがクリックされた２秒後に処理を実行
clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    mainText.textContent = 'ボタンをクリックしました'
  })
})