/**
 * Created by liuxia on 16/4/12.
 */
var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
    inputs.item(i).addEventListener("focus", focusHandler, false);
    inputs.item(i).addEventListener("blur", blurHandler, false);
}
function focusHandler(e){
    
    var note = document.createElement("span");
    //e.target.parentNode.appendChild()
}