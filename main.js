// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

const createUser = (firstName, lastName) => {
  let fullName = {
    firstName,
    lastName,
  };
  return fullName;
};

const setAge = (user, age) => {
  user.age = age;
  return user;
};

const incrementAge = (user, age) => {
  age = user.age ++;
  return user 
};

const fixCar = (car) => {
  car.needsMaintenance = false
  return car
}

const addGrades = (student, newGrades) => {
  for (let i = 0; i < newGrades.length; i++) {
    student.grades.push(newGrades[i])
  }
  return student
}

const getDataType = (car, key) => {
  // let obj = car[key]
  // return typeof obj

  return typeof car[key]
}

const addTodo = (todos, newTodo) => {
  todos = todos.concat(newTodo)
  return todos
}

const addSong = (playlist, newSong) => {
  playlist.duration += newSong.duration
  playlist.songs.push(newSong)
  return playlist 
}

const updateReportCard = (reportCard, newGrade) => {
  reportCard.grades.push(newGrade)
  reportCard.lowestGrade = Math.min(...reportCard.grades)
  reportCard.highestGrade = Math.max(...reportCard.grades)

  let sum = 0;
  for (let i = 0; i < reportCard.grades.length; i++) {
    sum += reportCard.grades[i]
  }
  reportCard.averageGrade = sum / reportCard.grades.length

  return reportCard;

};



// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │
// │                                                                         │
const isDef = (arg) => arg === "function";
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard)
  ? updateReportCard
  : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
