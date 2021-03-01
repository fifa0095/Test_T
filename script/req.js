
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
    
} 
/*$.getJSON("https://raw.githubusercontent.com/fifa0095/fefa/main/Test.json?callback=?", function(data){
    if (count > 2){
        alert(data['Text3']);
    }else if (count > 0){
        alert(data['Text2']);
    }else{
        alert(data['Text1']);
    }*/    
});