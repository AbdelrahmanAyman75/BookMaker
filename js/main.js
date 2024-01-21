/********start sid nave**********/
$(".fa-xmark").click(function(){
    $(".side-nave").animate({width:"0px"} ,(1000))
    $(".links-nav").fadeOut(1000)
    $(".fa-bars").animate({left:"0%" }, (1000))
    
})
/* ******************* */
$(".fa-bars").click(function(){
    $(".fa-bars").animate({left:"10%" }, (1000))
    $(".side-nave").fadeIn(1000)
    $(".links-nav").fadein(1000)

})





/********end sid nave **********/

/********start sec 1**********/
$('#Duration .text').click(function(){
    $('.content').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
});
/********end sec 1**********/


/********start sec 2**********/
$('#countdown-activte').countdown('2024/01/25', function(event) {
    $(this).html(event.strftime('days :%M:%S'));
    $(this).html(event.strftime(`<div class="single-countDown"><h2>%D</h2><span>Days</span></div>
    <div class="single-countDown"><h2>%H</h2><span>Hours</span></div>
    <div class="single-countDown"><h2>%M</h2><span>Minutes</span></div>
    <div class="single-countDown"><h2>%S</h2><span>Seconds</span></div>

    `));
});


/********end sec 2**********/

/********start sec 3 textarea**********/

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
            $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});

/********end sec 3**********/





