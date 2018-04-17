/* 
    ToDo List
    Developer: Duong Nguyen aka Dennie
*/

// when an "li" is run inside this "ul" 
$("ul").on("click", "li", function(){
    // toggleClass = toggle between adding and removing a class name from an element
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        // (this) refers to the "li" not "span"
        $(this).remove();
    });
    // stop the event from bubbling up
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    // 13 represents the ENTER key
    if(event.which === 13){
        // extracting the new value. val() = returns or sets the value attribute of the selected elements
        var newInput = $(this).val();
        // clear input box
        $(this).val("");
        // add new value to "li". append() = inserts specified content at the end of the selected elements
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newInput + "</li>")
    }
});

$("h1").on("click", ".fa-edit", function(){
    $("input[type='text']").fadeToggle();
   });
  