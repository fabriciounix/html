//alert('estou aqui')
var conta = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for(var i = 0; i < 6; i++){
   // alert(i)
    var numero = []
    numero.push(conta[i])
	document.getElementById('teste'). innerHTML = numero
    //alert(conta[i])
  
}

var count = document.getElementById('mais').innerHTML;

//alert(count)

function maisUm(){
	
  count = parseInt(count)
  count = count + 1
  document.getElementById('mais').innerHTML = count

}
