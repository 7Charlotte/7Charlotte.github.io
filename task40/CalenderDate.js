/**
 * Created by liuxia on 16/5/5.
 */
function CalenderDate() {
    var myDate = new Date();
    this.year = myDate.getFullYear();
    this.month = myDate.getMonth();
    this.day = myDate.getDate();
    this.currentCell = null;
    this.currentSelected = null;
}

CalenderDate.prototype = {
    setYear: function (year) {
        this.year = year;
        this.renderTable();
    },
    setMonth: function () {
        if (this.currentSelected != null) {
            this.currentSelected.removeAttribute("selected", "selected");
        }
        this.month = listMon.selectedIndex;
        this.currentSelected = listMon[listMon.selectedIndex];
        this.currentSelected.setAttribute("selected", "selected");
        this.renderTable();
    },
    setDay: function (e) {
        this.day = e.target.innerHTML;
        this.renderCell(e);
    },
    renderCell: function (e) {
        if (this.currentCell != null) {
            this.currentCell.style.color = "black";
        }
        e.target.style.color = "red";
        this.currentCell = e.target;
        this.renderInput();
    },

    renderTable: function () {
        //得到当月的第一天是那个礼拜的第几天
        var date = new Date(Date.UTC(this.year, this.month, 1));
        var fstWeekday = date.getDay();
        console.log(fstWeekday);
        var monthDays = getMonDay(this.year, this.month);
        var tableRow = document.querySelectorAll("#calender tbody tr");//行

        for (var i = 0, day = 1; i < tableRow.length; i++) {
            for (var j = 0; j < tableRow[i].cells.length; j++) {
                var tableCell = tableRow[i].cells[j];
                if((i == 0 && j < fstWeekday) || day > monthDays) {
                    tableCell.innerHTML = "";
                } else {
                    tableCell.innerHTML = day;
                    ++day;
                }
            }
        }
        this.renderInput();
    },

    initTable: function () {
        var tableRow = document.querySelectorAll("#calender tbody tr");//行
        for (var i = 0; i < tableRow.length; i++) {
            tableRow[i].innerHTML = "";
        }

        //初始化所有的表格单元
        for (var i = 0; i < tableRow.length; i++) {
            for (var j = 0; j < 7; j++) {
                var tableCell = this.createCellWithListener(this);
                tableCell.innerHTML = "";
                tableRow[i].appendChild(tableCell);
            }
        }
    },
    renderInput: function () {
        var inputEle = document.querySelector("input");
        inputEle.value = this.year + "/" + (this.month + 1) + "/" + this.day;
    },
    plusMon: function () {

    },
    minusMon: function () {

    },
    createCellWithListener:function(calDate){
        var tableCell = document.createElement("td");
        tableCell.addEventListener("click", function(e) {
            calDate.setDay(e);
        }, false);
        return tableCell;
    }
}

function getMonDay(year, mon) {
    var yearArr = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    return yearArr[isLeapYear(year)][mon];
}