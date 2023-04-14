// let btn = document.querySelectorAll('.button')
//
//
//  btn.forEach(function (item){
//
//     item.onclick = function (event){
//         event.preventDefault();
//         document.querySelector('.popup').classList.add('open')
//     }
// })
// let closeModal = document.querySelector('.close_btn')
//
// closeModal.onclick = function (){
//     document.querySelector('.popup.open').classList.remove('open')
// }

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