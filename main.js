var students = [];
var studentswithc = [];
var studentswithoutc = [];

function submit()
{
    for (var i = 1; i <= 4; i++) {
       var Name = document.getElementById("txt" + i).value
       students.push(Name)
       console.log(students)
    }
    for (let g = 0; g < students.length; g++) {
        studentswithc.push("Name-" + students[g])
    }
    document.getElementById("with_commas").innerHTML=studentswithc
    studentswithoutc = studentswithc.join("")
    document.getElementById("without_commas").innerHTML=studentswithoutc
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting()
{
    studentswithc = []
    studentswithoutc = []
    students.sort()
    for (let g = 0; g < students.length; g++) {
        studentswithc.push("Name-" + students[g])
    }
    document.getElementById("with_commas").innerHTML=studentswithc
    studentswithoutc = studentswithc.join("")
    document.getElementById("without_commas").innerHTML=studentswithoutc
}