const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
  const searchQuery = searchForm.search.value.trim();
  if (searchQuery) {
    alert(`Searching for: ${searchQuery}`);
  }
});
