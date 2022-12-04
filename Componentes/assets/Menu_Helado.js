



export default function menuHelado(logo, panel){
  
  
  const d = document;

  d.addEventListener("click",(e) =>{
    if(e.target.matches(logo)){
      d.querySelector(panel).classList.toggle("is-active");
    }
  });
}

