let navbar = document.querySelector('nav .navigation ul');
let navbarClose = document.querySelector('nav .navigation ul');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
document.querySelector('#closeMenu-btn').onclick = () =>{
  navbarClose.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
}
