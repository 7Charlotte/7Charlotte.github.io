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
        console.log(e.target.innerHTML);
        this.day = e.target.innerHTML;

        this.renderCell(e);

    },
    renderCell: function (e) {
        if (this.currentCell != null) {
            this.currentCell.style.color = "black";
        }
        e.target.style.color = "red";
        this.currentCell = e.target;
    },
    renderTable: function () {
        //得到当月的第一天
        var fstDay = new Date(Date.UTC(this.year, this.month, 1));//定义开始的年月日;
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
            var tableCell = this.createCellWithListener();
            tableCell.innerHTML = "";
            //console.log("first1");
            tableRow[0].appendChild(tableCell);
        }
        //第一行的数字
        for (var i = 1; day <= 7 - fstWeekday; i++, day++) {
            var tableCell = this.createCellWithListener();
            tableCell.innerHTML = day;
            tableRow[0].appendChild(tableCell);
        }
        //剩下的行
        for (var i = 1; i < tableRow.length; i++) {
            for (var j = 0; j < 7 && day <= getMonDay(this.month); j++, ++day) {
                var tableCell = this.createCellWithListener();
                tableCell.innerHTML = day;
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
    createCellWithListener:function(){
        var tableCell = document.createElement("td");
        tableCell.addEventListener("click", this.setDay, false);
        return tableCell;
    }

}

