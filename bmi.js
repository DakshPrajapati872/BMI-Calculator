let height=document.querySelector('#height');
let weight=document.querySelector('#weight');
let calculate=document.querySelector('button');
let result=document.querySelector('#result');
calculate.addEventListener('click',()=>{
    if(!height.value && !weight.value){
        result.innerHTML="<h2>Enter value</h2>";
    }
    else if(!height.value){
        result.innerHTML="<h2>Enter height value</h2>";
    }
    else if(!weight.value){
        result.innerHTML="<h2>Enter weight value</h2>";
    }
    else{
        let bmi=((weight.value)/(height.value*height.value))*10000;
        bmi=bmi.toFixed(1);
        if(bmi< 18.5){
            result.innerHTML=`<h3> UnderWeight : ${bmi} </h3>`;
        }	
        else if(bmi>= 18.5 && bmi<=24.9){
            result.innerHTML=`<h3> Healthy Weight : ${bmi} </h3>`;
        }
       else  if(bmi>=25 && bmi<=29.9){
            result.innerHTML=`<h3> OverWeight : ${bmi} </h3>`;
        }
        else{
            result.innerHTML=`<h3> Obesity : ${bmi} </h3>`;
        }

        height.value='';
        weight.value='';
    }
})