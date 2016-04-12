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
    this.energy = 100;
    this.motivationSystem = function () {
        if (status = "start" && this.energy <= 100) {
            this.energy += 5;
            console.log("增加能源");
        }
    };
    this.energySystem = function () {
        if (this.energy >= 0) {
            this.energy -= 2;
            console.log("减少能源");
        }else {
            this.status = stop;
        }
    };
    this.selfDestroy = function () {
        if (status = "destroy" ) {
            console.log("自爆");
        }
    };
}

var commander = {
    id: 1,
    command: "stop"
}

var newtime = 0;
var ship = new Ship(1, "start");
while (newtime) {
    ship.motivationSystem();
}
