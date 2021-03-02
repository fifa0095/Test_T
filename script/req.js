
//Test
const Ramber = {
    Host : "Test",
    Text1 : "Yeah Our project is working.",
    Text2 : "Thank you for Test Our project.",
    Text3 : "We want to say thank you to all of yours."
  };

//Example
const Patnj18 ={
    Host : "Pat 6/15",
    Text1 : "",
    Text2 : "",
    Text3 : ""
};

button5.onpointerdown = function (){
    //get Json file
    let requestURL = "https://raw.githubusercontent.com/fifa0095/fefa/main/Test.json";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        const JsonFile = request.response;
        const Text1 = JsonFile["Text1"];
        const Text2 = JsonFile["Text2"];
        const Text3 = JsonFile["Text3"];
    }

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
        alert(Text3);
    }else if (count >0){
        alert(Text2);
    }else{
        alert(Text1);
    }
    
};