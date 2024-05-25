# Task-Node-API
Task API using Node.js and Express.js


API Documentation
- Base URL = http://localhost:8000
 
  1. GET: Retrieve a list of all tasks  => /tasks
  2. GET : Retrieve a specific task by ID. => /tasks/id 
  3. POST : Create a new task =>/tasks
      Request Body:
     {
        "title": "New Task",
        "description": "Description of the new task"
      }
  
  4. PUT : Update an existing task by ID. => /tasks/id
  5. DELETE : Delete a task by ID. => /tasks/id

- Report

- Project Overview

    This project is a simple RESTful API for managing a collection of tasks (CRUD opration), implemented using Node.js and Express.js. The API supports basic CRUD operations and stores data in memory.

- Approach

   1.Server Setup: Used Express.js to set up the server and handle routing.
  
   2.In-Memory Storage: Used an array to store tasks, simulating a database.
  
   3.CRUD Operations: Implemented endpoints to create, read, update, and delete tasks.
  
   4.Validation: Added basic validation to ensure that task properties (title, description) are required.
  
   5.Error Handling: Implemented error handling to return appropriate status codes and messages for different scenarios.
  
   6.Testing: Tested the API using Postman to ensure all endpoints work as expected.

- Algorithm Choices

   1.ID Generation: Used a simple counter (currentId) to generate unique IDs for tasks.
  
   2.Data Storage: Chose an array to store tasks because it's a simple and effective way to manage a small dataset in memory.
  
   3.Validation: Added checks to ensure that required fields are present and return 400 Bad Request if they're missing.
  
   4.Error Handling: Used middleware to handle errors and ensure the server responds gracefully to unexpected issues.
