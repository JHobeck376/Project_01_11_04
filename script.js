/*  Project 01_11_04

    Author: Jacob Hobeck
    Date:   9.4.18

    Filename: script.js
*/

"use strict";

// global variables
var httpRequest = false;

function checkInput() {
    var zip = document.getElementById("zip").value;
    if (zip.length === 5) {
        getLocation();
    } else {
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
    }
}

// creating event listeners
var zip = document.getElementById("zip");
if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
    zip.attachEvent("onkeyup", checkInput);
}