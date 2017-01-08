    /* Gallery generator */
    $(document).ready(function () {
        var landSize = 221;
        var append = "";
        for (var i = landSize; i > 0; i--) {
            append += ('<a href="images/Landscape/' + i + '.jpg" title="' + i + '"> <img src="images/thumbnails/land/' + i + '.jpg" alt="' + i + '"> </a>');
        }
        $("#landLinks").html(append);
    });