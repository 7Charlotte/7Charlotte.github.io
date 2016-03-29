var numberList = new Array();

//验证数字
function checkNumber(){
	var inputNumber = document.getElementById("number-input").value;
	if(/^[0-9]+$/.test(inputNumber) != true) {
		alert("请输入数字");
		return;
	} else{
		return inputNumber;
	}
	
}


function renderList(){
	var outputNumber = document.getElementById("number-output");
	outputNumber.innerHTML = "";
	for(var i = 0; i < numberList.length ; i++){
		var numberItem = document.createElement("li");
		numberItem.innerText = numberList[i];
		outputNumber.appendChild(numberItem);
	}
}

function leftInHandle(){
	if(checkNumber()){
		numberList.push(checkNumber());
	}
	renderList();
}

function rightIn(){}

function leftOut(){}

function rightOut(){}


function init(){
	var leftInBtn = document.getElementById("left-in");
	if (leftInBtn) {
        leftInBtn.addEventListener("click", leftInHandle, false);
    }
}
init();