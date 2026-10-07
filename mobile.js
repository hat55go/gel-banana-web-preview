const frame = document.querySelector('iframe');
const controls = document.querySelectorAll('[data-width]');
controls.forEach((button) => button.addEventListener('click', () => {
  frame.width = button.dataset.width;
  controls.forEach((control) => control.setAttribute('aria-pressed', String(control === button)));
}));
