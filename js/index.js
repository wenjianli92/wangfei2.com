/**
 * Created by bjwsl-001 on 2017/7/5.
 */
$(".navbar-nav").on("click","a",function(e) {
    e.preventDefault();
    var id = $(this).attr("href");
    if(id!="javascript:;"){
        $(".act").css("display", "none");
        $("."+id).css("display", "block");
    }
});