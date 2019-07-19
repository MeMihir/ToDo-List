console.log("yep")

todo=document.querySelectorAll("li input:last-of-type");
todo[1].value="qwertyui";
todo[0].value="asdfghj";
todo[2].value="wzsdfrg";

//Tick ToDo
$("ul").on("click","li i:first-of-type",function()
{
    $(this).toggleClass("fa-check-square")
    $(this).toggleClass("fa-square")
    $(this).siblings().toggleClass("tick")
});

//Remove ToDo
$("ul").on("click","span i",function()
{
    $(this).parent().parent().fadeOut(function()
    {
        $(this).remove()
    })
});

//Add ToDo
$("#addToDo").keypress(function(event)
{
    $(this).css("border","2px #2980b9 solid")
    if(event.key==="Enter")
    {
        var newTodo=$(this).val();
        $(this).val("");
        $("ul").append("<li> <i class=\"far fa-square\"></i> <input type=\"text\"> <span><i class=\"fas fa-trash\"></i></li></span>");
        $("ul li:last-of-type input:last-of-type").val(newTodo)
        $(this).css("border","0px blue solid")
    }
})

//Add ToDo bar
$(".fa-plus").click(function()
{
    $("#addToDo").fadeToggle();
})

//Delete All
$("h1 .fa-trash").click(function()
{
    $("li").fadeOut();
})