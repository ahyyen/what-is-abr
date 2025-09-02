$(document).ready(function () {   
    
    $(function () {
        $(".stage, .sagittalFigs, .range5000, .zephireEtFlore").draggable();
    });
    
    $('.stage').click(function () {
      $('#line2').toggle();
    });
    $('.stage').click(function () {
      $('.sagittalFigs').toggleClass("hidden");
    });
    
    $('.sagittalFigs').click(function () {
        $('#line3').toggle();
    });
    
    $('.sagittalFigs').click(function () {
      $('.range5000').toggleClass("hidden");
    });
    
    $('.range5000').click(function () {
        $('#line4').toggle();
    });
    
    $('.range5000').click(function () {
        $('#line5').toggle();
    });
    
    $('.range5000').click(function () {
        $('.zephireEtFlore').toggleClass("hidden");
    });
    
    $('.zephireEtFlore').click(function () {
        $('#conclusion').toggle();
    });
  
});
