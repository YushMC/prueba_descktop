const defaultURL = "assets/imgs/Class_webp.png";
const btnSaveUrl = document.querySelector('#save_url');
const btnReset = document.querySelector('#reset');
const btnClear = document.querySelector('#clear_input');


const setTheme = (url) => {
    localStorage.setItem('url_background', url);
}

btnSaveUrl.addEventListener('click', ()  => {
    let datos = document.getElementById('background').value;
    setTheme(datos);
    window.location.reload();
});
btnClear.addEventListener('click', ()  => {
    document.getElementById('background').value = "";
});

setTheme(localStorage.getItem('url_background') || defaultURL);

document.getElementById("background").value = localStorage.getItem('url_background');

btnReset.addEventListener("click", ()=>{
    localStorage.clear();
    setTheme(defaultURL);
    window.location.reload()
})