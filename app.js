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
      // Validate the required fields and describe anything missing, in words.
      let firstBad = null;
      form.querySelectorAll('[required]').forEach((field) => {
        let bad = !field.value.trim();
        if (!bad && field.type === 'email') bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        field.classList.toggle('invalid', bad);
        field.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = field;
      });
      const msg = document.querySelector('#form-success');
      if (firstBad) {
        if (msg) msg.hidden = true;
        firstBad.focus();
        return;
      }
      if (msg) { msg.hidden = false; msg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    });
  }
});
