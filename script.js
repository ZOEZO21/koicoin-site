// Language toggle: zh / en (persisted in localStorage)
const LANG_KEY = "koicoin_lang";

function setLang(lang){
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem(LANG_KEY, lang);

  // Toggle buttons state
  document.querySelectorAll("[data-set-lang]").forEach(btn=>{
    btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
  });

  // Show/hide elements by data-lang
  document.querySelectorAll("[data-lang]").forEach(el=>{
    const elLang = el.getAttribute("data-lang");
    el.style.display = (elLang === lang) ? "" : "none";
  });
}

function initLang(){
  const saved = localStorage.getItem(LANG_KEY);
  const lang = saved || "zh";
  setLang(lang);

  document.querySelectorAll("[data-set-lang]").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.getAttribute("data-set-lang")));
  });
}

document.addEventListener("DOMContentLoaded", initLang);
