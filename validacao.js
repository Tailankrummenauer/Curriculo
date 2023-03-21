function validateEmail(email, mensagem) {
    const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (validacao.test(email) === false) {
        alert("Email incorreto.");
        return false;
    }else{
        if(mensagem.length === 0){
            alert("Preencher campo mensagem.")
            return false;
        }else{
            alert("Mensagem enviada.")
            return true;
        }
    }

}



export {validateEmail};