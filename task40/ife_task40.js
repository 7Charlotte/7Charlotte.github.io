/**
 * Created by liuxia on 16/5/1.
 */
var myDate = new Date();
var nYear = myDate.getFullYear();
var nMon = myDate.getMonth();
var nDay = myDate.getDay();
//console.log(myDate.getFullYear());//获取年份
//console.log(myDate.getMonth());//获取月份
//console.log(myDate.getDay());//获取星期几


//选中当前月份
var listMon = document.querySelector("#month-list");
listMon.addEventListener("change",calHandler,false);//监听日历事件

var selMon = document.querySelectorAll("#month-list option");
selMon[nMon].setAttribute("selected", "selected");

//写入年份到select标签
var listYear = document.getElementById("year-list");
for (var i = 0; i < 30; i++) {
    var selYear = document.createElement("option");
    selYear.innerHTML = i + 1995;
    listYear.appendChild(selYear);
}
//选中当前年份,不知道为什么childNodes的第一个属性值是text
listYear.childNodes[nYear + 1 - 1995].setAttribute("selected", "selected");

calHandler();


function  calHandler(){
    //得到当月的第一天
    var selectYear = sYear();
    var selectMonth = sMon();
    console.log("select year:" + selectYear + "select month:" + selectMonth);
    var fstDay = new Date(Date.UTC(selectYear, selectMonth, 1));
    var fstWeekday = fstDay.getDay();
    console.log("fstDay:" + fstDay);
//写入日历
    var day = 1;
    var tableRow = document.querySelectorAll("#calender tbody tr");//行
    for (var i = 0;i<tableRow.length;i++){
        tableRow[i].innerHTML = "";
    }

//第一行
    console.log("fstWeekday:" + fstWeekday);
    for (; day <= fstWeekday; day++) {
        var tableCell = document.createElement("td");
        tableCell.innerHTML = "";
        //console.log("first1");
        tableRow[0].appendChild(tableCell);
    }
    for (var i = 1; day <= 7; i++, day++) {
        var tableCell = document.createElement("td");
        tableCell.innerHTML = i;
        //console.log("second2");
        tableRow[0].appendChild(tableCell);
    }
//console.log(day);
//剩下的行
    for (var i = 1; i < tableRow.length; i++) {
        for (var j = 0; j < 7 && day <= getMonDay(sMon()); j++, ++day) {
            var tableCell = document.createElement("td");
            tableCell.innerHTML = day;
            tableRow[i].appendChild(tableCell);
        }
    }
}


function getMonDay(mon) {
    var yearArr = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    console.log(mon);
    return yearArr[isLeapYear(nYear)][mon];

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
    return listMon.selectedIndex;
}