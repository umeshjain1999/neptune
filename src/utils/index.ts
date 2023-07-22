export const convertTime = (time: Date) => {
  //*@param time data type should be date otherwise it will give you Invalid Date
  return new Date(time).toLocaleDateString('en-in', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}