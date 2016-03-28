(function() {
var menuEl = document.getElementById('vertical'),
  mlmenu = new MLMenu(menuEl, {
    // breadcrumbsCtrl : true, // show breadcrumbs
    initialBreadcrumb : 'home', // initial breadcrumb text
    backCtrl : false, // show back button
    // itemsDelayInterval : 60, // delay between each menu item sliding animation
    // onItemClick: loadDummyData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
  });

// mobile menu toggle
var openMenuCtrl = document.querySelector('.action--open'),
  closeMenuCtrl = document.querySelector('.action--close');

openMenuCtrl.addEventListener('click', openMenu);
closeMenuCtrl.addEventListener('click', closeMenu);

function openMenu() {
  classie.add(menuEl, 'menu--open');
}

function closeMenu() {
  classie.remove(menuEl, 'menu--open');
	// $('#about').animate({width:'toggle'}, 100);
  $('#about').slideUp();
  $('#contact').slideUp();
}

// simulate grid content loading
// var gridWrapper = document.querySelector('.content');
//
// function loadDummyData(ev, itemName) {
//   ev.preventDefault();
//
//   closeMenu();
//   gridWrapper.innerHTML = '';
//   classie.add(gridWrapper, 'content--loading');
//   setTimeout(function() {
//     classie.remove(gridWrapper, 'content--loading');
//     gridWrapper.innerHTML = '<ul class="products">' + dummyData[itemName] + '<ul>';
//   }, 700);
// }
})();
