document.getElementById("btnSend").addEventListener("click", function grade () {
    var assignments = document.getElementById("assign").value;
    var gProject = document.getElementById("proj").value;
    var quiz = document.getElementById("quiz").value;
    var midterm = document.getElementById("mid").value;
    var final = document.getElementById("final").value;
    var intex = document.getElementById("intex").value;

    finalGrade = (assignments * .5) + (gProject * .1) + (quiz * .1) + (midterm * .1) + (final * .1) + (intex * .1);

    if (finalGrade >= 94) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , A";
    }
    else if (finalGrade >= 90) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , A-";
    }
    else if (finalGrade >= 87) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , B+";
    }
    else if (finalGrade >= 84) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , B";
    }
    else if (finalGrade >= 80) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , B-";
    }
    else if (finalGrade >= 77) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , C+";
    }
    else if (finalGrade >= 74) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , C";
    }
    else if (finalGrade >= 70) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , C-";
    }
    else if (finalGrade >= 67) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , D+";
    }
    else if (finalGrade >= 64) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , D";
    }
    else if (finalGrade >= 60) {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , D-";
    }
    else {
        document.getElementById("output").innerHTML = "Final Grade: " + finalGrade + "% , E";
    }
})