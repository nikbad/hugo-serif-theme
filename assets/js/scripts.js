var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

var header = document.getElementById("stickyHeader");

if (header) {
  var offset = header.offsetTop;
  document.addEventListener("scroll", function () {
    if (window.scrollY > offset) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}


document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parentMenuItem = this.parentElement;
    const submenu = parentMenuItem.querySelector('.sub-menu');

    // Toggle submenu visibility
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      // Close all other open submenus
      document.querySelectorAll('.sub-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      submenu.style.display = 'block';
    }
  });
});

// Close submenus when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.menu-item.has-submenu')) {
    document.querySelectorAll('.sub-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});

