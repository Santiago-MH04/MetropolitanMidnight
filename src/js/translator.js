import i18next from 'i18next';  //Paquete de traducción de textos
import Backend from 'i18next-http-backend'; //Paquete de traducción de textos en archivos externos

let language;

if(localStorage.getItem('favouriteLanguage')){
    language = localStorage.getItem('favouriteLanguage');
} else{
    language = 'es';
}

i18next.use(Backend).init({
  lng: language, // if you're using a language detector, do not define the lng option
  debug: false, //Para no llenar la consola con cada cambio de idioma
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'    //URL de donde se obtiene el recurso
  },
  ns: ['translation'],
  defaultNS: 'translation',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // not needed for react!!
  }
}).then(() => updateContent());


function updateContent() {
    const htmlElements = document.querySelectorAll('[data-i18n]');

    htmlElements.forEach(element => {
        const value = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(value);   //Este método, obtenido externamente, es el que traduce
    });
}

window.changeLanguage = function(lng){
    i18next.changeLanguage(lng).then(() => updateContent());
    localStorage.setItem('favouriteLanguage', lng)
}