# React Q&A README

Answer to all questions asked

---

## 1. What is JSX, and why is it used?

**Answer:**  
JSX (JavaScript XML) is a syntax extension for javaScript that looks similar to Html. It allows us to write Html elements directly within JavaScript.  

**Why it’s used:**  
- Makes it easier to create React components visually.  
- Improves readability and makes more reusable code. 
- Allows embedding JavaScript expressions inside Html-like code.


## 2. What is the difference between State and Props?

**Answer:**  
In state, data is locally managed within the component. But for props, data is passed from parent to child component. 
For state, it can be changed within the component but for props it's read only, data can't be mutated.
State's purpose is to manage dynamic data in a component, Prop's purpose is to pass the data and event handler down to the components


## 3. What is the useState hook, and how does it work? 

**Answer:**
useState is a react hook. It let's us add state to functional component. It returns an array with two items : the current state and a function to update it. 
When the function is used to update the state, it triggers a rerender which update the ui.


## How can you share state between components in React?

**Answer**
Lift state up : Move the state closest component to parent and then pass it down as props to child components
Context Api : By creating a context, we can pass data without prop drilling
State management libraries : Using state management libraries like Redux, Zustand we can easily pass state.

## How is event handling done in React?

**Answer** 
For event handling we use camelCase syntax. We pass a function as the event handler. 
