/*
⏳ This JavaScript file serves as a demonstration of basic asynchronous programming concepts in JavaScript.
It includes examples and explanations of how to use async functions, promises, and async/await syntax.
*/

// 📦 Example 1: Using a Promise to get a potentially big data while letting 
// the other parts of the program without waiting for potentially time
// consuming operation to finish
const fetchData = () => {
    return new Promise((resolve, reject) => {
        const wasOperationSuccessful = true
        setTimeout(() => {
            wasOperationSuccessful ?
                resolve("Data fetched successfully!") :
                reject("There was a problem while trying to fetch the data");
        }, 3000);
    });
};

// Using the function that returns a Promise with .then() syntax
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// ⏱ Example 2: Using async/await with a Promise
// async => makes a function return a promise
// await => makes an async function wait for a promise
// Everything after await is placed in an event queue
const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchDataAsync();

// 🚀 Example 3: Chaining promises with async/await
const fetchUserData = async () => {
    try {
        const userId = await getUserId();
        const userData = await getUserData(userId);
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
};

const getUserId = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 2000);
    });
};

const getUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John", age: 30 });
        }, 1500);
    });
};

fetchUserData();

// Tasks:
// 😎 Write an async function to simulate fetching user data from an API with a delay of 3 seconds.
// 📏 Write a promise-based function to perform a mathematical operation (e.g., add, subtract) with a delay of 2 seconds.
// 😄 Write an async function to make a network request using fetch API and handle the response.
// 🌈 Write a promise-based function to generate a random number between 1 and 10 with a delay of 1 second.
