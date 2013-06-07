$(function(){
  console.log("load of home.js");
  $('#load').load(function(){
    console.log("loaded");
  noty({text: 'Logged In!'});
  });

});