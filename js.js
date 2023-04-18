let btn = document.getElementById('btn');
let menu = document.getElementById('menu');

btn.addEventListener('click', ()=>toggleMenu())

function toggleMenu(){
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.style.transform = 'translateY(45px)';
    }
    else{
        menu.classList.add('hidden');
        menu.style.transform = '';
    }
}