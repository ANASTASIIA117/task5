send.addEventListener("click",calc);
function calc(){
    let a = dlina1.value;
    let b = dlina2.value;
    let v;
    v = (a*b)/2;
    result.innerHTML = v.toFixed(2);

}