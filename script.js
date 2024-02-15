const header = document.querySelector('header')
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
    if(window.scrollY>headerHeight){
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed");
    }

})
