function getArrayParams(...arr) {
  if(arr.length === 0){
    return 0
  }
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let sum = 0;
  for (let i = 0; arr.length > i; i++){
   sum += arr[i]
  }
  let avg = sum / arr.length
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  if(arr.length === 0){
    return 0
  }
  let sum = 0;
  for (let i = 0; arr.length > i; i++){
   sum += arr[i]
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0){
    return 0
  }
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return max - min
}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement  = 0;
  let sumOddElement = 0;
  for (let i = 0; arr.length > i; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
   }
   return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){
    return 0
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; arr.length > i; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement  += arr[i]
      countEvenElement +=1
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = [];
  let arr = []
  
  arr.push(...arrOfArr)
  for (let i =0; arrOfArr.length > i; i++){
    maxWorkerResult.push(func(...arr[i]))
  }
  return Math.max(...maxWorkerResult)
}
