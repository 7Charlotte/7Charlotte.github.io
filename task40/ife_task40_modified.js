/**
 * Created by liuxia on 16/5/5.
 */
var calDate = new CalenderDate();//新建函数对象

var listYear = document.getElementById("year-list");
var listMon = document.querySelector("#month-list");
var optMon = document.querySelectorAll("#month-list option");

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

function init() {
    initCal();//打印年份下拉菜单;
    listYear.addEventListener("change", function () {
        calDate.setYear((listYear.selectedIndex + 1995));
        calDate.renderInput();
    }, false);
    listMon.addEventListener("change", function () {
        calDate.setMonth();
        calDate.renderInput();
    }, false);
}


function initCal() {
    //写入年份到select标签
    for (var i = 0; i < 30; i++) {
        var selYear = document.createElement("option");
        selYear.innerHTML = i + 1995;
        listYear.appendChild(selYear);
    }
    //选中当前年份,不知道为什么childNodes的第一个属性值是text
    listYear.childNodes[calDate.year + 1 - 1995].setAttribute("selected", "selected");
    //选中当前月份
    optMon[calDate.month].setAttribute("selected", "selected");

    calDate.initTable();
    calDate.renderTable();
    calDate.renderInput();
}

init();