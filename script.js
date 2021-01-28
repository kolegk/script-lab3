"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore > 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "Greg", 99, "2020-01-27");

console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });

  deleteSubmissionByIndex(array, index);
};

deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 1, 98);
console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Greg"));

const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((item) => {
    if (item.score < currentLowest.score) {
      currentLowest = item;
    }
  });
  return currentLowest;
};
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  for (let submission of submissions) {
    console.log(submission);
  }
};
