function verificar(){
  var data = new Date();
  var ano = data.getFullYear()
  var mes = data.getMonth()
  var fano = document.getElementById('txtano')
  var fmes = document.querySelector('input#txtmes');
  var res = document.querySelector('div#res');
  var idade = ano - Number(fano.value);
  
  if(fano.value.length == 0 || fano.value > ano) {
    window.alert( '[ERRO] Vefique os dados e tente novamente')
  }else{
    var fsex = document.getElementsByName('radsex'); 
    var genero = '';
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
      genero = 'homem'
      if(idade >=0 && idade <10){
        img.src = "bebe-menino.png";
      }else if(idade < 21){
        img.setAttribute('src', 'homem-jovem.png')

        //jovem

      }else if(idade < 50 ){
        img.setAttribute('src', 'homem-adulto.png')

        //adulto
      }else{
        img.setAttribute('src', 'homem-idoso.png')

        //idoso
      }
    }else if(fsex[1].checked){///////////mulher
      genero = 'mulher'
      if(idade >=0 && idade <10){
        //criança
        img.setAttribute('src', 'bebe-menina.png')

      }else if(idade >= 10 && idade < 21){
        img.setAttribute('src', 'mulher-jovem.png')
        //jovem

      }else if(idade >= 21 && idade < 55){
        //adulto
        img.setAttribute('src', 'mulher-adulta.png')
      }else if(idade >= 55){
        //idoso
        img.setAttribute('src', 'mulher-idosa.png')
      }
    }
    res.style.textAling= 'center'
    res.style.margin= '1rem'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
  }
}