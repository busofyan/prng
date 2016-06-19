/* 
 * Author: busofyan
 */
function generate() {
    var row = 1;
    var column = 1;
    for (1; 1 <= row; row++) {
        for (column; column <= 8; column++) {
            var rnd = Math.floor((Math.random() * 8) + 1);
            var c = document.getElementById("c" + row + "c" + column);
            var ctx = c.getContext("2d");
            var img = document.getElementById(rnd);
            ctx.drawImage(img, 0, 0);
        }
    }

}
;
function reset() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}
;

