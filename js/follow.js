var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

//de x en y van de muis bepalen
var xmouse, ymouse;
$on('mousemove', function (e) {
    xmouse = self.endX || e.pageX;
    ymouse = self.endY || e.pageY;
});

//oproepen van de cirkel die de muis volgt
var ball = document.getElementById('ball');
var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = void 0,
    ty = void 0,
    key = -1;

//delay van het volgen van de muis
var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * .250;
        dy = (ymouse - y) * .250;
        if (Math.abs(dx) + Math.abs(dy) < .2) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}
