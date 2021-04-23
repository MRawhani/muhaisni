/*eslint no-undef: "off"*/
import tr from './tr'



// The below provided options are default.
var translator = new Translator({
  defaultLanguage: "ar",
  detectLanguage: false,
  selector: "[data-i18n]",
  debug: false,
  registerGlobally: "__",
  persist: true,
  persistKey: "preferred_language",
  filesLocation: "/i18n"
});

translator.fetch([ "en","ar"]).then(() => {
  // Calling `translatePageTo()` without any parameters
  // will translate to the default language.
  translator.translatePageTo();
  if (translator.currentLanguage === "en") {
    document.body.classList.add("english"); 
  } else {
    document.body.classList.remove("english");
  }
  registerLanguageToggle();
});

function registerLanguageToggle() {
    document.querySelectorAll(".lang.en").forEach(element => {
        element.addEventListener("click",()=>{
            translator.translatePageTo("en");
            document.body.classList.add("english");

        })
    });
    document.querySelectorAll(".lang.ar").forEach(element => {
        element.addEventListener("click",()=>{
            translator.translatePageTo();
            document.body.classList.remove("english");

        })
    });

}

export default translator;