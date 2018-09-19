function findMax(arr) {
  let obj = {}
  let maxValue = 0
  let maxKey = []
  for(let i = 0; i<arr.length;i++){
    let temp = arr[i]
    if(!Object.keys(obj).includes(arr[i])){
      obj[temp] = 0
    }
    if(Object.keys(obj).includes(arr[i])){
      obj[temp] = obj[temp]+1
    }
  }
  for(let key in obj){
    if(obj[key] > maxValue){
      maxValue = obj[key]
      maxKey = []
      maxKey.push(key)
    } else if(obj[key] === maxValue) {
      maxKey.push(key)
    }
  }
  console.log(maxKey)
  return maxKey
}
findMax(['22','22','333','ddd','333', '22', 'ddd'])

