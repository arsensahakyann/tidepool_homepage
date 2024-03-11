const header = document.querySelector('header')
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
    if(window.scrollY>headerHeight){
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed");
    }
})


const carouselItems = document.querySelectorAll('.review');
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  carouselItems[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);