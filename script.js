// Получаем элемент изображения с классом 'rot'
const image = document.querySelector('.head');
let rotationAngle = 0; // Начальное значение угла поворота

// Обработчик клика на изображение
image.addEventListener('click', () => {
    // Увеличиваем угол поворота на 360 градусов
    rotationAngle += 360;
    image.style.transform = `rotate(${rotationAngle}deg)`;  
});
document.querySelector('.p404').addEventListener('click', () => {
  alert('Ошибка 404: Страница не найдена!');
});