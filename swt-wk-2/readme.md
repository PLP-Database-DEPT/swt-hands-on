
# 🧪 Hands-On Activity 2: Testing a Task Manager App

🧱 Project: **Task Manager CLI**
🎯 Goal: Learn how to write unit tests using Jest by testing a simple logic-based JavaScript project.

⏱️ Estimated Time: 30–45 minutes  
📌 This activity is **not graded** — it prepares you for real testing assignments and builds your test writing confidence.

---

## 🚀 How to Get Started

### 1️⃣ Download or Clone the Project
You can download the folder or clone it using Git:


### 2️⃣ Install Node.js (if not already installed)
- [Download Node.js](https://nodejs.org) and install it on your system.
- Verify installation:

```bash
node -v
npm -v
```

### 3️⃣ Install Dependencies (Jest)
In the project folder, run:

```bash
npm install
```
---

## 🔬 What You’ll Practice

✔️ Observing and understanding JavaScript logic  
✔️ Writing structured unit tests using Jest  
✔️ Handling edge cases and errors  
✔️ Practicing test-driven development (TDD) mindset  

---

## 🧪 Your Tasks

### Task 1: Run the Tests
```bash
npm test
```

### Task 2: Read `taskManager.js`  
Understand how the logic works for:
- `addTask`
- `completeTask`
- `deleteTask`
- `getAllTasks`
- `getCompletedTasks`

### Task 3: Explore and Modify the Tests  
Go to `taskManager.test.js` and try:

- ✅ Writing a test that adds multiple tasks
- ⚠️ Writing a test that attempts to delete a task twice
- 🧪 Checking the behavior when the task list is empty
---

## 💬 Submit (Practice Only)

Practice how to create 2 GitHub Issues using this format:

**Title**: [e.g., "Deleting a task twice throws error"]

**Steps to Reproduce**:
1. Add a task
2. Delete the task
3. Try to delete it again

**Expected**: Should return a meaningful message  
**Actual**: Throws unhandled exception  
**Severity**: Medium

---

## 💡 Tip
This project simulates what you'll do in a real-world codebase:  
- Understand code  
- Write tests  
- Think like both a developer and a tester  

Enjoy the process!
