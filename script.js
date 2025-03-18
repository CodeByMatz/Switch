
const switcher = document.getElementById('switch');
let isBlack = false; 
switcher.addEventListener('click', () => {
    if (isBlack) {
        document.body.style.backgroundColor = 'white'; 
        switcher.style.backgroundColor = 'black';
        switcher.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
        switcher.style.backgroundColor = 'white'; 
        switcher.style.color = 'black';
    }
    isBlack = !isBlack;
});