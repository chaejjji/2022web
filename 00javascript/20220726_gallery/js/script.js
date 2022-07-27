$(".itemWrap>li").click(function(){
    console.log($(this).index());
    let i = $(this).index();
    $("#image>p").hide();
    $("#image>p").eq(i).show();
})

let current = 0;

$(".right").click(function(){
    current++;
    viewCurrent(current)
    
})
$(".left").click(function(){
    current--;
    viewCurrent(current)
})

function viewCurrent(count){
    console.log(count)
}