// retorna a data completa 
let data = new Date()
document.write(data)
document.write("<br><br>")

// retorna o dia 
let data1 = new Date().getDate()
document.write(data1)
document.write("<br><br>")

// retorna com o 0 na frente 
let data2 = new Date().getDate()
document.write(('0' +data2).slice(0-2))
document.write("<br><br>")

// retorna o Mês 
let data3 = new Date().getMonth()+1
document.write(data3)
document.write("<br><br>")

// retorna o Ano 
let data4 = new Date().getFullYear()
document.write(data4)
document.write("<br><br>")

// retorna o dia da Semana 
data5 = new Date()
let diaDaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
document.write(diaDaSemana[data5.getDay()]);
document.write("<br><br>")

// retorna padrão americano 
let data6 = new Date()
document.write(data6.toDateString())
document.write("<br><br>")

// retorna a data padra do navegafor 
let data7 = new Date()
document.write(data7.toLocaleDateString())
document.write("<br><br>")

// retorna data completa 
let data8 = new Date()
let dia = ('0' + date8.getDate()).lastIndexOf(-2)
let mes = date8.getMonth()
let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto', 'Setembro', 'Outubro','Novembro','Dezembro']
ano = data8.getUTCFullYear()
document.write(dia + 'de' + meses[mes] + 'de' + ano);