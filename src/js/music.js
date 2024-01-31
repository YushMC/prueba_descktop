const URL_list = "https://open.spotify.com/embed/"
const defaultURL_list = "playlist/37i9dQZF1DZ06evO0F0wVy";
const finaly_list = "?utm_source=generator";
const btnSaveUrl_list = document.querySelector('#save_url_list');
const btnReset_list = document.querySelector('#reset_playlist');
const btnClear_list = document.querySelector('#clear_input_playlist');


const setURL_List = (url) => {
    localStorage.setItem('url_playlist', url);
    let url_lista = URL_list + url + finaly_list;
    document.getElementById("playlist_frame").style.display="block";
    document.getElementById("playlist_frame").setAttribute("src", url_lista);
}

btnSaveUrl_list.addEventListener('click', ()  => {
    let datos = document.getElementById('playlist').value;
    setURL_List(datos);
    window.location.reload();
});

btnClear_list.addEventListener('click', ()  => {
    document.getElementById('playlist').value = "";
});

setURL_List(localStorage.getItem('url_playlist') || defaultURL_list);

document.getElementById("playlist").value = localStorage.getItem('url_playlist');

btnReset_list.addEventListener("click", ()=>{
    localStorage.clear();
    setURL_List(defaultURL_list);
    window.location.reload()
})