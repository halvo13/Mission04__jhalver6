$("#btnSend").click(function grade () {
    var assignments = $("#assign").val();
    var gProject = $("#proj").val();
    var quiz = $("#quiz").val();
    var midterm = $("#mid").val();
    var final = $("#final").val();
    var intex = $("#intex").val();

    finalGrade = (assignments * .5) + (gProject * .1) + (quiz * .1) + (midterm * .1) + (final * .1) + (intex * .1);

    if (finalGrade >= 94) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , A";
    }
    else if (finalGrade >= 90) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , A-";
    }
    else if (finalGrade >= 87) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , B+";
    }
    else if (finalGrade >= 84) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , B";
    }
    else if (finalGrade >= 80) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , B-";
    }
    else if (finalGrade >= 77) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , C+";
    }
    else if (finalGrade >= 74) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , C";
    }
    else if (finalGrade >= 70) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , C-";
    }
    else if (finalGrade >= 67) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , D+";
    }
    else if (finalGrade >= 64) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , D";
    }
    else if (finalGrade >= 60) {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , D-";
    }
    else {
        $("#output").innerHTML = "Final Grade: " + finalGrade + "% , E";
    }
})