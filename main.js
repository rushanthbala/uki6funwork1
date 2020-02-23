SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});




$(document).ready(function() {
  SC.stream('/tracks/40388193',function(sound){
    $('#start-r1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-r1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


  SC.stream('/tracks/45800403',function(sound){
    $('#start-r2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-r2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  SC.stream('/tracks/223535868',function(sound){
    $('#start-r3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-r3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  

//   <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
//    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108633175&color=%23ff5500&auto_play=true&hid
//   e_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

  SC.stream('/tracks/146011935',function(sound){
      $('#start-c1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-c1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });



    SC.stream('/tracks/18979699',function(sound){
        $('#start-c2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-c2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });

    
      SC.stream('/tracks/130941566',function(sound){
          $('#start-c3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-c3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });


        SC.stream('/tracks/121880627',function(sound){
            $('#start-f1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-f1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });

   
          SC.stream('/tracks/434809161',function(sound){
              $('#start-f2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-f2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });


            //okk
//some change 110 playlist or tracks 
           
            SC.stream('/playlists/25204395',function(sound){
                $('#start-f3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-f3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });

});
