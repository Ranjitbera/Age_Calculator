let dateInput = document.getElementById("date-input").value;
let monthInput = document.getElementById("month-input").value;
let yearInput = document.getElementById("year-input").value;

function ageCalculator(){
    let date = new Date()
    let flag = true;

console.log(date)

    let finalOutput = document.getElementById("final-result")
    let dateInput = document.getElementById("date-input").value;
    let monthInput = document.getElementById("month-input").value;
    let yearInput = document.getElementById("year-input").value;
    

    if(yearInput.length<4 || yearInput.length>4){
        finalOutput.innerText = "Please enter valid year"
        flag = false;
    }else if(yearInput>2023){
        finalOutput.innerText = "Please enter valid year"
        flag=false;
    }else if(dateInput.length>2 || dateInput.length<1){
        finalOutput.innerText ="Please enter valid date"
        flag=false;
    }else if(monthInput.length>2 || monthInput.length<1){
        finalOutput.innerText ="Please enter valid month"
        flag= false;
    }else if(monthInput>12){
        finalOutput.innerText = "Please enter vaild month"
        flag=false;
    }

    
if(flag){
    let ageYear = date.getFullYear()-parseInt(yearInput);
    let ageMonth = date.getMonth()+1 - parseInt(monthInput);
    let ageDay = date.getDate() - parseInt(dateInput);

    if(ageDay < 0) {
        ageMonth--;
        let lastMongthDate = new Date(date.getFullYear(),date.getMonth(),0);
        ageDay = lastMongthDate.getDate()-parseInt(dateInput)+date.getDate();
    }

    if(ageMonth<0){
        ageYear--;
        ageMonth=12-parseInt(monthInput)+date.getMonth();
    }


    finalOutput.innerText = `Your age is ${ageYear} Years ${ageMonth} Month ${ageDay} Days`
}
}
