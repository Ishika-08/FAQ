$(".each-faq").click(function(){
    $(".question").removeClass("clicked-question");
    $(".answer").addClass("hidden");
   $(this).find(".question").toggleClass("clicked-question");
   $(this).find(".answer").toggleClass("hidden");
});





















    


