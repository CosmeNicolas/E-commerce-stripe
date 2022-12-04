const d = document;


export default function slider(){
  const $nexBtn = d.getElementById("btnnext")
  const $prevBtn = d.getElementById("btnprev")
  const $slides = d.querySelectorAll(".slider-slide")

  let i = 0;

  d.addEventListener("click", (e)=>{
    if(e.target === $prevBtn){
      $slides[i].classList.remove("active");
      i--;

      if(i<0){
        i=$slides.length-1;
      }

      $slides[i].classList.add("active")
    }
  })

  d.addEventListener("click", (e)=>{
    if(e.target === $nexBtn){
      $slides[i].classList.remove("active");
      i++;

      if(i>=$slides.length){
        i=0;
      }

      $slides[i].classList.add("active")
    }
  })




}

