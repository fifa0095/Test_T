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


/*$.getJSON("https://raw.githubusercontent.com/fifa0095/fefa/main/Test.json?callback=?", function(data){
    console.log(data['Text1']);
    console.log(data['Text2']);
    //const Text3 = data['Text3'];
});*/
