
//Test
const Ramber = {
    "Host" : "Test",
    "Text1" : "คือกูไม่รู้ว่ามึงไปไงแต่ถ้าหมดไฟก็สู้ๆนะมึงอีกนิดเดียว",
    "Text2" : "ขอบคุณมากเว้ย ตลอด3ปี มีถึงมึงข้างล่างนะ",
    "Text3" : "มึงโหดมากอะอันนี้คือกดถูก ไปอ่านข้างล่างเอา"
  };

//Example
const fifa0095 ={
    Host : "Fifa606",
    Text1 : "[คือกูไม่รู้ว่ามึงไปไงแต่ถ้าหมดไฟก็สู้ๆนะมึงอีกนิดเดียว]",
    Text2 : "[ขอบคุณมากเว้ย ตลอด3ปี มีถึงมึงข้างล่างนะ]",
    Text3 : "[มึงโหดมากอะอันนี้คือกดถูก ไปอ่านข้างล่างเอา]"
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
        
        //Use this condition to show pop up
        if (count >2){
            alert(Text3);
        }else if (count >0){
            alert(Text2);
        }else{
            alert(Text1);
        }
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

    
};
