/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

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
    console.log('scrolledSection', scrolledSection, scrolledSection.id);
    if (activeItem) {
        console.log(activeItem.hash, 'is active');
    } else {
        console.log('no item active');
    }
    // selectedAnchor.classList.push('active');
}

//     let sectionEl: HTMLElement = this.sectionEls[0];
//     const y = this.scrollEl.scrollTop;
//     for (const a of this.sectionEls) {
//       if (a.offsetTop < y + 100) {
//         sectionEl = a;
//       }
//     }
//     // if at bottom, highlight last element
//     const bottom: number = this.scrollEl.scrollHeight - this.scrollEl.offsetHeight - 100;
//     if (y > bottom) { sectionEl = this.sectionEls[this.sectionEls.length - 1]; }
//     // return sectionEl.attributes['title'].value;v
//     if (!sectionEl.title) {
//       // this error is occuring because title is not defined on the first angular render cycle
//       // console.warn('scrolledSection title missing', sectionEl, sectionEl.title, !sectionEl.title);
//     }
//     return sectionEl.title;
//   }
//   set scrolledSection(section: string) {
//     const sectionEl: HTMLElement = this.scrollEl.querySelector('.section[title="' + section + '"]');
//     if (!sectionEl) {
//       console.warn('sectionEl not found');
//     }
//     // sectionEl.scrollIntoView();
//     let y: number = sectionEl.offsetTop + this.adjustment; // add padding for two toolbars
//     if (sectionEl === this.sectionEls[0]) { y = 0; } // if first item, go to top

//     // set value (animation handled by scroll-behavior: smooth;)
//     this.scrollEl.scrollTop = y;
//   }
  