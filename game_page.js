player_1score = 0;
player_2score = 0;

player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

document.getElementById("player_1name").innerHTML=player1_name
document.getElementById("player_2name").innerHTML=player2_name

 
document.getElementById("player_1score").innerHTML=player_1score
document.getElementById("player_2score").innerHTML=player_2score

document.getElementById("Question_Turn").innerHTML=player1_name
document.getElementById("Answer_Turn").innerHTML=player2_name

function send(){
     word=document.getElementById("word").value
     word=word.toLowerCase()
     console.log(word)
     charAt1=word.charAt(1)
     middle_letter=Math.floor(word.length/2)
     charAt2=word.charAt(middle_letter)
     charAt3=word.charAt(word.length-1);
     console.log(charAt1)
     console.log(charAt2)
     console.log(charAt3)
     question=word.replace(charAt1, "_")
     question=question.replace(charAt2, "_")
     question=question.replace(charAt3, "_")
     console.log(question)
     question_html="<h4 id='word_display'>"+ question + "</h4>";
     inputbox_html="<br>answer:<input type=text id=inputcheckbox>";
     button_html="<br> <br> <input type=button class='btn btn-info' value='check' onclick='check()'>";
     row= question_html + inputbox_html + button_html;
     document.getElementById("output").innerHTML=row;
    }

   question_turn = "player1";
   answer_turn = "player2";

   function check ()
{
     answer=document.getElementById("inputcheckbox").value
     answer= answer.toLowerCase();
     if(answer == word){
          if(answer_turn == "player1"){
               player_1score=player_1score + 1
               document.getElementById("player_1score").innerHTML=player_1score;
          }
          else{
               player_2score=player_2score + 1
               document.getElementById("player_2score").innerHTML=player_2score;
          }

     }

     if(question_turn == "player1"){
     question_turn="player2";
     document.getElementById("Question_Turn").innerHTML=player2_name;
     }
     else{
          question_turn = "player1"
          document.getElementById("Question_Turn").innerHTML=player1_name;
     }
     if(answer_turn == "player1"){
          answer_turn="player2";
          document.getElementById("Answer_Turn").innerHTML=player2_name;

     }
     else{
          answer_turn = "player1"
          document.getElementById("Answer_Turn").innerHTML=player1_name;
     }
    document.getElementById("output").innerHTML=""; 
     
}