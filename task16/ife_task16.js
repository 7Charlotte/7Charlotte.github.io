/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = new Array();

init();
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var aqiCity = document.querySelector("#aqi-city-input").value;
    var aqiValue = document.querySelector("#aqi-value-input").value;
    if ((/^[\u4E00-\u9FA5\sa-zA-Z]+$/.test(aqiCity) && /^[0-9]+$/.test(aqiValue)) != true || aqiCity.trim().length == 0) {
        return;
    }
    var aqiItem = {
        aqiCity: aqiCity,
        aqiValue: parseInt(aqiValue)
    };
    aqiData.push(aqiItem);
}


/**
 * 渲染aqi-table表格    //todo ... 可以用闭包哟,效率更佳
 */
function renderAqiList() {
    var data = new Array();
    data.push('<table border=1><tbody>');
    for (var i = 0; i < aqiData.length; i++) {
        data.push('<tr>');
        data.push('<td> ' + aqiData[i].aqiCity + '</td>');
        data.push('<td> ' + aqiData[i].aqiValue + '</td>');
        data.push('<td><button id="del-btn" onclick="delBtnHandle(' + i + ')">删除</button></td></tr>');
    }
    data.push('</tbody><table>');
    document.getElementById('aqi-table').innerHTML = data.join('');

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(i) {
    // do sth.
    var table = document.getElementById('aqi-table');
    table.deleteRow(i);
    aqiData.splice(i,1);

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var addBtn = document.getElementById("add-btn");
    if (addBtn) {
        addBtn.addEventListener("click", addBtnHandle, false);
    }

}

