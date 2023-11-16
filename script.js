/* slide */

var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

             

 // Obtém todos os botões com a classe 'btn-banner'
 var botoes = document.querySelectorAll('.btn-banner');

 // Adiciona um ouvinte de evento de clique a cada botão
 botoes.forEach(function(botao) {
   botao.addEventListener('click', function() {
     // Redireciona o usuário para a outra página desejada
     window.location.href = 'file:///C:/Users/Robson/Documents/Vivo/contato.html';
   });
 });
       
     
 
  // Obtém todos os botões com a classe 'btn-whatsapp'
  var botoes = document.querySelectorAll('.btn-whatsapp');

  // Adiciona um ouvinte de evento de clique a cada botão
  botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
      // Redireciona o usuário para a outra página desejada
      window.location.href = 'https://api.whatsapp.com/send/?phone=5511916405945&text&type=phone_number&app_absent=0';
    });
  });
       
        
       