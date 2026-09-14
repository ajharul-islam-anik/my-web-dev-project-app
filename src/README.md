***Dev Stack***

Dev Stack is a responsive React-based web application where users can explore different technologies, view their details, and add technologies to their own development stack.

 **** Features ******

1.Explore Technologies** — Browse technologies such as React, Vue.js, Svelte, Next.js, Node.js, PostgreSQL, Redis, TypeScript, Tailwind CSS, Docker, and more.
2.Build Your Stack** — Add technologies to a personal stack and see the selected technologies in one place.
3.Responsive & Clean UI** — A modern interface designed to work smoothly across desktop, tablet, and mobile screens.

Technologies Used

1.React.js
2.TypeScript
3.CSS
4.JSON — Used as the technology data source
5.Vite— Development/build tool







*******Ans to the q-no-************
React Questions & Answers



1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.
React uses JSX because it makes UI code easier to read and write.





2. What is the difference between props and state?
Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.






3. What does the useState hook do, and where did you use it in this project?
useState lets a React component store and update changing data.
In this project, it is used to keep track of the technologies selected in Your Stack. When a user clicks Add to Stack, the state is updated and the UI changes.







4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after a component renders.
In this project, it is used to load the technology data from the JSON file when the application starts. This lets the app get the product/technology data and display it on the page.





5. Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list.
It helps React understand which item was added, removed, or changed, so it can update the UI efficiently.







6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition.
In this project, when the stack is empty, the app shows an empty-stack message.





7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child using props.
The child can send information back by calling a callback function that the parent passes as a prop.

