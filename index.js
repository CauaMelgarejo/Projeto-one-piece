 //Objetivo 1 - Quando clicar no botão do personagem na lista, marcar botão selecionado
 const botoes= document.querySelectorAll('.botao');
 //Objetivo2- mostrar personagem
 //pegar personagem
 const personagens = document.querySelectorAll(".personagem") //serve para pegar toda as palavras personagens em uma lista, criar um documento
 
//passo 1-adiconar classes selecionado no botao queno usuario clicou
botoes.forEach((botao, index) =>{
  //vereficar se há algo ja clicado
  botao.addEventListener("click",()=>{
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    
      botaoSelecionado.classList.remove("selecionado");
      
    //selecionar botao clicado
  botao.classList.add("selecionado");
  //passo2 adicionar classe selecionado
   const personagemSelecionado=document.querySelector(".personagem.selecionado")
   personagemSelecionado.classList.remove("selecionado")
  personagens[index].classList.add("selecionado")
 
  
})
});
 


