var inputValue,inputNote;

function getByteLen(val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            if (val[i].match(/[^x00-xff]/ig) != null) //全角
                len += 2;
            else
                len += 1;
        }
        return len;
    }

function btnHandler(){
	inputValue = document.querySelector("input").value;
	inputNote = document.querySelector("span");
	console.log(getByteLen(inputValue));
	if(getByteLen(inputValue) == 0) {
		inputNote.innerText = "输入不能为空";
		inputNote.style.color = "red";
	} else if( getByteLen(inputValue) > 16 || getByteLen(inputValue) < 4 ) {
		inputNote.innerText = "非法输入，请输入4-16个字符";
		inputNote.style.color = "red";
	} else {
		inputNote.innerText = "输入合法";
		inputNote.style.color = "black";
	}
}

function init(){
	var btn = document.querySelector("button");
	if(btn){
		btn.addEventListener("click", btnHandler, false);
	}
}
init();