var Body = {
    setColor: function(color){
      $('body').css('color', color);
      // document.querySelector('body').style.color=color;  
    },
    setBackgroundColor: function(color){
      $('body').css('background-color', color);
      // document.querySelector('body').style.backgroundColor=color;  
    }
  }
  
  var Links = {
    setColor: function(color){
      $('a').css('color', color);
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while (i < alist.length) {
      //   alist[i].style.color = color;
      //   i = i + 1;
      // }
    }
  }

  var background = document.getElementById("background");
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('powderblue')   
      self.value = 'day';
      background.style.backgroundImage = "images/day.jpeg";
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('blue');
      self.value = 'night';  
      background.style.backgroundImage = "images/night.png";
    } 
  }