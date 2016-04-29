var table = document.querySelector("table");
var score1 = new Score("王小明",80,90,95);
var score2 = new Score("张小红",70,87,83);
var score3 = new Score("李小刚",93,94,83);
var scoreArr = [score1, score2, score3];
renderTable(scoreArr);



function Score(name,chinese,math,english){
	this.name = name;
	this.chinese = chinese;
	this.math = math;
	this.english = english;
	this.sum = chinese + math + english;

}

function renderTable(arr) {  
     for (var i = 0; i <= 3; i++) {
     	var tr = document.createElement("tr");
     	var data = new Array();
     	data.push("<td>" + arr[i].name + "</td>" + "<td>" + arr[i].chinese + "</td>" + "<td>" + arr[i].math + "</td>" + "<td>" + arr[i].english + "</td>" + "<td>" + arr[i].sum+ "</td>");
     	tr.innerHTML = data;
     	table.appendChild(tr);
     }

 }  

function sortNumber(){
	
}