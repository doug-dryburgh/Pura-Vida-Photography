$(document).ready(function () {

    var backgrounds = [
            // 'url("https://i.imgsafe.org/fcad878b58.jpg")',
            'url("https://i.imgsafe.org/fd8d13a4dd.jpg")',
            'url("https://i.imgsafe.org/fd92240bdb.jpg")',
            'url("https://i.imgsafe.org/8c6fd20f8b.jpg")',
            /*'url("https://i.imgsafe.org/8c6fa7161d.jpg")',
            'url("https://i.imgsafe.org/8c6fd4af90.jpg")',
            'url("https://i.imgsafe.org/8c6fae25c2.jpg")',
            'url("https://i.imgsafe.org/8c70261310.jpg")',
            'url("https://i.imgsafe.org/8c6fe06101.jpg")',
            'url("https://i.imgsafe.org/8c6fca9589.jpg")',
            'url("https://i.imgsafe.org/8c6fc33d5a.jpg")',
            'url("https://i.imgsafe.org/8c70660f40.jpg")',
            'url("https://i.imgsafe.org/8c70220af3.jpg")',
            'url("https://i.imgsafe.org/8c70446db0.jpg")' */
        ];
    
    var i = 0;
    setInterval(function () {

        $("#pageContainer").css("background-image", backgrounds[i]);
        i++;
        if (i > backgrounds.length) {
            i = 0;
        }
    }, 4000);

});