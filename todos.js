// check of specific todo list by clicking

$("ul").on("click", "li", function(){
	//if li is gray
	/*if($(this).css("color") === "rgb(128,128,128)"){
		//turn it to black
		$(this).css({
	color: "black",
	textDecoration: "none"
});
	}
	//else
		else{
	//turn it to gray
	$(this).css({
	color: "gray",
	textDecoration: "line-through"
});
}*/
// instead of this create a class in css
$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
	// this is to stop the propogation to other elements
// to remove the parent element i,e li. not just the span
$(this).parent().fadeOut(500, function(){
	$(this).remove();
});
event.stopPropagation();

});

$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		// grabbing new todo text from input
		var todotext = $(this).val();
		// to clear the input
		$(this).val("");
		// create a new li and add it to ul
		$("ul").append("<li><span>X</span>" + todotext + "</li>");
	}
})
