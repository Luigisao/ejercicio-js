


let pregunta = prompt("Estas en tu casa \nLlega el correo \nEs una nota \nLa nota es  de un viejo amigo que pide por tu ayuda y pide discrecion ya que te menciona que su vida corre peligro en caso de que se divulgase \nTomas el primer tren... \nTe diriges hacia las coordenadas mencionadas en la carta y...  \nEncuentras una catacumba, en este punto piensas si quieres continuar o no, ya que tu vida puede depender de ello \n ¿deseas ingresar a la catacumba?");
let poder = 0;
let carga = 0;
let vision = 0;
let exp = 0;
let nivel = 1;

if(( pregunta == "Si") || ( pregunta == "SI") || ( pregunta == "si")){



   let decision = prompt("entras pero te percatas de que esta oscuro, no puedes avanzar, pero muy convenientemente para este guion hay  \n1.mechero \n2.linterna \n3.candelabro \n¿Cual deseas elegir?")
   
   
   
   if(decision == "mechero"){
      let cargaNueva = carga + 15;

      let visionNueva =  vision + 5;

      let decision2 = prompt(`Tu carga aumenta a +${cargaNueva} \nTu vision aumenta a +${visionNueva} \nContinuas y encuentras 3 objetos... \nDagas \nHacha \nLibro \nSolo tienes una eleccion \n¿Cual eliges?`);
     
        if (decision2 == "dagas"){
        let poderNuevo = poder + 10;
        let cargaNueva2 = cargaNueva + 5;
        let decision3 = Number(prompt(`Tu poder aumenta en ${poderNuevo} , tu carga aumenta a ${cargaNueva2}, conservas tu vision de ${visionNueva} encuentras tu primer obstaculo, 3 entradas desconocidas, tu eleccion... \n1. Puerta izquierda \n2. puerta derecha \n3.Puerta delantera \n(escoge con numero)`))
  
          if (decision3 == 1){
             if(poderNuevo < 15){
             alert("Dentro hay una criatura, de origen desconozidos y realmente creias que con un par de dagas podrias matarla?...")
             alert("G A M E O V E R")
        }

    }
          else if (decision3 == 2){
             alert("No encuentras nada... el viento sopla... te das vuelta, algo te impacta de manera rapida, tus ojos se cierran lentamente...")
             alert("G A M E O V E R")
     }
          else if (decision3 == 3){
             alert("No encuentras nada... el viento sopla... te das vuelta, algo te impacta de manera rapida, tus ojos se cierran lentamente...")
             alert("G A M E O V E R")
     }
    }
      else if(decision2 == "hacha"){
        alert("es muy pesada... \nNo logras levantarla, escuchas un ruido y de repente te golpean...\nTus ojos se cierran lentamente y... ");
        alert("G A M E O V E R")
      }
      else if(decision2 == "libro"){
        alert("No logras vizualisar los hechizos y por consecuencia no puedes aprenderlos... \nEscuchas un ruido y de repente te golpean...\nTus ojos se cierran Lentamente y... ");
        alert("G A M E O V E R")
      }
    
    }
    else if( decision == "linterna"){
        alert("no tiene pilas, decides volver a tu casa y olvidarte de todo lo ocurrido ya que sientes que fue una señal del destino");
        alert("G A M E O V E R")

    }

    if(decision == "candelabro"){
        let cargaNueva = carga + 30;
  
        let visionNueva =  vision + 45;
  
        let decision2 = prompt(`Tu carga aumenta a +${cargaNueva} \nTu vision aumenta a +${visionNueva} \nContinuas y encuentras 3 objetos... \nDagas \nHacha \nLibro \nSolo tienes una eleccion \n¿Cual eliges?`);
       
          if (decision2 == "dagas"){
          let poderNuevo = poder + 10;
          let cargaNueva2 = cargaNueva + 5;
          let decision3 = Number(prompt(`Tu poder aumenta en ${poderNuevo} , tu carga aumenta a ${cargaNueva2}, conservas tu vision de ${visionNueva} encuentras tu primer obstaculo, 3 entradas desconocidas, tu eleccion... \n1. Puerta izquierda \n2. puerta derecha \n3.Puerta delantera \n(escoge con numero)`))
    
            if (decision3 == 1){
               if(poderNuevo < 15){
               alert("Dentro hay una criatura, de origen desconozidos y realmente creias que con un par de dagas podrias matarla?...")
               alert("G A M E O V E R")
          }
  
      }
            else if (decision3 == 2){
               alert("No encuentras nada... el viento sopla... te das vuelta, algo te impacta de manera rapida, tus ojos se cierran lentamente...")
               alert("G A M E O V E R")
       }
            else if (decision3 == 3){
               alert("No encuentras nada... el viento sopla... te das vuelta, algo te impacta de manera rapida, tus ojos se cierran lentamente...")
               alert("G A M E O V E R")
       }
      }
        else if(decision2 == "hacha"){
          alert("es muy pesada... \nNo logras levantarla, escuchas un ruido y de repente te golpean...\nTus ojos se cierran lentamente y... ");
          alert("G A M E O V E R")
        }
        else if(decision2 == "libro"){
            let poderNuevo = poder + 50;
            let cargaNueva2 = cargaNueva + 15;
            let decision3 = Number(prompt(`Poder: ${poderNuevo} \nCarga: ${cargaNueva2}\nVision:${visionNueva} encuentras tu primer obstaculo, 3 entradas desconocidas, tu eleccion... \n1. Puerta izquierda \n2. puerta derecha \n3.Puerta delantera \n(escoge con numero)`))

            if (decision3 == 1){
                if(poderNuevo > 15){
                alert(`Tu poder aumenta y aprendes un nuevo hechizo... \nVizualisas una criatura de origen desconocido y... \nLo derrotas con un hechizo recientemente aprendido`);
                for(i = 1 ; i < 10 ; i++){
                  nuevaExp =  exp + 10;
                    alert(`Consigues ${nuevaExp} de experiencia`)
                    
                }
                nuevaExp = 100;
                if (nuevaExp === 100){
                   nuevoNivel = nivel + 1;
                   alert(`Subes de nivel, Ahora tu nivel es ${nuevoNivel} \nSigues caminando, metiendote en otras sonas y visualizas a lo lejos una silueta`)
                   final = prompt(`ves a tu amigo con una sonrisa y te dice si te quieres unir a el \nTe cuentan sus planes \nQuiere hacer un nuevo orden y solo tu puedes ayudarlo ¿Lo ayudas?`)
                     
                   if((final == "Si") ||(final == "si") || (final == "SI")){
                    alert(`Has decidido ayudarlo y por consiguiente fallan en el intento.`)
                   }
                   else if((final == "no") ||(final == "NO") || (final == "No")){
                    alert(`Lo entregas a las autoridades y logras seguir con tu vida..`)
                    alert(`FIN`)
                   }
                   else{
                    alert('No fuiste capaz de responder... tu amigo decide que no vales la pena y se desase de ti')}
                }
           }
   
       }
             else if (decision3 == 2){
                alert("No encuentras nada... el viento sopla... te das vuelta, algo te impacta de manera rapida, tus ojos se cierran lentamente...")
                alert("G A M E O V E R")
        }
             else if (decision3 == 3){
                alert("No encuentras nada... el viento sopla... te das vuelta, algo te impacta de manera rapida, tus ojos se cierran lentamente...")
                alert("G A M E O V E R")
        }
        }
      
      }
    }
      else{
        alert("decides no entrometerte en sus asuntos, quieres seguir con tu vida tal cual es")
      }

    