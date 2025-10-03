class TaskManager {
    constructor() {
      this.tasks = [];
      this.nextId = 1;
    }
  
    addTask(title) {
      const task = {
        id: this.nextId++,
        title,
        completed: false
      };
      this.tasks.push(task);
      return task;
    }
  
    completeTask(id) {
      const task = this.tasks.find(t => t.id === id);
      if (!task) throw new Error('Task not found');
      task.completed = true;
    }
  
    deleteTask(id) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index === -1) throw new Error('Task not found');
      this.tasks.splice(index, 1);
    }
  
    getAllTasks() {
      return this.tasks;
    }
  
    getCompletedTasks() {
      return this.tasks.filter(t => t.completed);
    }
  }
  
  module.exports = TaskManager;
  

