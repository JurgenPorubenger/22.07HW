const fs = require("fs");
const format = require("node.date-time");

// let logTime = () =>{ new Date()};
function logTime() {
    return new Date().format("Y-M-d H:mm");
}


let setInter= setInterval(function () {
    fs.appendFile('readme.log', logTime()+''+'\n', function(error){
        if(error) throw error;
    });
}, 1000);


setTimeout(function() {
    clearInterval(setInter);
    console.log( 'STOP' );
}, 10000);

