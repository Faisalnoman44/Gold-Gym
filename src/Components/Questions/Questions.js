import React from 'react';

const Questions = () => {
    return (
        <div>
            <div className='bg-sky-200 p-6'>
                <h1 className='text-3xl font-bold '>Q1:How Does React Works</h1>
                <p className='text-lg font-semibold'> ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
                <h3 className='text-2xl font-bold'>React Features</h3>
                <p className='text-lg font-semibold'>React has some core features that make it stand out from other JavaScript libraries. The following sections will introduce you to these features and explain how they contribute to mobile and web application development.</p>
                <h3 className='text-2xl font-bold'>JSX</h3>
                <p className='text-lg font-semibold'>JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structures.Meanwhile, the ReactDOM.render() function renders the React element on the Document Object Model (DOM) tree, describing the UI. JSX also helps combat Cross-Site Scripting (XSS) attacks. By default, React DOM converts values embedded in JSX to strings before rendering them. Consequently, third parties cannot inject extra code through user input unless it is explicitly written in the application.Later in the article, we’ll discuss JSX’s role in React component creation in more detail.
                </p>
                <h3 className='text-2xl font-bold'>Virtual DOM</h3>
                <p className='text-lg font-semibold'>The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree. Whenever there’s a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing.By making sure that UI manipulation only affects specific sections of the real DOM tree, rendering the updated version takes less time and uses fewer resources. The practice greatly benefits large projects with intense user interaction.</p>
                <h3 className='text-2xl font-bold'>Components and Props</h3>
                <p className='text-lg font-semibold'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
                <h3 className='text-2xl font-bold'>State Management</h3>
                <p className='text-lg font-semibold'>A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.State management refers to the practice of managing React application states. It includes storing data in third-party state management libraries and triggering the re-rendering process each time data is changed. A state management library facilitates communication and data sharing between React components. Several third-party state management libraries are available today, but Redux and Recoil are two of the most popular.ReduxThe Redux state management library has a centralized store, which keeps the state tree of an application predictable. The library also reduces data inconsistency by preventing two components from updating the application’s state simultaneously.Redux’s architecture supports error logging for easier debugging and has a strict code organization method, simplifying maintenance. Additionally, it features a large number of addons and is compatible with all UI layers.That said, Redux is rather complex and hence suboptimal for small applications with a single data source.Recoil Recoil is a JavaScript state management library released by Facebook. It employs pure functions called selectors to calculate data from updateable units of the state known as atoms. Multiple components can subscribe to the same atom and thus share a state.The use of atoms and selectors prevents redundant states, simplifies code, and eliminates excessive re-renders of React and any child components. Recoil is more suitable for beginners than Redux because its core concepts are considerably easier to grasp.</p>
                <h3 className='text-2xl font-bold'>Programmatic Navigation</h3>
                <p className='text-lg font-semibold'>Programmatic navigation refers to instances when lines of code create an action that redirects a user. Login and signup actions, for instance, programmatically navigate users to new pages.React Router, React’s standard library for routing, provides multiple ways of safe programmatic navigation between components without requiring the user to click on a link.Using a Redirect component is the primary method of programmatic navigation with history.push() being another approach.</p>


            </div>
            <div className='bg-sky-300 p-6'>
                <h1 className='text-3xl font-bold mb-3'>Q2:Difference between props and state</h1>
                <div className='lg:flex'>
                    <div className='w-1/2'>
                        <h3 className='text-2xl font-semibold mb-2'>Props</h3>
                        <div className='text-lg font-semibold mb-3'>
                            <p>1.The Data is passed from one component to another.</p>
                            <p>2.It is Immutable (cannot be modified).</p>
                            <p>3.Props can be used with state and functional components.</p>
                            <p>4.Props are read-only</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>State</h3>
                        <div className='text-lg font-semibold'>
                            <p>1.The Data is passed within the component only.</p>
                            <p>2.It is Mutable ( can be modified).</p>
                            <p>3.State can be used only with the state components/class component (Before 16.0).</p>
                            <p>4.State is both read and write.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-sky-400 p-6'>
                <h1 className='text-3xl font-bold mb-3'>Q3:useEffect uses beside API load Data</h1>
                <div className='text-lg font-semibold'>
                    <p>1.Running on state change: validating input field</p>
                    <p>2.Running on state change: live filtering</p>
                    <p>3.Running on state change: trigger animation on new array value</p>
                    <p>4.Running on props change: update paragraph list on fetched API data update</p>
                    <p>5.Running on props change: updating fetched API data to get BTC updated price</p>
                </div>
            </div>

        </div>

    );
};

export default Questions;