const lefts = document.querySelectorAll('.left')
const rights = document.querySelectorAll('.right')

window.addEventListener('scroll',showbox)


// function showbox() {
//     const leftGet =  left.getBoundingClientRect();
//     const rightGet  =  right.getBoundingClientRect();

//     const windowScroll = window.scrollY;
//     const rightTextHeight = leftGet.top;
//     const leftTextHeight = rightGet.top;

//     if(windowScroll < rightTextHeight) {
//         left.classList.add('position');
//     }

//     if(windowScroll > leftTextHeight) {
//         right.classList.add('position');
//     }

//     console.log(rightTextGet,window.scrollY)
// }

AOS.init();

function showbox() {
        const windowScroll = window.scrollY;

    lefts.forEach(function(left){
        const leftGet =  left.getBoundingClientRect();
        const leftTextHeight = leftGet.top;

        if(windowScroll > leftTextHeight) {
            left.classList.add('position');
        }
        if(windowScroll < leftTextHeight) {
            left.classList.remove('position');
        }
    });

    rights.forEach(function(right){
        const rightGet =  right.getBoundingClientRect();
        const rightTextHeight = rightGet.top;

        if(windowScroll > rightTextHeight) {
            right.classList.add('position');
        }

        if(windowScroll < rightTextHeight) {
            right.classList.remove('position');
        }
        console.log(rightTextHeight)
    });
}