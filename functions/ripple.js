export const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.querySelector('.ripple');
    
    if (ripple) {
      ripple.remove();
    }
    
    button.append(circle);
  });
});