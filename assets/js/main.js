/*
  Global front-end helpers (no dependencies)
  - Mobile menu toggle
  - Scroll reveal animations (IntersectionObserver)
*/

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

// Mobile menu (marketing pages)
const menuBtn = qs('[data-menu-btn]');
const mobileNav = qs('[data-mobile-nav]');

if (menuBtn && mobileNav){
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.getAttribute('data-open') === 'true';
    mobileNav.setAttribute('data-open', open ? 'false' : 'true');
    mobileNav.style.display = open ? 'none' : 'block';
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
}

// Reveal on scroll
const revealEls = qsa('[data-reveal]');

if (revealEls.length){
  const io = new IntersectionObserver((entries) => {
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('is-inview');
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

  for (const el of revealEls){
    el.classList.add('reveal');
    io.observe(el);
  }
}
