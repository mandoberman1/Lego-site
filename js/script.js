let btnGo = document.querySelectorAll('.btn-primary')
let btnBack = document.querySelectorAll('.closeBigCard')
let cardsBig = document.querySelectorAll('.card-big')

btnGo.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        cardsBig[index].style.display = 'flex'
    })
})
btnBack.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        cardsBig[index].style.display = 'none'
    })
})

const input = document.querySelector('input');
const title = document.querySelectorAll('.card .card-body .card-title');
const text = document.querySelectorAll('.card .card-body .card-text')
const cardmini = document.querySelectorAll('.card')

function search() {
    const inputValue = input.value; // Получаем значение input
    title.forEach(function(item, index) {
        if (inputValue === '' || item.textContent.includes(inputValue) || text[index].textContent.includes(inputValue)) {
            cardmini[index].style.display = 'block'; // Показываем элемент
            cardmini[index].style.display = 'block'
        } else {
            cardmini[index].style.display = 'none'; // Скрываем элемент
            cardmini[index].style.display = 'none'
        }
    });
}
input.addEventListener('input', search); // Добавляем слушатель события