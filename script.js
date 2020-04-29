let firstRequest = new XMLHttpRequest();
firstRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status== 200) {
        let nameObj = JSON.parse(this.responseText);
        document.getElementById("einstein-name").innerHTML = nameObj.name;
    }
}

firstRequest.open("GET", "einstein.json", true);
firstRequest.send();

let secondRequest = new XMLHttpRequest();
secondRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status== 200) {
        let birthObj = JSON.parse(this.responseText);
        document.getElementById("einstein-birthday").innerHTML = birthObj.birthday;
    }
}

secondRequest.open("GET", "einstein.json", true);
secondRequest.send();



function showBio(){
let thirdRequest = new XMLHttpRequest();
thirdRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        let myObj1 = JSON.parse(this.responseText);
        document.getElementById("fullBio").innerHTML = myObj1.fullBio;    
    }
}
  
thirdRequest.open("GET", "einstein.json", true);
thirdRequest.send();
}


