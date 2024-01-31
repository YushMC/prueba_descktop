const defaultURL = "assets/imgs/Class_webp.png";

setTheme(localStorage.getItem('url_background') || defaultURL);

const getTheme = () => {
    let dato = localStorage.getItem('url_background');
    let datos = "url('"+ dato +"')";
    document.querySelector("body").style.backgroundImage = datos;
    console.log(datos);
}
getTheme();