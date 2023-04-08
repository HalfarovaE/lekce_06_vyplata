
const wage = 150
const days = 22
const hours = 8
const tax = 15

const salary = (wage, hours, days) => {
return (Math.round(wage * hours * days))
}

console.log(salary(wage, days, hours))
document.body.innerHTML = `Měsíční mzda je: ${salary(150,22,8)} Kč.`

const taxed = (salary, tax) => {
   return Math.round(salary * (100-tax))/100
   }

console.log(taxed(26400,15))

document.body.innerHTML = `Čistá měsíční mzda je: ${taxed(26400, 15)} Kč.`