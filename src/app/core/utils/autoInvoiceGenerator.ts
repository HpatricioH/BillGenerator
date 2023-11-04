
export const autoInvoiceGenerator = () => {
  const now = new Date();
  let month = now.getMonth() + 1;
  const year = now.getFullYear();
  

  // If the current date is past the 3rd of the month at 23:52, set the month to the next month
  if (now.getDate() > 3 || (now.getDate() === 3 && now.getHours() > 23) || (now.getDate() === 3 && now.getHours() === 23 && now.getMinutes() >= 55)) {
    month++;
  }

  const specificDayTime = new Date(year, month, 3, 23, 44, 0, 0);
  const delay = specificDayTime.getTime() - now.getTime()

  console.log(delay)
  console.log(specificDayTime)

  // if( delay > 0) {
  //   setTimeout(() => {
  //     console.log('Generate invoice')
  //     autoInvoiceGenerator(); 
  //   }, delay)

  //    return () => clearTimeout(delay);
  // }
}
