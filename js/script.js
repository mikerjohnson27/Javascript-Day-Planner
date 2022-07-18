let m = moment()
$("#today").text(moment().format('llll'))
let hour = $(this).siblings(".hour1").text();

let sevenAM = document.getElementById('am7').value
let nineAM = document.getElementById('am9').value
let elevenAM = document.getElementById('am11').value
let onePM = document.getElementById('pm1').value
let threePM = document.getElementById('pm3').value
let fivePM = document.getElementById('pm5').value

let LocalStorageObj = {
    sevenAMLSO: JSON.stringify(sevenAM),
    nineAMLSO: JSON.stringify(nineAM),
    elevenAMLSO: JSON.stringify(elevenAM),
    oneAMLSO: JSON.stringify(onePM),
    threeAMLSO: JSON.stringify(threePM),
    fiveAMLSO: JSON.stringify(fivePM),
    };

let LocalStorageObj_String = JSON.stringify(LocalStorageObj)

localStorage.setItem("schedule", LocalStorageObj_String)
console.log(localStorage)

let LocalStorageObj_DeString = JSON.parse(LocalStorageObj_String)
console.log(LocalStorageObj_DeString)


function createLocalStorageObj(){
    if(localStorage.getItem(LocalStorageObj) !== null){
        console.log("local storage is not available.")
        };
    }