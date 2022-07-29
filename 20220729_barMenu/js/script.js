// $(".navbar ul li").hover(function(){
//     let i = $(this).index();
//     console.log(i);
    
//     let value = i * 240;
//     $(".bar").css("left",value)
// },function(){
//     $(".bar").fadeOut();
// })

$(".navbar ul").find("li").mouseover(over);
$(".navbar ul").mouseout(over);

function over(){
    let i = $(this).index();
    let value = i * 240;
    $(".bar").css({left:value,opacity:1});
}
function out(){
    $(".bar").css({opacity:0})
}