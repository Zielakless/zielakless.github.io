var backToTopButton = document.getElementById(`backToTop`);

window.onscroll = () => backToTopButton.style.display = (document.documentElement.scrollTop > 1) ? `flex` : `none`;
backToTop = () => document.documentElement.scrollTop = 0;