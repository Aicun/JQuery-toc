$(document).ready(function(){

    $("aside").append("<h2>Table of Contents</h2>");

    $("h1").wrapInner("<a id='top'></a>");

    $("article h2").wrapInner("<a></a>");

    $("article a").each(function(index){
        var id = "heading" + (index +1);
        $(this).attr("id",id);
    });

    $("article a").clone().insertAfter($("aside h2"));
    $("aside a").removeAttr("id");

    /* $("aside a").each(function(index){
        var href = "#heading" + (index+1);
        $(this).attr("href",href);
    }); */

    $("aside a").attr("href",function(index){
        var href = "#heading" + (index+1);
        return href;
    })

    $("article h2").before("<a href='#top'>Back to top</a>");
    $("article a:first").remove();
    $("article p:last").after("<a href='#top'>Back to top</a>");


    $("aside a").click(function() {
        $("article a").css({"color":"black","font-size":"120%"});
        var id = $(this).attr("href");
        $(id).css({"color":"blue","font-size":"150%"});
        var h2Offset = $(id).offset().top;
        var asideHeight = $("aside").height();
        var articleHeight = $("article").height();
        if(h2Offset + asideHeight <= articleHeight) {
            asideOffset = h2Offset;
        }else {
            asideOffset = articleHeight - asideHeight;
        }
        $("aside").css("top",asideOffset);
    })

});