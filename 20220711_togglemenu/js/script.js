let view = true;

$(".toggleMenu").click(function(){
    if( view == true){
        $(".topMenu").addClass("active");
        $(".toggleMenu").addClass("click");
        view = false;
    }else{
        $(".topMenu").removeClass("active");
        $(".toggleMenu").removeClass("click");
        view = true;
    }
})