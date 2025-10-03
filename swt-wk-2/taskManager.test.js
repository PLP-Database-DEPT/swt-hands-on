//Import the TaskManager class from taskManager.js file 
const TaskManager = require('./taskManager'); 

// Group related test cases together using describe 

describe('TaskManager', () => {
    let manager; 

    // Run this before each test so that we have a fresh instance
    beforeEach(() =>{
        manager = new TaskManager(); 
    }); 

    // Test case 1 : Check if the task ca be added 
    test('adds a task', () => {
        // Add an actual task 
        const task = manager.addTask('Attend choir practice');

        // Assert: Checking the returned task if it alignes with what we expect 
        expect(task.title).toBe('Attend choir practice'); 
        expect(task.completed).toBe(false); // New tasks should be incomplete by default 
        expect(manager.getAllTasks()).toHaveLength(1); // If there is 1 task stored
    });

  // Test case 2 : checking if a task can be marked as completed
   test('completes a task', () => {
      // Your code goes HERE
    });

  // Test case 3: checking if a task can be deleted
  test('deletes a task', () => {
          // Your code goes HERE
  });
    
// Test case 4: edge case — trying to complete or delete a task that doesn't exist
    test('Throw error for not existent tasks', () => {
        // Expect an error when you try to complete a task that does not exist
        expect(()=> manager.completeTask(19)).toThrow('Task not found'); 

        // Expect an error when you try to delete a task that does not exist
        // Your code goes HERE
    });
});
