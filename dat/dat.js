const drawerToggle = document.getElementById('drawer-toggle');
const drawer = document.getElementById('genre-drawer');
const closeDrawer = document.getElementById('close-drawer');

// Close
drawerToggle.addEventListener('click', () => {
    drawer.classList.add('open');
});

// Open
closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('open');
});