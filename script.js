
function carnepp(duracao) {

    if(duracao>=6){
      return 650;
    }else{
       return 400;

       }
    }
     
    function crvejapp(duracao){

        if(duracao>=6){
            return 2000;
        }else{
         return 1200;
        }      
    }
         function bebidaspp(duracao){

            if(duracao>=6){
                return 1500;
            }else{
                return 1000
            }
        }       
        
        

        // Carne-400gr por pessoa + de 6 horas - 650
        // Cerveja -1200ml por pessoa + 6 horas - 2000ml
        //Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml


        //Crianças valem por 0.5


        const inputAdultos = document.getElementById("adultos"):
        const inputCriancas = document.getElementById("criancas"):
        const inputDuracao = document.getElementById("duracao"):


        const resultado = document.getElementById("resultado")


        function calcular0 { 
        const adultos = inputAdultos.value;
        const criancas = inputCriancas.value;
        const duracao = inputDuracao.value;

        const qdtTotalCarne = carnePP(duracao) * adultos + (carnepp(duracao)/ 2 * criancas);
        const qdtTotalCerveja= cervejaPP(duracao) * adultos;
        const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


        //coloca-se o "+" apos o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
         resultado.innerHTML = <h2 class="result-info">voce vai precisar de:</h2>
          resultado.innerHTML +=
          <div class="result-block">
            <img src="/assets/carne.svg"/>
            <p> ${qdtTotalCarne/1000} Kg de carne</p>
            </div>

            resultados.innerHTML += 
             <div class="result-block">
                <img src="./assets/cerveja.svg"/>
                <p>${Math.ceil(qdtTotalBebidas</p>
             </div>
