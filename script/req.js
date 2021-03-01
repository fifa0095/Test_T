
const Ramber = {
    Host : "Test",
    Text1 : "Yeah Our project is working.",
    Text2 : "Thank you for Test Our project.",
    Text3 : "We want to say thank you to all of yours."
  };

button5.onpointerdown = function (){

    // Created loop through 2 Array
    for(let i=0; i<Answer.length; i++) {
        //Loop through 2nd array
        for(let j=0;j<sentChar.length; j++){
            if( JSON.stringify(Answer[i]) == JSON.stringify(sentChar[j]) ){
                count++;
            }
        }
    }
    
    //clear interval
    clearInterval(checkIt);
    //Created condition to getting Text

    //Use this condition to show pop up
    if (count >2){
        alert(Json["Text3"]);
    }else if (count >0){
        alert(Json["Text2"]);
    }else{
        alert(Json["Text1"]);
    }
    
};