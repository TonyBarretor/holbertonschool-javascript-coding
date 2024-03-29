#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, async (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const todos = await JSON.parse(body);
    const completedTaskByUserId = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        completedTaskByUserId[todo.userId] =
          (completedTaskByUserId[todo.userId] ?? 0) + 1;
      }
    });
    console.log(completedTaskByUserId);
  }
});
