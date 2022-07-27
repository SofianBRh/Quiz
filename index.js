

var i = 0;
var CountAnswer = 0 ;
let AnswerGood = true;
let counterr =0;
let score =0;
let availableQuestion=[];
const CORREC_BONUS = 100;
const MAX_QUESTION=23;
var nom = prompt("Indiquez votre nom");
var getInput = Array.from(document.getElementsByTagName('input')); // Récupération des inputs 
//console.log(getInput)
var getLabel = Array.from(document.getElementsByTagName('span'));
//console.log(getLabel);

// Fonction MÉLANGE ALÉATOIRE du tableau  
function shuffleArray(array) {         
    return array.sort(() => 0.5- Math.random());       
}

// Mélange le tableau json   
shuffleArray(jsonData);  

//rempli mon html avec mes donné "Json"
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].question;
    
    document.getElementById("option1").innerHTML = jsonData[index].choix1;
    document.getElementById("option2").innerHTML = jsonData[index].choix2;
    document.getElementById("option3").innerHTML = jsonData[index].choix3;
    document.getElementById("option4").innerHTML = jsonData[index].choix4;
    
    document.getElementById("choix1").value = jsonData[index].choix1;
    document.getElementById("choix2").value = jsonData[index].choix2;
    document.getElementById("choix3").value = jsonData[index].choix3;
    document.getElementById("choix4").value = jsonData[index].choix4;

    
}





/* Boucle pour créer un évenement sur les inputs */
for(index = 0; index < getInput.length; index++){
    getInput[index].addEventListener('click', Color);
}


/* Fonction qui va colorer les labels des inputs */
function Color(){
    
    getInput.forEach(element => {
        if(element.checked && element.type == 'radio'){
            
            getLabel.forEach(label => {

                if(label.innerHTML == element.value && element.value == jsonData[i].answer){
                    label.classList.add("correct");
                }
                else if(label.innerHTML == element.value && element.value != jsonData[i].answer){
                    label.classList.add("incorrect");
                }
                else{
                    label.style.backgroundColor = "none";
                }

            });
            /* Permet de rendre tous les inputs non cliquables une fois que la réponse est cliquée */
            document.querySelectorAll('input').forEach(
                (element)=> {
                    element.disabled = true;
                }
            );
        }
    });
    
}



/* Fonction qui va check les réponses */
function checkAnswer() {

    if (document.getElementById("choix1").checked && jsonData[i].choix1== jsonData[i].answer)
    { document.write.
        CountAnswer++;
    }
    if (document.getElementById("choix2").checked && jsonData[i].choix2 == jsonData[i].answer) {

        CountAnswer++;
    }
    if (document.getElementById("choix3").checked && jsonData[i].choix3 == jsonData[i].answer) {
    document
        CountAnswer++;
    }
    if (document.getElementById("choix4").checked && jsonData[i].choix4 == jsonData[i].answer) {
        
        CountAnswer++;
    }
      localStorage.setItem(nom,CountAnswer)
    // incrementation pour changer de question 
    i++;

    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div id='salut' style='color:#ffffff;font-size:18pt;text-align:center;'>*****Ton score de BG : "+CountAnswer+"*****</div>");
        document.write("</body>");
        for (let i = 0; i < 10 ; i++){
          var ValueB = localStorage.key(i)
          var ValueA= localStorage.getItem(Valu)
         
          div = document.getElementById("salut")
          var Child = document.createElement("p")
         
          Child.style.color = "red";
          const cNode = document.createTextNode("Nom: " + (Valu)+ " Score: ")
          const dNode = document.createTextNode(ValueA)
          
          Child.appendChild(cNode)
          Child.appendChild(dNode)
          div.appendChild(Child)
          div.appendChild(Child)
            
    }
    function compareNombres(a, b) {
        return a - b;
        ValueA.sort(compareNombres)
      }
  }
    /* Enlever la classe correct ou incorrect des labels */
    getLabel.forEach(label => {
        label.classList.remove("correct");
        label.classList.remove("incorrect");
    });

    /* Enlever l'effet "disable" pour les inputs*/
    document.querySelectorAll('input').forEach(
        (mesInputs)=> {
            mesInputs.disabled = false;
        }
    );

    // Rappel pour generer
    generate(i); 
}

for(let zIndex = 0; zIndex < allQuestions.length; zIndex++)
   {
      // Récupère l imput ( dans html)  de la réponse choisie 
      inputCheck = document.querySelector('input[name=question' + jsonData+ ']:checked');

      // Si la réponse n'est pas vide
      if (inputCheck) {
         var anwser = inputCheck.value; // Réponse choisie
         var goodAnswer = jsonData[zIndex].reponse; // Bonne réponse
         var anecdote =  all[zIndex].anecdote; // je recupere les anecdotes
         var h3 = document.querySelector('#question' + zIndex + ' h3'); // je recupere mon h3 dans  le HTML

         // Si la réponse est bonne
         if (anwser == goodAnswer) {
            score++; // +1
         //affichage bonne réponse en vert
            inputCheck.parentNode.classList.add("valid")//parenNode permet de selectionner le parent de l'imput (ici div answers ds html)
           h3.innerText = anecdote; // affichage de l'anecdote
         // sinon affichage réponse en rouge
            }else{ 
            inputCheck.parentNode.classList.add("invalid")
         }

      }

var anecdote =  allQuestions[zIndex].anecdote; // je recupere les anecdotes
         var h3 = document.querySelector('#question' + zIndex + ' h3'); // je recupere mon h3 dans  le HTML
     h3.innerText = anecdote; // affichage de l'anecdote tu mets la derniere ligne dans t a condition vert ou rouge
// //CONSTANTS
// //const CORRECT_BONUS = 100;
// //const MAX_QUESTIONS = 24;



// //var reponse = document.getElementById('answer').value;
// //if(reponse == 'answer'){
  
//   // document.getElementById("answer").style.color="green";
// //} else {
  
//   // document. getElementById("answer").style.color="red";
// //}
//     }
   }