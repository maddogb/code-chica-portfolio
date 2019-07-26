document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
   
    document.getElementById("name").innerHTML = "My name is Madison but you can call me by my nickname Maddy or Mad Dog. i was born on July 14 so my zodiac sign is Cancer. yikes!!";
} 

function mySchool() {
    document.getElementById("school").innerHTML = "I am a senior at Harmony School of Endeavor.";
}

function myCareer() {
    document.getElementById("career").innerHTML = "For the time being I am currently employed at kumon. I help little kids with reading, writing , and math. I chose to be work at kumon because i wanted to have an experience working and helping kids because in the future I want to become a pediatrician ";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "I like to play different instruments but mainly flute and i like to sing . I also like to play volleyball.I first started playing the flute in the 6th grate.";
}
