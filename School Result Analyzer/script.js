let students = ['Rahul', 'Priya', 'Aman', 'Rahul', 'Neha'];
let marks = [25, 35, 45, 60, 75];

let First_Rahul = students.indexOf('Rahul');
document.getElementById('first_rahul').innerHTML = "First Rahul is at Index " + First_Rahul;

let Last_Rahul = students.lastIndexOf('Rahul');
document.getElementById('last_rahul').innerHTML = "Last Rahul is at Index " + Last_Rahul;

let Check_NehaEnrollement = students.includes('Neha');
document.getElementById('neha_enrollement').innerHTML = "Neha is enrolled ➡️ " + Check_NehaEnrollement;

let First_passingmarks = marks.find(mark => mark > 40);
document.getElementById('first_passingmarks').innerHTML = "First Passing Marks are " + First_passingmarks;

let First_passingstudentmarks = marks.findIndex(mark => mark > 40);
document.getElementById('first_passingstudentmarks').innerHTML = "First Passing Student Index is " + First_passingstudentmarks;

let Last_Studentabove50 = marks.findLast(mark => mark > 50);
document.getElementById('last_studentabove50').innerHTML = "Last Student Scoring above 50 Mark is " + Last_Studentabove50;

let Last_StudentpassingIndex = marks.findLastIndex(mark => mark > 40);
document.getElementById('last_studentpassingindex').innerHTML = "Last Passing Student Index is " + Last_StudentpassingIndex;
