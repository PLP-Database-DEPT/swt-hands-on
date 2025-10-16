# 🧪 Week 4 Lab: Test Design Techniques with a Bus Fare Calculator (Kenya Edition)

🎯 **Learning Objectives**

By the end of this lab, you will be able to:

- Apply four core test design techniques:  
  **Equivalence Partitioning (EP)**, **Boundary Value Analysis (BVA)**, **Decision Table Testing (DTT)**, and **State Transition Testing (STT)**.  
- Design structured test cases for real-world data inputs.  
- Document and reflect on the effectiveness of each technique.

---

## 📋 **What You’ll Need**

- 💻 VS Code with the **Live Server** extension  
- 🌐 Any browser (Chrome, Edge, or Firefox)  
- 📁 The provided file: `BusFareCalculator.html`  

> This activity is for class practice and **not graded**.

---

## 🧩 **Context**

You’ll explore test design techniques using a small **Bus Fare Calculator** web app that estimates fares between major Kenyan cities.  
The app intentionally contains a few hidden defects.  
Your goal is to design smart tests that uncover them — not to fix them.

---

## 🧪 **What You’ll Do**

### 1️⃣ Step 1: Run the Application
1. Open the `BusFareCalculator.html` file in VS Code.  
2. Right-click → **Open with Live Server**.  
3. Interact with the form using different combinations of **city**, **time**, **age**, and **passenger type**.  
4. Observe the fare output and any error messages.

---

### 2️⃣ Step 2: Equivalence Partitioning (EP)
Identify input classes that are considered **valid** and **invalid**.

| Input | Possible Partitions | Example Values (choose your own) | Expected Outcome (describe) |
|-------|---------------------|----------------------------------|-----------------------------|
| City |                     |                                  |                             |
| Time |                     |                                  |                             |
| Age  |                     |                                  |                             |
| Passenger Type |           |                                  |                             |

**Task:**  
- Define at least **two partitions** for each input field.  
- Test one value from each partition in the app.  
- Record observations in your `Test_Report_Summary.md`.

---

### 3️⃣ Step 3: Boundary Value Analysis (BVA)
Determine which input ranges have critical edge points and test just below, at, and just above those boundaries.

| Parameter | Boundary Range Identified | Test Values | What You Expect | What You Observed |
|------------|--------------------------|--------------|-----------------|-------------------|
|            |                          |              |                 |                   |

**Hint:** Focus on numeric or time-based inputs.

---

### 4️⃣ Step 4: Decision Table Testing (DTT)
Combine two or more input conditions and predict results before executing.

| Condition 1 | Condition 2 | Condition 3 | Expected Outcome | Actual Outcome |
|--------------|--------------|--------------|------------------|----------------|
|              |              |              |                  |                |

**Task:**  
- Build a small decision table (5–8 rows).  
- Include at least one case you believe will fail.  
- After testing, highlight mismatches between expected and actual outcomes.

---

### 5️⃣ Step 5: State Transition Testing (STT)
Map how the app behaves as users move between actions (input, calculate, error, reset, etc.).

1. Sketch or describe each **state** of the interface.  
2. Identify the **events** that move it from one state to another.  
3. Represent this in your report using **Mermaid** or a simple table:


```Mermaid
stateDiagram-v2
  [*] --> Start
  Start --> InputReady: user provides input
  InputReady --> ??? : (fill in your own transition)
  ??? --> ??? : (continue until reset)
```
### 6️⃣ Step 6: Reflection

In your `Test_Report_Summary.md`, briefly discuss:
- Which technique uncovered the most interesting defect?  
- Did any test behave differently than expected?  
- How did thinking in partitions or boundaries change the way you tested?  
- Which technique would you automate first and why?

---

## 🧠 **What You’ll Practice**

| Technique | Focus Area |
|------------|------------|
| Equivalence Partitioning | Identifying valid / invalid data sets |
| Boundary Value Analysis  | Detecting edge-related issues |
| Decision Table Testing   | Managing combinations of conditions |
| State Transition Testing | Observing behavior across user actions |

---

## 🧾 **Deliverable**

Submit a single file:  
**`Test_Report_Summary.md`** containing:
- Your EP, BVA, DTT, STT notes and tables  
- Short reflection (max ½ page)  

Screenshots are optional but helpful.

---

## ⚙️ **Optional Extension**

If time allows:
1. Try modifying one input validation rule in the JavaScript.  
2. Re-run your tests — which of your test cases now fail or pass?  
3. Explain how structured test design made that retesting easier.

---

## 🔗 **Additional Resources**

- [Equivalence Partitioning & BVA – Guru99](https://www.guru99.com/equivalence-partitioning-boundary-value-analysis.html)  
- [Decision Table Testing – GeeksforGeeks](https://www.geeksforgeeks.org/decision-table-testing-in-software-engineering/)  
- [State Transition Testing – Software Testing Help](https://www.softwaretestinghelp.com/state-transition-testing/)  
- [Mermaid Live Editor](https://mermaid.live)  

---

🧩 *Focus on process and reasoning — not on matching answers. There are no “official solutions.” Each group’s tables and observations should differ based on how you interpret and explore the app.*
