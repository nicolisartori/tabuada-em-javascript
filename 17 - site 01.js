function gerar(){
let num = document.getElementById('txtnum')

if (num.value.length == 0) {
    alert('Por favor, digite um número!')
    
} else {
    let n = Number(num.value)
    let c = 0
    let tab = document.getElementById('seltab')
    tab.innerHTML = ""
    
for (c*n ; c <=10 ; c++){
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
}
}
}



