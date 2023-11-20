      let isDark = true 
      let body = document.querySelector ('body');
      let sun = document.getElementById("sun");
      let moon = document.getElementById("moon");

      sun.onclick = function(){
       document.body.classList.toggle("light-theam");

       if (isDark == true) {
        sun.classList.remove('fa-toggle-on')
        sun.classList.add('fa-toggle-off')
        moon.classList.remove('fa-sun')
        moon.classList.add('fa-moon')
        isDark = false
       } 
       
       else {
        sun.classList.remove('fa-toggle-of')
        sun.classList.add('fa-toggle-on') 
        moon.classList.add('fa-sun')
        moon.classList.remove('fa-moon')
        isDark = true
       }
      }
      