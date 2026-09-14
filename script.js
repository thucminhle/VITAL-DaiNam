function setLang(lang) {
  // 1. Set the language attribute on the <html> tag
  document.documentElement.setAttribute('lang', lang);
  
  // 2. Update button styling
  const btnVi = document.getElementById('btn-vi');
  const btnEn = document.getElementById('btn-en');
  
  if (btnVi && btnEn) {
    btnVi.classList.toggle('active', lang === 'vi');
    btnEn.classList.toggle('active', lang === 'en');
  }

  // 3. Save preference in browser storage
  localStorage.setItem('site_lang', lang);
}

// Load saved language or default to Vietnamese when page opens
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('site_lang') || 'vi';
  setLang(savedLang);
});
