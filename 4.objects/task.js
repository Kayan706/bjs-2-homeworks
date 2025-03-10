
function Student(name, gender, age) {
 this.name = name;
 this.gender = gender;
 this.age = age;
 this.marks = []
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if (this.excluded != undefined){
    return 0
  }
  if (this.marks === undefined) {
      this.marks = [...marks]
  } else {
    this.marks.push(...marks)
  }

}



Student.prototype.getAverage = function () {
  if (this.marks === 0 || this.excluded !== undefined){
    return 0
  } else if (this.marks.length === 0){
    return 0
  }
  let sum = 0;
  this.marks.forEach(item => sum += item);
  return sum / this.marks.length;
  

}

Student.prototype.exclude = function (reason) {

  if (this.marks.length === 0) {
    delete this.subject
    delete this.marks
    this.excluded = reason
  }
  

}

