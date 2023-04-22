const openBtn=document.querySelector(".bi-list");
    
const closeBtn=document.querySelector(".bi-x-lg");  


const navbar=document.querySelector(".navbar__menu");

openBtn.addEventListener('click',()=>{
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    navbar.classList.toggle('hidden');
});

closeBtn.addEventListener('click',()=>{
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    navbar.classList.toggle('hidden');
});

const employeeDetails=[
             {
             name:"peg legge",
              title:"Ceo",
              img:"images/team/Peg_Legge.svg",
             },
               {
             name:"alexandra ",
              title:"M.D",
              img:"images/team/alexandra.svg",
             },
               {
             name:"janet",
              title:"team lead",
              img:"images/team/janet.svg",
             },
               {
             name:"richard",
              title:"developer",
              img:"images/team/richard.svg",
             }
             
     ] ;
     
 
const cardBody=document.querySelector('.card__section') ;
     
     
const employeebox=()=>{
  const employeeCards = employeeDetails.map((x)=>{
    
    return `<div class="card__body">
        <img src=${x.img} alt="card image"></img>  
     <h3 class="card__text">${x.name}</h3> 
           <p class="card__para">${x.title}</p>  
          </div>` 
   })
   cardBody.innerHTML = employeeCards.join('');
}


if (cardBody) {
    employeebox();
}

const date  = new Date();
const year =date.getFullYear().toString();

console.log(year);
const currentYear=document.querySelector(".year");

currentYear.innerHTML=year;




