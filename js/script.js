let m = moment()
$("#today").text(moment().format('llll'))
let hour = $(this).siblings(".hour1").text();

const saveBtn = document.getElementById('save')
const viewBtn = document.getElementById('view')

const saveListen = document.addEventListener('click', store, saveBtn)
const displayListen = document.addEventListener('click', display, viewBtn)

let sevenAM = JSON.stringify(document.getElementById('am7'))
let nineAM = JSON.stringify(document.getElementById('am9'))
let elevenAM = JSON.stringify(document.getElementById('am11'))
let onePM = JSON.stringify(document.getElementById('pm1'))
let threePM = JSON.stringify(document.getElementById('pm3'))
let fivePM = JSON.stringify(document.getElementById('pm5'))
const key = 'schedule'

function store(LocalStorageObj){
    if(LocalStorageObj == true){
        let sevenAM = document.getElementById('am7').value
        let nineAM = document.getElementById('am9').value
        let elevenAM = document.getElementById('am11').value
        let onePM = document.getElementById('pm1').value
        let threePM = document.getElementById('pm3').value
        let fivePM = document.getElementById('pm5').value

        LocalStorageObj = {
            sevenAMLSO: sevenAM,
            nineAMLSO: nineAM,
            elevenAMLSO: elevenAM,
            onePMLSO: onePM,
            threePMLSO: threePM,
            fivePMLSO: fivePM
            }
            localStorage.setItem(key, JSON.stringify(LocalStorageObj));
            console.log(localStorage.getItem(key, JSON.parse(LocalStorageObj)))
        }else{
            
            let sevenAM = document.getElementById('am7').value
            let nineAM = document.getElementById('am9').value
            let elevenAM = document.getElementById('am11').value
            let onePM = document.getElementById('pm1').value
            let threePM = document.getElementById('pm3').value
            let fivePM = document.getElementById('pm5').value
            
            window.localStorage.removeItem(key)

            LocalStorageObj = {
                sevenAMLSO: sevenAM,
                nineAMLSO: nineAM,
                elevenAMLSO: elevenAM,
                onePMLSO: onePM,
                threePMLSO: threePM,
                fivePMLSO: fivePM
                }
                window.localStorage.setItem(key, JSON.stringify(LocalStorageObj));
                console.log(JSON.parse(window.localStorage.getItem(key)))
            }
    }

function display(LocalStorageObj){
    sevenAM = JSON.parse(localStorage.getItem(key))
    nineAM = JSON.parse(localStorage.getItem(key))
    elevenAM = JSON.parse(localStorage.getItem(key))
    onePM = JSON.parse(localStorage.getItem(key))
    threePM = JSON.parse(localStorage.getItem(key))
    fivePM = JSON.parse(localStorage.getItem(key))
};