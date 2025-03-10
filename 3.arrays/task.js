function compareArrays(arr1, arr2) {
    let a = 0;
    if(arr1.length > arr2.length || arr1.length < arr2.length ){
      return false
    } else {
      for(let i = 0; arr1.length > i; i++){
        if (arr1[i] === arr2[i]){
          a+=1
        }
      }
    }
    if (a === arr1.length){
      return true
    } else {
      return false
    }
  }

function getUsersNamesInAgeRange(users, gender) {
  
}