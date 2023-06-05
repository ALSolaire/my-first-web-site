var Body = {
    setColor: function(color){
        $('body').css('color', color);
    //   document.querySelector('body').style.color=color;  
    },
    setBackgroundColor: function(color){
        $('body').css('background-color', color);
    //   document.querySelector('body').style.backgroundColor=color;  
    }
  }
  
  var Links = {
    setColor: function(color){
        $('a').css('color', color);
    }
  }

  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('powderblue');
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');   
      Links.setColor('blue');
      self.value = 'night';  
    } 
  }

  function hideandshow(self){
    if(self.value == 'show'){
      self.value = 'hide';
      $("p").show();
    } else {
      self.value = 'show';
      $("p").hide();
    } 
  }