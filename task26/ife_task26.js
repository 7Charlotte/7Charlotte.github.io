var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(400, 300, 100, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

//
//var ship = {
//    command: 'stop',
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
var mediator = new Mediator();

function Ship(id, command) {
    console.log("新建飞船");
    this.id = id;
    this.command = command;
    this.velocity = 20;
    this.energy = 100;
 
    this.fly = function (id,command) {
        console.log("飞船环形飞行");
        //TODO
       
        if (this.command = "start" && this.energy <= 100) {
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
        if (this.command = "destroy" ) {
            console.log("自爆");
        }
    };

    this.receiveSign = function(id,command){
        console.log("接受信号");
        this.fly()
    }


}

function Command(id,command){
    this.id = id;
    this.command = command;
}


function Commander(id ,command){
    console.log("指挥官发信号");
    this.command = new Command(id,command);
    mediator.broadcast(this.command);

}


function Mediator(){
    this.observer = [];
    this.register = function(ship){
        this.observer.push(ship);
        console.log("注册飞船");
    }
    this.broadcast = function (command) {
        for(var i in this.observer){
            this.observer[i].receiveSign(command);
        }
    }
}

function init(){
    var newtime = 0;
    var ship = new Ship(1, "start");
    mediator.register(ship);
    while (newtime) {
        ship.fly();
    }
    setTimeout(function(){
        var commander = new Commander(1,"stop");
    },3000)
}
init();
