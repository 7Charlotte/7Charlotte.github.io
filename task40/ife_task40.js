/**
 * Created by liuxia on 16/5/1.
 */
var myDate = new Date();
var nYear = myDate.getFullYear();
var nMon = myDate.getMonth();
var nDay = myDate.getDate();

var listYear = document.getElementById("year-list");
var listMon = document.querySelector("#month-list");

var selMon = document.querySelectorAll("#month-list option");

var dateClicked;

init();

function init() {
    //写入年份到select标签
    for (var i = 0; i < 30; i++) {
        var selYear = document.createElement("option");
        selYear.innerHTML = i + 1995;
        listYear.appendChild(selYear);
    }

    //选中当前年份,不知道为什么childNodes的第一个属性值是text
    listYear.childNodes[nYear + 1 - 1995].setAttribute("selected", "selected");
    listYear.addEventListener("change", calHandler, false);//监听日历事件
    //选中当前月份
    selMon[nMon].setAttribute("selected", "selected");
    listMon.addEventListener("change", calHandler, false);//监听日历事件
    monClicked = selMon[nMon];

    //渲染日历
    calHandler();

    //输入框内显示当前选中的年月日
    getInputValue(nYear, nMon + 1, nDay);
    //左右切换到下一个月
    var arrLeft = document.querySelector("#arr_l");
    var arrRight = document.querySelector("#arr_r");
    arrLeft.addEventListener("click",arrLeftHandler,false);
    arrRight.addEventListener("click",arrRightHandler,false);
}


function calHandler() {
    //得到当月的第一天
    var selectYear = sYear();
    var selectMonth = sMon();
    //console.log("select year:" + selectYear + "select month:" + selectMonth);
    var fstDay = new Date(Date.UTC(selectYear, selectMonth, 1));//定义开始的年月日;
    var fstWeekday = fstDay.getDay();
    //console.log("fstDay:" + fstDay);
    //写入日历
    var day = 1;
    var tableRow = document.querySelectorAll("#calender tbody tr");//行
    for (var i = 0; i < tableRow.length; i++) {
        tableRow[i].innerHTML = "";
    }

    //第一行
    //console.log("fstWeekday:" + fstWeekday);
    //第一行的空格
    for (var i = 1; i <= fstWeekday; i++) {
        var tableCell = createCellWithListener();
        tableCell.innerHTML = "";
        //console.log("first1");
        tableRow[0].appendChild(tableCell);
    }
    //第一行的数字
    for (var i = 1; day <= 7 - fstWeekday; i++, day++) {
        var tableCell = createCellWithListener();
        tableCell.innerHTML = day;
        tableRow[0].appendChild(tableCell);
    }
    //剩下的行
    for (var i = 1; i < tableRow.length; i++) {
        for (var j = 0; j < 7 && day <= getMonDay(selectMonth); j++, ++day) {
            var tableCell = createCellWithListener();
            tableCell.innerHTML = day;
            tableRow[i].appendChild(tableCell);
        }
    }
    getInputValue(selectYear, selectMonth + 1, myGetDay());
}

function createCellWithListener() {
    var tableCell = document.createElement("td");
    tableCell.addEventListener("click", sDay, false);
    return tableCell;
}

function sDay(e) {
    //console.log(e);
    //全局变量dateClicked保存哪个元素被点击了,下次点击时,将上一个元素的值恢复默认;
    if (dateClicked != null) {
        dateClicked.style.color = "black";
    }
    nDay = e.target.innerHTML;
    e.target.style.color = "red";
    getInputValue(sYear(), sMon() + 1, myGetDay());
    dateClicked = e.target;
}

function getMonDay(mon) {
    var yearArr = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    //console.log(mon);
    return yearArr[isLeapYear(sYear())][mon];

}

function isLeapYear(iYear) {//是否是闰年
    if (iYear % 4 == 0 && iYear % 100 != 0) {
        return 1;
    } else {
        if (iYear % 400 == 0) {
            return 1;
        } else {
            return 0;
        }
    }
}

function sYear() {
    return listYear.selectedIndex + 1995;
}

function sMon() {

    var optIndex = listMon.selectedIndex;
    selMon[optIndex].setAttribute("selected", "selected");
    console.log("optIndex:" + optIndex);
    return optIndex;
}

function getInputValue(year, month, day) {
    var inputEle = document.querySelector("input");
    inputEle.value = year + "/" + month + "/" + day;
}

function myGetDay() {
    return nDay;
}

function arrLeftHandler(){
    if(monClicked != null) {
        monClicked.removeAttribute("selected");
    }
    var optIndex = listMon.selectedIndex;
    optIndex = optIndex - 1 >= 0 ? optIndex - 1 : 11;
    selMon[optIndex].setAttribute("selected", "selected");
    monClicked = selMon[optIndex];
    calHandler();
}

function arrRightHandler(){
    if(monClicked != null) {
        monClicked.removeAttribute("selected");
    }
    var optIndex = listMon.selectedIndex;
    console.log("arrRightHandler:" + optIndex);
    optIndex = optIndex + 1 < 12 ? optIndex + 1 : 0;
    selMon[optIndex].setAttribute("selected", "selected");
    monClicked = selMon[optIndex];
    calHandler();
}