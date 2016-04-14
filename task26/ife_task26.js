var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(400, 300, 100, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

//
//var ship = {
//    status: 'stop',
//    veloctiy: '20',
//    energy: 100,
//    motivationSystem: function () {
//        this.energy -= 5;
//        console.log("增加能源");
//    },
//    energySystem: function () {
//        this.energy += 2;
//        console.log("减少能源");
//    },
//    selfDestroy: function () {
//        console.log("自爆");
//    }
//
//};

function Ship(id, status) {
    this.id = id;
    this.status = status;
    this.velocity = 20;
    this.energy = 100;
 
    this.fly = function () {
       
        if (this.status = "start" && this.energy <= 100) {
            this.energy += 5;
            console.log("增加能源");
        }
        if (this.energy >= 0) {
            this.energy -= 2;
            console.log("减少能源");
        } else {
            this.velocity = 0;
            console.log("飞船停止");
            this.statu = "stop";
        }
    };

    this.selfDestroy = function () {
        if (this.status = "destroy" ) {
            console.log("自爆");
        }
    };

    this.receiveSign = function(){
        console.log("接受信号");
    }


}

function Command(id,command){
    this.id = id;
    this.command = command;
}


var mediator = {

};

function init(){
    var newtime = 0;
    var ship = new Ship(1, "start");
    while (newtime) {
        ship.fly();
    }
}
init();
