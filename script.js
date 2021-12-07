const toggleButton = document.getElementsByClassName('toggle-btn')[0];

const navbarLinks = document.getElementsByClassName('nav-right')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate(
            {
                scrollTop: target.offset().top
            },
            1000
        );
    }
});
