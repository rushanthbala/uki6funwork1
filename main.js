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
  
  
      SC.stream('/tracks/469754628',function(sound){
              $('#start-c4').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-c4').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });


            SC.stream('/tracks/56021284',function(sound){
              $('#start-c5').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-c5').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });

            SC.stream('/tracks/668644226',function(sound){
              $('#start-c6').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-c6').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });

            SC.stream('/tracks/147981641',function(sound){
              $('#start-c7').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-c7').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
        

            SC.stream('/tracks/53134277',function(sound){
              $('#start-c8').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-c8').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });

            SC.stream('/tracks/341126160',function(sound){
              $('#start-c9').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-c9').click(function(e) {
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
           
            SC.stream('/playlists/108633175',function(sound){
                $('#start-f3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-f3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
  
   ///start-f4     108633175
              //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108633175&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/rifasking-lk" title="Rifas Sri Lanka" target="_blank" style="color: #cccccc; text-decoration: none;">Rifas Sri Lanka</a> · <a href="https://soundcloud.com/rifasking-lk/1234-get-on-the-dance-floor" title="1234 Get On The Dance Floor" target="_blank" style="color: #cccccc; text-decoration: none;">1234 Get On The Dance Floor</a></div>
              SC.stream('/tracks/108633175',function(sound){
            $('#start-f4').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-f4').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });


});
