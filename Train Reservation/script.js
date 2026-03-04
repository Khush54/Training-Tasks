let passengers_details = [
    { name: 'Aman', age: 20, gender: 'M', seat: 12 },
    { name: 'Raj', age: 65, gender: 'M', seat: 3 },
    { name: 'Abhishek', age: 17, gender: 'M', seat: 5 },
    { name: 'Kajal', age: 78, gender: 'F', seat: 34 },
    { name: 'Suresh', age: 16, gender: 'M', seat: 23 },
    { name: 'Anu', age: 25, gender: 'F', seat: 9 }
]

function passenger() {
    let output = `<h4> Passenger List </h4> <br>`;
    for (let i = 0; i < passengers_details.length; i++) {
        output += `Name:  ${passengers_details[i].name} | Age: ${passengers_details[i].age} | Gender: ${passengers_details[i].gender} | Seat: ${passengers_details[i].seat} <br>`;
    } 0
    document.getElementById('result_box').innerHTML = output;
}

function senior_Citizens() {
    let output = `<h4> Senior Citizens </h4> <br>`;
    let seniors = passengers_details.filter(i => i.age > 60);
    for (let i = 0; i < seniors.length; i++) {
        output += `Name:  ${seniors[i].name} | Age: ${seniors[i].age} | Gender: ${seniors[i].gender} | Seat: ${seniors[i].seat} <br>`;
    }
    document.getElementById('result_box').innerHTML = output;
}

function upperCase() {
    let output = `<h4> Uppercase Names</h4> <br>`;
    let upperNames = passengers_details.map(i => i.name.toUpperCase());
    for (let i = 0; i < upperNames.length; i++) {
        output += `${upperNames[i]} | `;
    }
    document.getElementById('result_box').innerHTML = output;
}

function ageReduce() {
    let output = `<h4> Total Age (Reduce)</h4> <br>`;
    let reducedAge = passengers_details.reduce((sum, i) => i.age + sum, 0);
    output += reducedAge;
    document.getElementById('result_box').innerHTML = output;
}

function ageReduceRight() {
    let output = `<h4> Total Age (Reduce Right)</h4> <br>`;
    let reducedAge = passengers_details.reduceRight((sum, i) => i.age + sum, 0);
    output += reducedAge;
    document.getElementById('result_box').innerHTML = output;
}

function adults() {
    let output = `<h4> Checking All Adults </h4> <br>`;
    let checkAdult = passengers_details.filter(i => i.age < 18)
    if (checkAdult.length == 0) {
        output += `All Passengers are adult.`;
    }
    output += `There are ${(passengers_details.length) - (checkAdult.length)} adult passengers only and ${checkAdult.length} are minor passengers. `;
    document.getElementById('result_box').innerHTML = output;
}

function minor() {
    let output = `<h4> Any Minor ? </h4> <br>`;
    let checkAdult = passengers_details.filter(i => i.age < 18)
    if (checkAdult.length == 0) {
        output += `No Passenger is minor.`;
    }
    output += `${checkAdult.length} are minor passengers. `;
    document.getElementById('result_box').innerHTML = output;
}

function checkGender() {
    let output = `<h4> Gender Ratio </h4> <br>`;
    let check_male = passengers_details.filter(i => i.gender === 'M');
    output += `Male Passengers = ${check_male.length} <br> Female Passengers = ${passengers_details.length - check_male.length}`;
    document.getElementById('result_box').innerHTML = output;
}

function addPassengers() {
    let output = `<h4> Adding Extra Passengers </h4> <br>`;
    output += `Adding Karan and Anjali... <br>`
    let updatedPassengerList = [...passengers_details];
    updatedPassengerList.push({ name: 'Karan', age: 45, gender: 'M', seat: 67 });
    updatedPassengerList.push({ name: 'Anjali', age: 22, gender: 'F', seat: 21 });
    for (let i = 0; i < updatedPassengerList.length; i++) {
        output += `${updatedPassengerList[i].name} | `;
    }
    document.getElementById('result_box').innerHTML = output;
}

function firstPassenger() {
    let output = `<h4> Separating First Passengers</h4> <br>`;
    let names = passengers_details.map(i => i.name)
        const [first, ...rest] = names;
        output += `First Name : ${first} <br> All Rest Names : ${rest.join(' | ')}`;

    document.getElementById('result_box').innerHTML = output;
}

document.getElementById('passengerList').addEventListener('click', passenger);
document.getElementById('seniorCitizens').addEventListener('click', senior_Citizens);
document.getElementById('uppercaseNames').addEventListener('click', upperCase);
document.getElementById('totalAgeReduce').addEventListener('click', ageReduce);
document.getElementById('totalAgeReduceRight').addEventListener('click', ageReduceRight);
document.getElementById('checkAllAdults').addEventListener('click', adults);
document.getElementById('checkAnyMinor').addEventListener('click', minor);
document.getElementById('genderRatio').addEventListener('click', checkGender);
document.getElementById('addExtraPassengers').addEventListener('click', addPassengers);
document.getElementById('separateFirstPassenger').addEventListener('click', firstPassenger);

