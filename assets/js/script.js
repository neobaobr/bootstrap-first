let nome = window.document.getElementsById('nome') ;

let email = window.document.querySelector('#email');
let assunto = window.document.querySelector('#assunto');

let nomeOK = false
let emailOK = false
let assuntoOK = false
nome.style.width = '100%';
email.style.width = '100%';

function validaNome(){ 
  let txtNome = document.querySelector('#txtNome')
if(nome.value.lenght<3){
 
  txtNome.innerHTML = 'Nome invalid';
  txtNome.style.color = 'red';
}
  else{
    txtNome.innerHTML = 'Nome disponivel';
  txtNome.style.color = 'green';
  let nomeOK=true
  }
}

function validaEmail(){  
   let txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@')== -1 || email.value.indexOf('.')==-1){
 
    txtEmail.innerHTML = 'Email invalid';
    txtEmail.style.color = 'red';
  }
    else{
      txtEmail.innerHTML = 'Email disponivel';
    txtEmail.style.color = 'green';
    let emailOK=true
    }
  
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')
  if(assunto.value.lenght >=100){
    txtAssunto.innerHTML = 'digite ate 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  }
else{
  txtAssunto.style.display = 'none' 
  let assuntoOK = true
}
}
function enviar (){
  if(nomeOK==true && emailOK==true && assuntoOK==true)
  alert('formuario enviado com sucesso')
  else{
    alert('preencha corretamente o formulario antes de envia-lo')
  }
}