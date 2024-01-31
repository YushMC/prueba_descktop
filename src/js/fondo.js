

const getTheme = () => {
    let dato = localStorage.getItem('url_background');
    let datos = "url('"+ dato +"')";
    document.querySelector("body").style.backgroundImage = datos;
    console.log(datos);
}


getTheme();