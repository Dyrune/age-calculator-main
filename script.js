const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const submitButton = document.querySelector(".submit-btn");

const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const errorMessage = document.querySelector(".error-message");




submitButton.addEventListener("click", calculateAge);

function calculateAge() {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    //get current date
    const currentDate = new Date ();
    const currentYear = currentDate.getFullYear ();
    const currentMonth = currentDate.getMonth() +1;
    const currentDay = currentDate.getDate ();


    const maxDaysInMonth = new Date (year, month, 0).getDate();
    if (day < 1 || day > maxDaysInMonth) {
        errorMessage.textContent = "Invalid date";
        return;
    } else {
        errorMessage.textContent = '';
      }
    
    const maxMonthsInYear = new Date (year, 0, day).getDate();
    
    if (month < 1 || month > maxMonthsInYear) {
        errorMessage.textContent = "Invalid date";
        return;
    }  
    
    else {
        errorMessage.textContent = '';
    }

    if (year < 0 || year > 2024) {
        errorMessage.textContent = "invalid date";
        return
    } else {
        errorMessage.textContent = '';
    }



    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += 30;
    }

    if (ageMonths < 0) {
        ageYears --;
        ageMonths += 12;
    }

    outputYear.textContent = ageYears;
    outputMonth.textContent = ageMonths;
    outputDay.textContent = ageDays;
}
