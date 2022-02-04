names= [];
function submit()
{
var name1 = document.getElementById("student1").value;
var name2 = document.getElementById("student2").value;
var name3 = document.getElementById("student3").value; 
var name4 = document.getElementById("student4").value;
names.push(name1);
names.push(name2);
names.push(name3);
names.push(name4);
console.log(names);
document.getElementById("display_names").innerHTML = names;
}