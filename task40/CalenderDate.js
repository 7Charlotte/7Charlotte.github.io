/**
 * Created by liuxia on 16/5/5.
 */
/**
 * 日历类,初始化为当前日期信息
 * @constructor
 */
function CalenderDate() {
    //日期基本信息,年月日,都为数字类型
    var myDate = new Date();
    this.year = myDate.getFullYear();
    this.month = myDate.getMonth();
    this.day = myDate.getDate();

    //相关DOM元素
    this.currentCell = null;        //当前被选中的天所在的表格单元,DOM元素
    this.currentSelected = null;    //当前被选中的月所在的下拉列表的项,DOM元素
}

CalenderDate.prototype = {
    /**
     * 修改年份并重新渲染日历表
     * @param year
     */
    setYear: function (year) {
        this.year = year;
        this.renderTable();
    },

    /**
     * 修改月份,重新渲染日历表并把当前被选中的项标记为选中
     * 同时清除上一次月份下拉选项中被选中的项
     */
    setMonth: function () {
        if (this.currentSelected != null) {
            this.currentSelected.removeAttribute("selected", "selected");
        }
        this.month = listMon.selectedIndex;
        this.currentSelected = listMon[listMon.selectedIndex];
        this.currentSelected.setAttribute("selected", "selected");
        this.renderTable();
    },

    /**
     * 设置号数并重新渲染表格单元特殊样式
     * 渲染表格单元时会清除上一次被选中的表格单元特殊样式
     * @param e
     */
    setDay: function (e) {
        this.day = e.target.innerHTML;
        this.renderCell(e);
    },

    /**
     *
     * @param e
     */
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
        var fstWeekday = new Date(Date.UTC(this.year, this.month, 1)).getDay();
        var monthDays = getMonDay(this.year, this.month);       //获取当月天数
        var tableRow = document.querySelectorAll("#calender tbody tr");     //日期展示表

        for (var i = 0, day = 1; i < tableRow.length; i++) {
            for (var j = 0; j < tableRow[i].cells.length; j++) {
                tableRow[i].cells[j].style.color = "black";
                if ((i == 0 && j < fstWeekday) || day > monthDays) {
                    tableRow[i].cells[j].innerHTML = "";
                } else {
                    tableRow[i].cells[j].innerHTML = day;
                    ++day;
                }
            }
        }
        this.renderInput();
    },

    /**
     *  表格初始化函数,用于初始化日期展示表的初始化,创建DOM元素
     *  只负责初始化,不负责赋值,表格元素的HTML默认赋空值
     */
    initTable: function () {
        var tableRow = document.querySelectorAll("#calender tbody tr");     //日期展示表

        //初始化所有的表格单元
        for (var i = 0; i < tableRow.length; i++) {
            for (var j = 0; j < 7; j++) {
                var tableCell = this.createCellWithListener();
                tableCell.innerHTML = "";
                tableRow[i].appendChild(tableCell);
            }
        }
    },

    /**
     * 输入文本框渲染,负责将日期按照特定格式渲染到输入文本框中
     * 每次改变日期都会调用一次
     */
    renderInput: function () {
        var inputEle = document.querySelector("input");
        inputEle.value = this.year + "/" + (this.month + 1) + "/" + this.day;
    },

    /**
     * 月份加一
     */
    plusMon: function () {
        this.month++;
        if(this.month == 12) {
            this.month = 0;
            this.year++;
        }
        this.renderTable();
    },

    /**
     * 月份减一
     */
    minusMon: function () {
        this.month--;
        if(this.month == -1) {
            this.month = 11;
            this.year--;
        }
        this.renderTable();
    },

    /**
     * 创建表格单元,同时把日历对象注册到单元的点击处理事件中
     * @returns {Element}
     */
    createCellWithListener: function () {
        var self = this;    //必须在回调之前拿到this的调用对象,否则真实执行回调函数时this所指对象不正确!!!
        var tableCell = document.createElement("td");

        tableCell.addEventListener("click", function (e) {
            self.setDay(e);
        }, false);
        return tableCell;
    }
}

/**
 * 根据年份和月份获得当月的天数
 * @param year
 * @param mon
 * @returns {*}
 */
function getMonDay(year, mon) {
    var yearArr = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    return yearArr[isLeapYear(year)][mon];
}