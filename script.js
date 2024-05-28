// Add this script to your existing JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelectorAll('.search-icon .fa-magnifying-glass');
    searchIcon.forEach(icon => {
        icon.addEventListener('click', function() {
            const searchInput = this.nextElementSibling;
            if (searchInput.style.display === 'none' || searchInput.style.display === '') {
                searchInput.style.display = 'block';
                searchInput.focus();
            } else {
                searchInput.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');
    const closeIcon = document.getElementById('close-icon');

    searchIcon.addEventListener('click', function () {
        searchBox.style.display = 'flex';
    });

    closeIcon.addEventListener('click', function () {
        searchBox.style.display = 'none';
    });
});
