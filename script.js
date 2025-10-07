function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
}

// Section Highlight on Scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.querySelector('.nav-list');

  if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
  }

  // Close menu on link click (for mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
});
  





    document.addEventListener("DOMContentLoaded", function(){

        const text = "Vignesh";
        const target = document.getElementById("typing");
        let index = 0;
        let typer = true;

        if(!target) return;

        target.textContent ="";

        function typing(){
            if(typer){
                if (index < text.length) {
                target.textContent += text.charAt(index);
                index++;
                setTimeout(typing, 100);
            } else{
                 setTimeout(() =>{
                typer = false;
                setTimeout(typing, 100);
            }, 2000);

            }

            }
            
       else{
        if (index > 0) {
            target.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typing, 50);
        } else {
            typer = true;
            setTimeout(typing, 500);
        }
    }
     }
     typing();
    });

     window.addEventListener("load", () => {
    const progress = document.querySelector(".loading-progress");
    progress.style.width = "0%";
    progress.style.animation = "progressAnim 3s ease-in-out forwards";

   
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 3000);
  });

  
   
            
    


        


    
    
  
