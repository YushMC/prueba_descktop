
const btnSaveUrl = document.querySelector('#save_url');
const btnReset = document.querySelector('#reset');


const setTheme = (url) => {
    localStorage.setItem('url_background', url);
}

btnSaveUrl.addEventListener('click', ()  => {
    let datos = document.getElementById('background').value;
    setTheme(datos);
    window.location.reload()
});



document.getElementById("background").value = localStorage.getItem('url_background');

btnReset.addEventListener("click", ()=>{
    localStorage.clear();
    setTheme(defaultURL);
    window.location.reload()
})