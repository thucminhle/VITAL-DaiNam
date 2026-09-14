<script>
function setLang(lang) {
  document.documentElement.lang = lang;
  document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  localStorage.setItem('preferred_lang', lang);
}
</script>
