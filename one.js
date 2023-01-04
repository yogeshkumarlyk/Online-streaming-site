
let xhr2 = new XMLHttpRequest();
xhr2.open("GET","/carousel.json");
xhr2.send();
list3=[];


xhr2.onload = () => {
  cardata = JSON.parse(xhr2.responseText).carousel;
  console.log(cardata);

  if(cardata) {
      for(const {pic,title} of cardata) {
        //var div = batData.adocument.createElement('div');
        const data = car.appendChild(document.createElement('div'));
        data.className='carousel-data';
        data.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <div class="carouselplay" ><a class="bannerplay" href="youtube.com">play</a></div>`);
        list3.push(data);
      }
  }
  console.log(list3);
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("carousel-data");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  } 
}
