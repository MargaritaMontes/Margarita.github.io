function calculo(){
    var operador1 = document.forms[0].operador1.value
    var operador2 = document.forms[0].operador2.value
    var resultado = eval(operador1+operador2)
    document.forms[0].resultado.value = result
}