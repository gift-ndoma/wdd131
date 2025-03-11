const hamButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');
})