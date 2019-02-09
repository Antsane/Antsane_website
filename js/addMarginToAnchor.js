function addMargin() {
    window.scrollTo(0, window.pageYOffset - 45);
}

window.addEventListener('hashchange', addMargin);