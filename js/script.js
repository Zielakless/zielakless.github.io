var scrollToTopButton = document.getElementById(`scrollToTop`);

window.onscroll = () => {
    if(document.documentElement.scrollTop > 1) scrollToTopButton.style.display = `flex`;
    else scrollToTopButton.style.display = `none`;
};

scrollToTop = () => document.documentElement.scrollTop = 0;