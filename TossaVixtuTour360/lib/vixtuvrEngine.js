/**
 * Created by bc on 22/12/16.
 */


var isDebug = false;

/*
 include('https://aframe.io/releases/0.4.0/aframe.min.js');
//document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
document.onkeypress = disableCtrlKeyCombination
document.onkeydown = disableCtrlKeyCombination
// Play button, required by browsers to grab user interaction before autoplaying videos.
document.querySelector('#play-button').addEventListener("click", function (e) {
    startPlay();  // launch the first voice over
    this.style.display = 'none';
}, false);
*/


/*
 ////////////////////////////////
 /////////// FUNCTIONS //////////
 ////////////////////////////////
 */

function mousehandler(e) {
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}

function disableCtrlKeyCombination(e) {
    var forbiddenKeys = new Array("a", "i", "s", "c", "x", "u");
    var key;
    var isCtrl;
    if (window.event) {
        key = window.event.keyCode;     //IE
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else {
        key = e.which;     //firefox
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    if (true) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}

function onKeyPress(e)
{
    //debug("ANY KEY PRESSED " + e.keyCode);
    //read Debug
    if(e.keyCode == 112)
    {
        isDebug = !isDebug;
        document.querySelector(document.querySelector("a-scene").setAttribute("stats", isDebug));
    }

    return disableCtrlKeyCombination(e);
}

function startPlay() {
    var theVideo = document.querySelector(document.querySelector('#videosphere').getAttribute("src"));
    theVideo.play();

    debug("startPlay");
    //var theAudio = document.querySelector('#v1');
    //theAudio.components.sound.playSound();
}

function stopPlay() {
    var theVideo = document.querySelector(document.querySelector('#videosphere').getAttribute("src"));
    theVideo.pause();
    //var theAudio = document.querySelector('#v1');
    //theAudio.components.sound.playSound();
}

function include(filename)
{
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';

    head.appendChild(script)
}

function debug(string)
{
    console.log(string);
}

 

