// html要素をidで取得
const btn = document.getElementById('btn')

const text =document.getElementById('text');
// btnがクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
  // id textの書き換え
  text.textContent = 'ボタンをクリックしました'
})