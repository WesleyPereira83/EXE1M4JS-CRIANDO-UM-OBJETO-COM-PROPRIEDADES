


let banco = {
    conta: '25310-6',
    saldo: 6596,
    tipoDeConta: 'CP',
    agencia: 1408,
}

 function buscarSaldo (texto){
  return ('(=) Saldo atual: ' + banco.agencia.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace(',','.'))
} 



let deposito = function(a){
    soma = (banco.saldo + a)
    return soma
} 
deposito(a = 3577)


let saque = function(b){
    sub = soma - b
    return sub
} 
saque(b = 2258)


console.log('')
console.log('==========================DADOS DA CONTA POUPANÇA========================')
console.log('Extrato Simplificado => Agência: ' + banco.agencia  + ' / Nº da Conta Poupança: ' + banco.conta)
console.log('')
console.log(buscarSaldo())
console.log('(+) Depósito de valores na conta popança de ' + a.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace(',','.'))
console.log('(=) Saldo atualizado da conta poupança ' + soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace(',','.'))
console.log('(-) Saque de valores na conta poupança de ' + b.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace(',','.'))
console.log('(=) Saldo atualizado da conta poupança ' + sub.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace(',','.'))
console.log('')
console.log('=========================================================================')
