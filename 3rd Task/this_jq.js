$("document").ready(()=>{
      
    $(".active1").on("mouseover",()=>{
        $(".overlay1").show();
    })
    $(".banner").on("mouseover",()=>{
        $(".overlay1").hide();
    })

    $(".active2").on("mouseover",()=>{
        $(".overlay2").show();
    })
    $(".active2,.overlay2").on("mouseleave",()=>{
        $(".overlay2").hide();
    })
    $(".active3").on("click",()=>{
        $(".overlay3").css('display','flex')
        $(".overlay3").slideDown()
        
    })
    $(".overlay3 p").on("click",()=>{
        $(".overlay3").slideUp()
    })




})