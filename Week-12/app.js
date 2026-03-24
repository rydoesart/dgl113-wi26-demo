'use strict';

function saveName() {
  let name = document.getElementById("username").value;

  let date = new Date();
  date.setTime(date.getTime() + 10 * 1000); // expires in 10 seconds
    document.cookie = "username=" + name + "; expires=" + date.toUTCString();
}

function getCookie(name) {
  let cookies = document.cookie.split("; ");
  
  for (let c of cookies) {
    let [key, value] = c.split("=");
    if (key === name) return value;
  }
  return "";
}

// Load cookie on page load
window.onload = function() {
  let username = getCookie("username");     
    if (username) { 
        document.getElementById("output").textContent = "Welcome back, " + username + "!";
    } else {
        document.getElementById("output").textContent = "Welcome, new user!";
    }
}

// Session Storage Functions
function saveSession() {
  let name = document.getElementById("username").value;
  sessionStorage.setItem("username", name);
}

function loadSession() {
  let user = sessionStorage.getItem("username");
  
  if (user) {
    document.getElementById("output2").innerText = "Session User: " + user;
  }
}