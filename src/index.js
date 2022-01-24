module.exports = function toReadable(number) {
   if (number === 0) {
      return 'zero'
   }
   let x = Math.floor(number / 100)
   let x1 = x * 100
   let y = Math.floor((number - x1) / 10)
   let y1 = y * 10
   let z = number - (x1 + y1)

   let firstArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
   let secondArr = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
   let thirdArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

   let hundreds = firstArr[x] + ' hundred'
   let teens = secondArr[number - 10]
   let tens = thirdArr[y - 1]
   let ones = firstArr[z]

   if (number < 100) {
      if (number < 10) {
         return ones
      }
      else if (number % 10 === 0) {
         return tens
      }
      else if (number > 10 && number < 20) {
         return teens
      }
      else return tens + ' ' + ones
   }

   if (number >= 100) {
      if (number % 100 === 0) {
         return hundreds
      }
      if (number % 10 === 0) {
         return hundreds + ' ' + tens
      }
      if ((number - x1) > 10 && (number - x1) < 20) {
         teens = secondArr[(number - x1) - 10]
         return hundreds + ' ' + teens
      }
      if (number % 100 < 10) {
         return hundreds + ' ' + ones
      }
      else return hundreds + ' ' + tens + ' ' + ones
   }
}