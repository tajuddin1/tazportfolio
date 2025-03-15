const typewriter = document.getElementById('typewriter');
const texts = [
    '$ Hello, I\'m Muhammad Taz Uddin',
    '$ I\'m Web Developer',
    '$ Welcome to my portfolio!'
];
let lineIndex = 0;
let charIndex = 0;

function type() {
    if (lineIndex < texts.length) {
        if (charIndex < texts[lineIndex].length) {
            typewriter.textContent += texts[lineIndex].charAt(charIndex++);
            setTimeout(type, 100);
        } else {
            typewriter.textContent += '\n'; // Move to next line
            lineIndex++;
            charIndex = 0; // Reset character index for the next line
            setTimeout(type, 500); // Delay before starting the next line
        }
    }
}

window.onload = type;







// function updateTime() {
//     const targetDate = new Date('2020-06-01T00:00:00Z'); // Set your target date here
//     const now = new Date();
//     const diff = Math.abs(now - targetDate); // Difference in milliseconds

//     const seconds = Math.floor(diff / 1000);
//     const minutes = Math.floor(diff / (1000 * 60));
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));

//     document.getElementById('elapsed-day').innerText =`${days} days`;
//     document.getElementById('elapsed-hours').innerText =`${hours} hours`;
//     document.getElementById('elapsed-minutes').innerText =`${minutes} minutes`;
//     document.getElementById('elapsed-seconds').innerText =`${seconds} seconds`;
// }

// setInterval(updateTime, 1000); // Update every second




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')); // Get target section
        const navHeight = document.querySelector('header').offsetHeight; // Get height of the fixed nav

        window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});









let count = document.querySelectorAll(".counter")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},100)

})





window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    document.querySelector('.scroll-down').classList.toggle('opacity-0', scroll >= 500);
    var nav = document.querySelector('header')

    if (scroll >= 800) {
        nav.classList.add('show'); 
    }

    if (scroll < 500) {
        nav.classList.remove('show');
    }
});


// document.querySelectorAll('.filter-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const filter = this.getAttribute('data-filter');
//         const items = document.querySelectorAll('.portfolio-item');

//         items.forEach(item => {
//             if (filter === 'all' || item.classList.contains(filter)) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     });
// });
