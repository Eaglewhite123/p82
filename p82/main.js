var mouseEvent = "";
color = "red";
width_of_the_line = 2
Radius = 20
canvas =  document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    Radius = document.getElementById("Radius").value;
    mouseEvent = "mouseDown";
}

Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX = canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY = canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        console.log(current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x = "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0,2*Math.PI);
        ctx.stroke();
    }

}
Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

Canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
function Clear_Area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
