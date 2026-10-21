// PureNest Cleaning — light interactions only
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const form = document.querySelector('#booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.querySelector('#form-success');
      if (msg) { msg.hidden = false; msg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    });
  }
});
