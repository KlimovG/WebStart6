document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close')
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  modal.addEventListener('click', switchModal);

  closeBtn.addEventListener('click', switchModal);
  document.onkeydown = function(evt) {
    
    if (evt.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
  };
 
});

