let m = moment()
$("#today").text(moment().format('llll'))
let hour = $(this).siblings(".hour1").text();

nineAM = document.getElementById('am9')
tenAM = document.getElementById('am10')
elevenAM = document.getElementById('am11')
twelvePM = document.getElementById('pm12')
onePM = document.getElementById('pm1')
twoPM = document.getElementById('pm2')
threePM = document.getElementById('pm3')
fourPM = document.getElementById('pm4')
fivePM = document.getElementById('pm5')

document.getElementById('hour')

nineAM.addEventListener('Composition', nineAM, store);
document.addEventListener('Composition', tenAM, store);
document.addEventListener('Composition', elevenAM, store);
document.addEventListener('Composition', twelvePM, store);
document.addEventListener('Composition', onePM, store);
document.addEventListener('Composition', twoPM, store);
document.addEventListener('Composition', threePM, store);
document.addEventListener('Composition', fourPM, store);
document.addEventListener('Composition', fivePM, store);


function store(e){
        const LocalStorageObj = {
            nineAM: e.nineAM.value,
            tenAM: tenAM,
            elevenAM: elevenAM,
            twelvePM: twelvePM,
            onePM: onePM,
            twoPM: onePM,
            threePM: threePM,
            threePM: threePM,
            fivePM: fivePM,
        };
    window.localStorage.setItem('schedule', JSON.stringify(LocalStorageObj));
    console.log(window.localStorage.getItem('schedule', JSON.stringify(LocalStorageObj)));
}
    
window.onload = function (){
    let Obj = window.localStorage.getItem('schedule', JSON.parse('schedule'[localStorageObj]));
    console.log(Obj['nineAM'])
};

document.save

$('#view').click(function(){
    $("#planner").removeClass('.black').addClass("red")
});