document.addEventListener('click', function (event){

    if(event.target.classList.contains('modal_open')) {
        if (document.querySelector('#' + event.target.getAttribute('data-modal'))){
            document.querySelector('#' + event.target.getAttribute('data-modal')).classList.add('open')
        }

    }
    if (event.target.classList.contains('close_btn')) {
        event.target.closest('.open').classList.remove('open')
    }
})

document.addEventListener('keydown', function (event){
    if(event.code.toLowerCase() === 'escape') {
        document.querySelector('.popup.open').classList.remove('open')
    }
})