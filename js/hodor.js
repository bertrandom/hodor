var lastIndex = 0;

function hodor() {

    var index,
        hodorSound;

    do {
        index = Math.floor(Math.random() * (11)) + 1;                    
    } while (index === lastIndex);

    lastIndex = index;

    hodorSound = soundManager.getSoundById('hodor' + index);
    if (!hodorSound) {

        hodorSound = soundManager.createSound({
            id: 'hodor' + index,
            url: '/audio/hodor' + index + '.mp3'
        });

    }

    hodorSound.play();

}

function changeColor() {
    document.getElementById('hodor').style['background-color'] = randomColor({luminosity: 'dark'});
}

changeColor();

soundManager.setup({
    url: '/swf/',
    onready: function() {

        document.getElementById('hodor').onclick = function() {
            hodor();
            changeColor();
            return false;
        }

        hodor();

    }
});