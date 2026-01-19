let name = prompt("What is your name?");
let studyYear = prompt("What year is it?");
let major = prompt("What is your major?");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

alert(`Hello ${name}! Welcome to ${year}. You are studying ${major} in your ${studyYear} year. Today's date is ${month}/${day}/${year}.`);