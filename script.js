$(document).ready(function()
{
	$("#submit").click(function()
	{
        var title = $("#title").val();
        var subtitle = $("#subtitle").val();
        var author = $("#author").val();
        var backColor = $("#back").val();
        var publisher = $("#publisher").val();
        var year = $("#year").children("option:selected").val();
        
        if(title !=null && title!="")
            {
                $("#work").children("#bookTitle").text(title);
            }
        else
            {
                $("#work").children("#bookTitle").text("Book Title");
            }
        
        
        
        
        if(subtitle !=null && subtitle!="")
            {
                $("#work").children("#bookSubtitle").text(subtitle);
            }
        else
            {
                $("#work").children("#bookSubtitle").text("Subtitle");
            }
        
        
        if(author !=null && author!="")
            {
                $("#work").children("#bookAuthor").text(author);
            }
        else
            {
                $("#work").children("#bookAuthor").text("Author");
            }
        
        
        
        if(backColor !=null && backColor!="")
            {
                $("#work").css("background-color",backColor);
            }
        else
            {
                $("#work").css("background-color","#FFF");
            }
        
        if(publisher !=null && publisher!="")
            {
                $("#work").children("#bookPub").text(publisher);
            }
        else
            {
                $("#work").children("#bookPub").text("Publisher");
            }
        
        if(year!=0)
            {
                $("#work").children("#bookYear").text("@" + year);
            }
        else
            {
                $("#work").children("#bookYear").text("@ Publishing Year");
            }
        
			
	});

});