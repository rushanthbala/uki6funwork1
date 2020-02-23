SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/280506496',function(sound){
    $('#start-k1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-k1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/208957452',function(sound){
    $('#start-k2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-k2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/343180661',function(sound){
    $('#start-k3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-k3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/52293116',function(sound){
      $('#start-s1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-s1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/153228378',function(sound){
        $('#start-s2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-s2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/676586135',function(sound){
          $('#start-s3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-s3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/255497144',function(sound){
            $('#start-ar1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-ar1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/256257241',function(sound){
              $('#start-ar2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-ar2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/546635715',function(sound){
                $('#start-ar3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-ar3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });

});
