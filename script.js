/*  Project 01_11_04

    Author: Jacob Hobeck
    Date:   9.4.18

    Filename: script.js
*/

"use strict";

// global variables
var httpRequest = false;

// watches the user's input
function checkInput() {
    var zip = document.getElementById("zip").value;
    if (zip.length === 5) {
        getLocation();
    } else {
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
    }
}

function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    } catch {
        return false;
    }
    return httpRequest;
}

// function to grab the location
function getLocation() {
    var zip = document.getElementById("zip").value;
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
}

// creating event listeners
document.getElementById("csset").style.visibility = "visible";
var zip = document.getElementById("zip").value;
if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
    zip.attachEvent("onkeyup", checkInput);
}
