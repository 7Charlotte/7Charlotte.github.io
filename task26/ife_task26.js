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
var observer = new Array();
var commander = new Commander();
var commandEnum = ["start", "stop", "destroy"];

function Ship(id, command) {
    console.log("新建飞船");
    this.id = id;
    this.command = command;
    this.velocity = 20;
    this.energy = 100;

    this.fly = function (id, command) {
        console.log("飞船环形飞行");
        //TODO

        if (this.command = "start" && this.energy <= 100) {
            this.energy += 5;
            //console.log("增加能源");
        }
        if (this.energy >= 0) {
            this.energy -= 2;
            //console.log("减少能源");
        } else {
            this.velocity = 0;
            console.log("飞船停止");
            this.statu = "stop";
        }
    };

    this.selfDestroy = function () {
        if (this.command = "destroy") {
            console.log("自爆");
        }
    };

    this.receiveSign = function (command) {
        console.log("接受信号" + command.id + "," + command.command);
        this.fly()
    }

    this.register = function () {
        observer.push(this);
        console.log("注册飞船");
    }
}

function Command(id, command) {
    this.id = id;
    this.command = command;
}


function Commander() {
    this.sendMes = function () {
        var shipId = Math.floor(Math.random() * 4);
        var commandId = Math.floor(Math.random() * 3);
        if (shipId == 4) {
            shipId--;
        }
        if (commandId == 3) {
            commandId--;
        }
        var command = new Command(shipId, commandEnum[commandId])
        mediator.broadcast(command);
        console.log("指挥官发信号" + command.id + "," + command.command);
    }


}


function Mediator() {
    this.broadcast = function (command) {
        for (var i in observer) {
            observer[i].receiveSign(command);

        }
        console.log("广播信号");
    }
}

function init() {
    var ship = new Ship(1, "start");
    ship.register();
    setTimeout(function () {
        commander.sendMes();
    }, 3000);
    setInterval(function () {
        ship.fly();
    }, 1000)
}

init();
