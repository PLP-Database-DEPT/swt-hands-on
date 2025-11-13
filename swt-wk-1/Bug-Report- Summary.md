# 🐞 Bug Report Summary

## 🧾 Student Details
**Name:** Meseret Akalu  
**Cohort:** Software Test  
**Date:** October 25  

---

## ✅ Expected Behaviors
List 3 things the Weather Checker app is expected to do correctly:

1. When I add a city, it should display the city name (e.g., *Nairobi*).  
2. When I add the same city name again, it should display the city name with the current date.  
3. The weather details for each added city should be updated automatically when refreshed.  

---

## 🐛 Reported Bugs

### 🐞 BUG-001
**Title:** City name not displayed after adding  
**GitHub Link:** [https://github.com/PLP-Database-DEPT/swt-hands-on/tree/main/swt-wk-1](https://github.com/PLP-Database-DEPT/swt-hands-on/tree/main/swt-wk-1)  
**Requirement Affected:** Input Validation  
**Severity:** High  
**Summary:**  
When a city (e.g., *Nairobi*) is added, it does not display on the screen as expected. This affects usability since users cannot confirm if their input was successfully added.

---

### 🐞 BUG-002
**Title:** Duplicate city entries not showing with date  
**GitHub Link:** [https://github.com/PLP-Database-DEPT/swt-hands-on/tree/main/swt-wk-1](https://github.com/PLP-Database-DEPT/swt-hands-on/tree/main/swt-wk-1)  
**Requirement Affected:** Case Handling / UI Feedback  
**Severity:** Medium  
**Summary:**  
When adding the same city again, the app should display the city name with the current date, but it shows nothing or repeats the same entry without a timestamp. This confuses users when tracking updates.

---

### 🐞 BUG-003
**Title:** Weather data not updating automatically after refresh  
**GitHub Link:** [https://github.com/PLP-Database-DEPT/swt-hands-on/tree/main/swt-wk-1](https://github.com/PLP-Database-DEPT/swt-hands-on/tree/main/swt-wk-1)  
**Requirement Affected:** Data Refresh / API Handling  
**Severity:** Medium  
**Summary:**  
After refreshing the page, the weather information remains static and does not pull updated data from the API, which reduces the reliability of the displayed forecast.

---

## 💭 Reflection

During testing, I followed an exploratory approach — adding multiple cities, checking for UI updates, and verifying the display behavior after refresh.  
The process of identifying bugs was straightforward, but confirming backend issues without logs was a bit challenging.  
I now feel more confident in spotting, describing, and documenting bugs clearly for developers to reproduce and fix efficiently.
