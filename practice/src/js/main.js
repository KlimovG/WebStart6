  
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  // const closeBtn = document.querySelector('.modal__close')
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  // modal.addEventListener('click', switchModal);
  
  // closeBtn.addEventListener('click', switchModal);
  document.onkeydown = function(evt) {
    
    if (evt.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
  };
});


toggleModal = () => {
  const modal = document.querySelector('.modal'),
        // modalBtn = document.querySelectorAll('.button__modal'),
        modalClose = document.querySelector('.modal__close');

        // modalBtn.addEventListener('click', (event) => {
        //   let target = event.target;
        //   if (target.classList.contains('button__modal')) {
        //     showModal();
        //   }
        // });
        modalClose.addEventListener('click', (event) => {
          let target = event.target;
          if (target.classList.contains('modal__close')) {
            hideModal();
          }
        });
        modal.addEventListener('click', (event) => {
          let target = event.target;
          if (target.classList.contains('modal') && !target.classList.contains('modal__dialog')) {
            hideModal();
          }
        });
        showModal = () => {
          modal.classList.add('modal--visible');
        };
        hideModal = () => {
          modal.classList.remove('modal--visible');
        };
};
toggleModal();







