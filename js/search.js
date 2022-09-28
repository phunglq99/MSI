const searchIcon = document.querySelector('.nav_search');
const searchToogle = document.querySelector('.nav_search_field');
searchIcon.addEventListener('click', () =>{ 
  searchToogle.classList.toggle('active');
});