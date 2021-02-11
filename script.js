function checkAngles(){
    var angle1 = parseInt(document.getElementById("angle1").value);
    var angle2 = parseInt(document.getElementById("angle2").value);
    var angle3 = parseInt(document.getElementById("angle3").value);
    console.log(angle1+angle2+angle3);
    if(angle1+angle2+angle3 === 180){
        document.getElementById("result").innerText = "The angles belong to a triangle";
    }
    else{
        document.getElementById("result").innerText = "The angles do not belong to a triangle";
    }
}

function calculateHyp(){
    var sidea = parseInt(document.getElementById("sidea").value);
    var sideb = parseInt(document.getElementById("sideb").value);
    var sidec = Math.sqrt(Math.pow(sidea, 2) + Math.pow(sideb, 2));
    sidec = sidec.toFixed(3); // .toFixed() used to round to a particular number of digits after decimal
    document.getElementById("result").innerText = `The length of Hypotenuse is ${sidec} units`;
}

function selectbtn(id){
    var nodes = document.getElementById("options-div").querySelectorAll("button");
    nodes.forEach(element => {
        element.innerHTML = "";
    });
    document.getElementById(id).innerHTML = `<i class="fas fa-circle"></i>`;

    var areaDivs = document.querySelectorAll(".area");
    areaDivs.forEach(element => {
        element.style.visibility = "collapse";
        element.style.display = "none";
    });
    document.querySelector("."+id).style.visibility = "visible";
    document.querySelector("."+id).style.display = "block";
    document.getElementById("calculate-area").querySelector(".result").innerText = "";
    var inputBoxes = document.querySelectorAll(".input-box");
    inputBoxes.forEach(element => {
        element.value = "";
    });
}

function show(className){
    var areaDivs = document.querySelectorAll(".show");
    areaDivs.forEach(element => {
        element.style.visibility = "collapse";
        element.style.display = "none";
    });
    document.querySelector("."+className).style.visibility = "visible";
    document.querySelector("."+className).style.display = "block";
}

function baseHeight(className){
    var base = document.querySelector("."+className).querySelector("#base").value;
    var height = document.querySelector("."+className).querySelector("#height").value;
    var area = 0.5*base*height;
    document.getElementById("calculate-area").querySelector("#result").innerText = `The area of the triangle is ${area} units`;
}

function sides(className){
    var a = parseInt(document.querySelector("."+className).querySelector("#a").value);
    var b = parseInt(document.querySelector("."+className).querySelector("#b").value);
    var c = parseInt(document.querySelector("."+className).querySelector("#c").value);
    console.log(a, b, c);
    var s = 0.5*(a+b+c);
    console.log("semi perimeter : " + s);
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.getElementById("calculate-area").querySelector("#result").innerText = `The area of the triangle is ${area} units`;
}

function equiTriangle(className){
    var s = document.querySelector("."+className).querySelector("#abc").value;
    var area = 0.433 * s * s;
    document.getElementById("calculate-area").querySelector("#result").innerText = `The area of the triangle is ${area} units`;
}

function sideAngle(className){
    var sidea = parseInt(document.querySelector("."+className).querySelector("#side1").value);
    var sideb = parseInt(document.querySelector("."+className).querySelector("#side2").value);
    var angle = parseInt(document.querySelector("."+className).querySelector("#angle").value);
    console.log(sidea, sideb, angle, Math.sin(angle*0.0174533));
    var area = sidea*sideb*0.5*(Math.sin(angle*0.0174533));
    area = area.toFixed(3); 
    document.getElementById("calculate-area").querySelector("#result").innerText = `The area of the triangle is ${area} units`;
}

function calculatePoints(){
    var correctAns = document.getElementById("quiz").querySelectorAll(".ans");
    var marks = 0;
    correctAns.forEach(element => {
        if(element.checked){
            marks = marks+1;
        }
        
    });
    console.log(correctAns);
    document.getElementById("quiz").querySelector("#result").innerText = `Your total score : ${marks}/${correctAns.length}`;
}