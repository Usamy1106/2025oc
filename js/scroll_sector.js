window.addEventListener('load', () => {
    if (window.innerWidth <= 767) {
        const nav = document.querySelector('.pages-top__nav ul');
        const selected = nav.querySelector('.selected');

        if (selected) {
            const navRect = nav.getBoundingClientRect();
            const selectedRect = selected.getBoundingClientRect();

            const scrollLeft =
                selected.offsetLeft - nav.clientWidth / 2 + selected.offsetWidth / 2;

            nav.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }
});