// get all cards 
const cards = document.querySelectorAll('.card');
// use for each loop in  for get all div 

cards.forEach(card => {
    card.addEventListener('click', () => {
        // remove active class function call 
        removeActiveClasses()
        // and add active class 
        card.classList.add('active')
    })
})


function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}
