const handle = (e) => {
    e.preventDefault();

    const { target } = e;
    if (target.classList.contains('active')) {
        return;
    }

    const nav = target.closest('.tabs');
    const current = nav.querySelector('a.tabs__link--active');
    current.classList.remove('tabs__link--active');

    const currentTabContent = document.querySelector(current.hash);
    currentTabContent.classList.remove('active');

    target.classList.add('tabs__link--active');

    const nextTabContent = document.querySelector(target.hash);
    nextTabContent.classList.add('active');
};

const links = document.querySelectorAll('a[data-toggle]');
links.forEach((element) => {
    element.addEventListener('click', handle);
});
