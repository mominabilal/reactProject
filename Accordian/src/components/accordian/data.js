const accordionData = [
  {
    id: 1,
    title: "What are React components?",
    content: "React components are reusable pieces of code that return JSX elements to be rendered to the page. They are the building blocks of React applications and can be either function components or class components. Components allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.",
    isExpanded: false
  },
  {
    id: 2,
    title: "What is JSX and why do we use it?",
    content: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to create and visualize the structure of React components. JSX gets compiled to regular JavaScript function calls and objects, specifically React.createElement() calls.",
    isExpanded: false
  },
  {
    id: 3,
    title: "How does state management work in React?",
    content: "State in React is a built-in object that stores property values that belong to a component. When state changes, the component re-renders. You can manage state using useState hook in functional components or this.state in class components. For complex applications, you might also use context API or external libraries like Redux.",
    isExpanded: false
  },
  {
    id: 4,
    title: "What are React hooks and their benefits?",
    content: "React hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, useContext, and useReducer. Hooks allow you to reuse stateful logic between components, make components easier to understand, and enable you to use React features without writing class components.",
    isExpanded: false
  }
];
export default accordionData;