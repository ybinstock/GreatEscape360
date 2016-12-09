$(document).ready(function() {

  var logo = document.getElementById('logo');
  var slide1 = document.getElementById('slide1');
  var slide2 = document.getElementById('slide2');
  var slide3 = document.getElementById('slide3');
  var slide4 = document.getElementById('slide4');

  $(".slide1").attr('visible', 'false');
  $(".slide2").attr('visible', 'false');
  $(".slide3").attr('visible', 'false');
  $(".slide4").attr('visible', 'false');
  $(".slide5").attr('visible', 'false');


//For slide1
  function showSlide1() {
    $(".logo").attr('visible','false');
    $(".slide1").attr('visible', 'true');
    console.log('slide 1 happening')
  }

  setTimeout(showSlide1, 11000);

  //For slide2
  function showSlide2() {
    $(".slide1").attr('visible', 'false');
    $(".slide2").attr('visible', 'true');
    console.log('slide 2 happening')
  }

  setTimeout(showSlide2, 21000);

  //For slide2
  function showSlide3() {
    $(".slide2").attr('visible', 'false');
    $(".slide3").attr('visible', 'true');
    console.log('slide 3 happening')

  }

  setTimeout(showSlide3, 31500);

  //For slide4
  function showSlide4() {
    $(".slide3").attr('visible', 'false');
    $(".slide4").attr('visible', 'true');
    console.log('slide 4 happening')

  }
  setTimeout(showSlide4, 41500);

  //For slide5
  function showSlide5() {
    $(".slide4").attr('visible', 'false');
    $(".slide5").attr('visible', 'true');
    console.log('slide 5 happening')

  }

  setTimeout(showSlide5, 51500);

});
