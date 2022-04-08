let scrollEl = window;
let lessonSections;
let sideNavItems;
window.addEventListener('DOMContentLoaded', event => {
    scrollEl.addEventListener('scroll', onScroll);
    const body = window.document.body;
    lessonSections = Array.from(body.querySelectorAll('section'));
    lessonSections.unshift(body.querySelector('#lessons'));
    sideNavItems = Array.from(body.querySelectorAll('.list-group-item'));
    window.requestAnimationFrame(onScroll);
});


function onScroll($event) {
    const y = scrollEl.scrollY + 180;
    console.log('onScroll', y);
    // Find selected anchor
    let scrolledSection;
    for (const section of lessonSections) {
        if (section.offsetTop < y) {
            scrolledSection = section;
        }
    }
    if (!scrolledSection) {
        scrolledSection = lessonSections[0];
    }

    // Update sideNavItem styles
    let activeItem;
    for (const item of sideNavItems) {
        let active = (item.hash == '#' + scrolledSection.id);
        item.classList.toggle('active', active);
        if (active) {
            activeItem = item;
        }
    }

    // debug
    // console.log('scrolledSection', scrolledSection, scrolledSection.id);
    // if (activeItem) {
    //     console.log(activeItem.hash, 'is active');
    // } else {
    //     console.log('no item active');
    // }