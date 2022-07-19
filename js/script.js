let m = moment()
$("#today").text(moment().format('llll'))
let hour = $(this).siblings(".hour1").text();

const saveBtn = document.getElementById('save')
const viewBtn = document.getElementById('view')

const saveListen = document.addEventListener('click', store, saveBtn)

function store(){
    sevenAM = document.getElementById('am7').value;
    nineAM = document.getElementById('am9').value;
    elevenAM = document.getElementById('am11').value;
    onePM = document.getElementById('pm1').value;
    threePM = document.getElementById('pm3').value;
    fivePM = document.getElementById('pm5').value;

    const LocalStorageObj = {
        sevenAM: sevenAM,
        nineAM: nineAM,
        elevenAM: elevenAM,
        onePM: onePM,
        threePM: threePM,
        fivePM: fivePM,
        };


    window.localStorage.setItem('schedule', JSON.stringify(LocalStorageObj));
    console.log(window.localStorage.getItem('schedule', JSON.stringify(LocalStorageObj)));
}
    
window.onload = function (LocalStorageObj){
    let getObj = localStorage.getItem('schedule');
    console.log('getObj', JSON.parse(getObj))
};