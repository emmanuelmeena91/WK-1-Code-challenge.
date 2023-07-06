// Define tax rates
const taxRates = [
  {min: 0, max: 24000, rate: 0.1},
  {min: 24000, max: 40667, rate: 0.15},
  {min: 40667, max: 57333, rate: 0.20},
  {min: 57333, max: 74000, rate: 0.25},
  {min: 74000, max: 150000, rate: 0.3},
  {min: 150000, max: 99999999, rate: 0.35},
];

// Define NHIF and NSSF rates
const nhifRate = 0.017;
const nssfRate = 0.12;

// Get input values from user
const basicSalary = parseFloat(prompt("Enter your basic salary:"));
const benefits = parseFloat(prompt("Enter your benefits:"));

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate payee (tax)
let payee = 0;
let taxableIncome = grossSalary - (nhifRate * grossSalary) - (nssfRate * grossSalary * 2);
for (let i = 0; i < taxRates.length; i++) {
  const taxBracket = taxRates[i];
  if (taxableIncome > taxBracket.min) {
    const taxableAmount = Math.min(taxableIncome - taxBracket.min, taxBracket.max - taxBracket.min);
    payee += taxableAmount * taxBracket.rate;
  }
}

// Calculate NHIF and NSSF deductions
const nhifDeductions = Math.min(nhifRate * grossSalary, 1700);
const nssfDeductions = nssfRate * grossSalary * 2;

// Calculate net salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Output results
const display = document.getElementById("display");
display.innerHTML = `Gross salary: ${grossSalary}<br>
                      Payee (tax): ${payee}<br>
                      NHIF deductions: ${nhifDeductions}<br>
                      NSSF deductions: ${nssfDeductions}<br>
                      Net salary: ${netSalary}`; 


                      