

let btnClick = document.querySelector('[data-calc]')

btnClick.addEventListener('click',()=> {

let Deg = +document.querySelector('[celcius]').value;
let Fah = +document.querySelector('[F]').value;

    if(Deg && Fah){
        document.getElementById('eish').innerText = "Nah Chief Clear A Field"
    }
    else if(Deg !== 0){
        document.querySelector('[F]').value = (((9/5) * parseFloat(Deg)) + 32).toFixed(2);
    }else if(Fah !==0){
        document.querySelector('[celcius]').value = ((parseFloat(Fah) - 32) * (5/9)).toFixed(2);
    }
    else{
        document.querySelector('[F]').value = 0;
        document.querySelector('[C]').value = 0;
    }
})