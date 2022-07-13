
let m = moment();

$("#today").text(moment().format('llll'))
let hour = $(this).siblings(".hour1").text();

function loadStorage(){
    if(localStorage.getItem((hour) !== null)){
        console.log("local storage is not available.")
    }else{
        const storage = localStorage.getItem('7 AM', '9 AM', '11 AM', '1 PM', '3 PM', '5 PM')
        document.querySelector('#am7', 'am9', '#am11', '#1pm', '#3pm', '#5pm').textContent = JSON.parse(storage)
    }
}
loadStorage();


$("#save").click(function(){
    let text = $("#am7").val();
    console.log(text);
    let hour = $(this).siblings(".hour").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
});
$("#save1").click(function(){
    let text = $("#am9").val();
    console.log(text);
    let hour = $(this).siblings(".hour1").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
});
$("#save2").click(function(){
    let text = $("#am11").val();
    console.log(text);
    hour = $(this).siblings(".hour2").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
});
$("#save3").click(function(){
    let text = $("#pm1").val();
    console.log(text);
    let hour = $(this).siblings(".hour3").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
});
$("#save4").click(function(){
    let text = $("#pm3").val();
    console.log(text);
    let hour = $(this).siblings(".hour4").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
});
$("#save5").click(function(){
    let text = $("#pm5").val();
    console.log(text);
    let hour = $(this).siblings(".hour5").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
});

//Clear Functions
$("#clear").click(function(){
    text = $("#am7").val("");
    text = $("#am7").val();
    hour = $(this).siblings(".hour").text();
    localStorage.removeItem(hour, JSON.stringify(text));
});
$("#clear1").click(function(){
    text = $("#am9").val("");
    text = $("#am9").val();
    hour = $(this).siblings(".hour1").text();
    localStorage.removeItem(hour, JSON.stringify(text));
});
$("#clear2").click(function(){
    text = $("#am11").val("");
    text = $("#am11").val();
    hour = $(this).siblings(".hour2").text();
    localStorage.removeItem(hour, JSON.stringify(text));
});
$("#clear3").click(function(){
    text = $("#pm1").val("");
    text = $("#pm1").val();
    hour = $(this).siblings(".hour3").text();
    localStorage.removeItem(hour, JSON.stringify(text));
});
$("#clear4").click(function(){
    text = $("#pm3").val("");
    text = $("#pm3").val();
    hour = $(this).siblings(".hour4").text();
    localStorage.removeItem(hour, JSON.stringify(text));
});
$("#clear5").click(function(){
    text = $("#pm5").val("");
    text = $("#pm5").val();
    hour = $(this).siblings(".hour5").text();
    localStorage.removeItem(hour, JSON.stringify(text));
});

$("#view").click(function(){
    text = $("#am7").val("");
    text = $("#am7").val();
    hour = $(this).siblings("7 AM").text();

});