$(function(){
  console.log("hi");
  $(window).bind("load", function(){
    console.log("loaded");
    noty({text: 'noty - a jquery notification library!'});
  });

});