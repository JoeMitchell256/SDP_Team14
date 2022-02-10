//Add an image of each team member to team website
var img = document.createElement("img");
var img2 = document.createElement("img2");
var img3 = document.createElement("img3");
var img4 = document.createElement("img4");


img.src = "Screen Shot 2022-02-10 at 10.08.41 AM.png";
img2.src = "Screen Shot 2022-02-10 at 10.09.17 AM.png";
img3.src = "Screen Shot 2022-02-10 at 10.09.30 AM.png";
img4.src = "Screen Shot 2022-02-10 at 10.09.39 AM.png";

var block = document.getElementById("x");



block.appendChild(img);
block.appendChild(img2);
block.appendChild(img3);
block.appendChild(img4);
