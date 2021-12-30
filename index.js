var i = 0;
var correctCount = 0 ;

generate(0);
//rempli mon html avec mes donné "Json"
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].question;
    document.getElementById("optt1").innerHTML = jsonData[index].choice1;
    document.getElementById("optt2").innerHTML = jsonData[index].choice2;
    document.getElementById("optt3").innerHTML = jsonData[index].choice3;
    document.getElementById("optt4").innerHTML = jsonData[index].choice4;
}


function checkAnswer() {
    if (document.getElementById("choice1").checked && jsonData[i].choice1== jsonData[i].answer) {
       correctCount++;
    }
    if (document.getElementById("choice2").checked && jsonData[i].choice2 == jsonData[i].answer) {
        correctCount++;
    }
    if (document.getElementById("choice3").checked && jsonData[i].choice3 == jsonData[i].answer) {
        correctCount++;
    }
    if (document.getElementById("choice4").checked && jsonData[i].choice4 == jsonData[i].answer) {
        correctCount++;
    }
    // incrementation pour changer de question 
    i++;
    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Ton score de BG : "+correctCount+"*****</div>");
        document.write("</body>");
    }
    // Rappel pour generer
    generate(i);
}