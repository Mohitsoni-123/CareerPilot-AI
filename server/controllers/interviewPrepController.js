// ==========================================
// INTERVIEW QUESTION BANK (auto-generated, complete for all roles/types/topics)
// ==========================================

const questionBank = {
  "Full Stack Developer": {
    "Technical Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "HR Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "Behavioral Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    }
  },
  "Frontend Developer": {
    "Technical Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "HR Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "Behavioral Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    }
  },
  "Backend Developer": {
    "Technical Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "HR Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "Behavioral Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    }
  },
  "Software Developer": {
    "Technical Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "HR Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "Behavioral Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    }
  },
  "Data Analyst": {
    "Technical Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "HR Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    },
    "Behavioral Interview": {
      "JavaScript": [
        {
          "question": "What is the difference between let, const, and var in JavaScript?",
          "answer": "var is function-scoped, while let and const are block-scoped. let allows reassignment, whereas const does not allow reassignment after initialization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between == and === in JavaScript?",
          "answer": "== compares values after type conversion, while === compares both value and type without type conversion.",
          "difficulty": "Easy"
        },
        {
          "question": "What is hoisting in JavaScript?",
          "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase. Function declarations are fully hoisted, while let and const remain in the temporal dead zone until initialized.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a closure in JavaScript?",
          "answer": "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between null and undefined?",
          "answer": "undefined usually means a variable has been declared but has not been assigned a value. null is an intentional assignment that represents the absence of a value.",
          "difficulty": "Easy"
        },
        {
          "question": "What are primitive data types in JavaScript?",
          "answer": "The primitive data types in JavaScript are String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between primitive and reference data types?",
          "answer": "Primitive values are stored and copied as individual values, while objects and arrays are reference types where variables hold references to the underlying data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the spread operator in JavaScript?",
          "answer": "The spread operator (...) expands elements of an iterable such as an array or properties of an object. It is commonly used for copying and merging arrays or objects.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the rest operator in JavaScript?",
          "answer": "The rest operator (...) collects multiple remaining arguments into an array. It is commonly used in function parameters and destructuring.",
          "difficulty": "Easy"
        },
        {
          "question": "What are arrow functions?",
          "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not have their own this context and instead use this from their surrounding lexical scope.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the this keyword in JavaScript?",
          "answer": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called. Arrow functions inherit this from their surrounding scope.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between map(), filter(), and reduce()?",
          "answer": "map() creates a new array by transforming each element, filter() creates a new array containing elements that satisfy a condition, and reduce() combines array elements into a single result.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event bubbling in JavaScript?",
          "answer": "Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements.",
          "difficulty": "Medium"
        },
        {
          "question": "What is event delegation?",
          "answer": "Event delegation is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements using event bubbling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between synchronous and asynchronous JavaScript?",
          "answer": "Synchronous code executes one operation at a time and waits for each operation to finish. Asynchronous code allows certain operations to run without blocking the execution of other code.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Promise in JavaScript?",
          "answer": "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is async/await in JavaScript?",
          "answer": "async/await provides a cleaner syntax for working with Promises. An async function returns a Promise, and await pauses execution inside that function until the Promise settles.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the JavaScript event loop?",
          "answer": "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues and moves callbacks to the stack when it is available.",
          "difficulty": "Medium"
        },
        {
          "question": "What is debouncing in JavaScript?",
          "answer": "Debouncing delays the execution of a function until a specified amount of time has passed since the last event. It is commonly used for search inputs and resize events.",
          "difficulty": "Medium"
        },
        {
          "question": "What is throttling in JavaScript?",
          "answer": "Throttling limits how frequently a function can execute within a specific time interval. It is commonly used for scroll, mouse movement, and resize events.",
          "difficulty": "Medium"
        }
      ],
      "React.js": [
        {
          "question": "What is React and why is it used?",
          "answer": "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React components?",
          "answer": "Components are reusable and independent pieces of UI in React. They can be functional or class-based, although functional components are commonly used in modern React.",
          "difficulty": "Easy"
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code. JSX is converted into JavaScript that React can understand.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Virtual DOM?",
          "answer": "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and updated Virtual DOM and efficiently updates only the required parts of the real DOM.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between props and state?",
          "answer": "Props are read-only data passed from a parent component to a child component. State is internal data managed by a component and can change over time.",
          "difficulty": "Easy"
        },
        {
          "question": "What are React Hooks?",
          "answer": "Hooks are functions that allow functional components to use React features such as state and lifecycle behavior. Common hooks include useState, useEffect, useContext, and useRef.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useState in React?",
          "answer": "useState is a React Hook that allows functional components to create and manage state. It returns the current state value and a function used to update that state.",
          "difficulty": "Easy"
        },
        {
          "question": "What is useEffect in React?",
          "answer": "useEffect is a React Hook used to perform side effects in functional components, such as API calls, subscriptions, timers, or updating the document title.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the purpose of the dependency array in useEffect?",
          "answer": "The dependency array controls when the useEffect callback runs. An empty array runs the effect once after the initial render, while dependencies cause it to run when those values change.",
          "difficulty": "Medium"
        },
        {
          "question": "What is conditional rendering in React?",
          "answer": "Conditional rendering means displaying different UI elements based on a condition. Developers commonly use if statements, ternary operators, or logical && operators.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a key in React lists?",
          "answer": "A key is a unique identifier assigned to elements when rendering a list. React uses keys to efficiently identify which items have changed, been added, or removed.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we not use array index as a key in React?",
          "answer": "Using an array index as a key can cause incorrect UI behavior when list items are added, removed, or reordered. A stable and unique identifier is generally preferred.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library used for handling client-side routing in React applications. It allows users to navigate between different pages or views without completely reloading the browser.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a controlled component in React?",
          "answer": "A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated through event handlers.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an uncontrolled component in React?",
          "answer": "An uncontrolled component manages its own form data through the DOM instead of React state. React refs can be used to access the current value of the element.",
          "difficulty": "Medium"
        },
        {
          "question": "What is lifting state up in React?",
          "answer": "Lifting state up means moving shared state to the closest common parent component so that multiple child components can access and update the same data through props.",
          "difficulty": "Medium"
        },
        {
          "question": "What is prop drilling?",
          "answer": "Prop drilling occurs when data is passed through multiple levels of components using props, even when intermediate components do not need the data themselves. React Context or state management libraries can help avoid excessive prop drilling.",
          "difficulty": "Medium"
        },
        {
          "question": "What is React Context API?",
          "answer": "The Context API allows data to be shared across multiple components without passing props manually through every level of the component tree. It is commonly used for themes, authentication, and global settings.",
          "difficulty": "Medium"
        },
        {
          "question": "What is useMemo in React?",
          "answer": "useMemo is a React Hook used to memoize the result of an expensive calculation. It recalculates the value only when its dependencies change.",
          "difficulty": "Hard"
        },
        {
          "question": "What is useCallback in React?",
          "answer": "useCallback is a React Hook that memoizes a function reference. It can help prevent unnecessary re-renders of child components when functions are passed as props.",
          "difficulty": "Hard"
        }
      ],
      "Node.js": [
        {
          "question": "What is Node.js?",
          "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for building backend applications and APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "Why is Node.js popular for backend development?",
          "answer": "Node.js is popular because it uses JavaScript on the server, has a large npm ecosystem, supports asynchronous non-blocking operations, and is suitable for building scalable network applications.",
          "difficulty": "Easy"
        },
        {
          "question": "What is npm?",
          "answer": "npm stands for Node Package Manager. It is used to install, manage, and share JavaScript and Node.js packages and dependencies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the package.json file?",
          "answer": "package.json is a configuration file for a Node.js project. It contains project information, dependencies, scripts, and other configuration details.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between dependencies and devDependencies?",
          "answer": "dependencies are packages required to run the application in production, while devDependencies are packages mainly required during development, testing, or building the application.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the Node.js event loop?",
          "answer": "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It continuously checks for completed asynchronous tasks and executes their callbacks when the call stack is available.",
          "difficulty": "Medium"
        },
        {
          "question": "Is Node.js single-threaded?",
          "answer": "Node.js executes JavaScript code on a single main thread, but it can handle asynchronous operations using the event loop and background system or libuv threads for certain tasks.",
          "difficulty": "Medium"
        },
        {
          "question": "What is asynchronous programming in Node.js?",
          "answer": "Asynchronous programming allows Node.js to start an operation and continue executing other code without waiting for that operation to finish. Callbacks, Promises, and async/await are commonly used for asynchronous programming.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Express.js?",
          "answer": "Express.js is a lightweight web framework for Node.js. It provides features for creating servers, handling HTTP requests, defining routes, using middleware, and building REST APIs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is middleware in Express.js?",
          "answer": "Middleware is a function that runs during the request-response cycle. It can access the request and response objects, perform operations, modify data, or pass control to the next middleware using next().",
          "difficulty": "Easy"
        },
        {
          "question": "What is a REST API?",
          "answer": "A REST API is an API architecture that allows clients and servers to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between GET and POST requests?",
          "answer": "GET requests are generally used to retrieve data from a server, while POST requests are generally used to send data to the server to create a new resource or perform an operation.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is generally used to replace or completely update a resource, while PATCH is used to partially update specific fields of an existing resource.",
          "difficulty": "Medium"
        },
        {
          "question": "What is routing in Express.js?",
          "answer": "Routing defines how an application responds to requests for specific URLs and HTTP methods. Express.js allows developers to create routes using methods such as app.get(), app.post(), app.put(), and app.delete().",
          "difficulty": "Easy"
        },
        {
          "question": "What is req and res in Express.js?",
          "answer": "req represents the incoming HTTP request and contains information such as parameters, query data, headers, and body. res represents the HTTP response and is used to send data back to the client.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.params in Express.js?",
          "answer": "req.params contains route parameters defined in the URL. For example, in /users/:id, the value of :id can be accessed using req.params.id.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.query in Express.js?",
          "answer": "req.query contains query string parameters from the URL. For example, in /users?role=student, the value can be accessed using req.query.role.",
          "difficulty": "Easy"
        },
        {
          "question": "What is req.body in Express.js?",
          "answer": "req.body contains data sent by the client in the request body. Express middleware such as express.json() is required to parse JSON request bodies.",
          "difficulty": "Easy"
        },
        {
          "question": "What is CORS?",
          "answer": "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web application from one origin can request resources from another origin.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between authentication and authorization?",
          "answer": "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
          "difficulty": "Medium"
        }
      ],
      "MongoDB": [
        {
          "question": "What is MongoDB?",
          "answer": "MongoDB is a NoSQL, document-oriented database that stores data in flexible JSON-like BSON documents instead of traditional rows and tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a document in MongoDB?",
          "answer": "A document is a single record in MongoDB. It is stored in BSON format and is similar to a row in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a collection in MongoDB?",
          "answer": "A collection is a group of MongoDB documents. It is similar to a table in a relational database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between MongoDB and SQL databases?",
          "answer": "SQL databases store structured data in tables with predefined schemas, while MongoDB stores data as flexible documents and collections. MongoDB is generally schema-flexible and supports horizontal scaling.",
          "difficulty": "Easy"
        },
        {
          "question": "What is BSON in MongoDB?",
          "answer": "BSON stands for Binary JSON. It is the binary-encoded format used by MongoDB to store documents and supports additional data types that JSON does not natively support.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the _id field in MongoDB?",
          "answer": "The _id field uniquely identifies each document in a MongoDB collection. MongoDB automatically creates an ObjectId for the _id field if one is not provided.",
          "difficulty": "Easy"
        },
        {
          "question": "What is ObjectId in MongoDB?",
          "answer": "ObjectId is a commonly used unique identifier type in MongoDB. It contains information derived from a timestamp and other values to help create unique document IDs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Mongoose?",
          "answer": "Mongoose is an Object Data Modeling library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and convenient methods for interacting with MongoDB.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Schema?",
          "answer": "A Mongoose Schema defines the structure and rules for documents in a MongoDB collection. It can define field types, required fields, defaults, validation, and other options.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Mongoose Model?",
          "answer": "A Mongoose Model is created from a schema and provides an interface for interacting with a MongoDB collection. It can be used to create, find, update, and delete documents.",
          "difficulty": "Easy"
        },
        {
          "question": "What is indexing in MongoDB?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing MongoDB to locate documents more efficiently. However, indexes require additional storage and can affect write performance.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between find() and findOne()?",
          "answer": "find() returns a cursor containing multiple matching documents, while findOne() returns the first document that matches the specified query.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between updateOne() and updateMany()?",
          "answer": "updateOne() updates the first document that matches the filter, while updateMany() updates all documents that match the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between deleteOne() and deleteMany()?",
          "answer": "deleteOne() removes the first document matching the filter, while deleteMany() removes all documents matching the filter.",
          "difficulty": "Easy"
        },
        {
          "question": "What is MongoDB aggregation?",
          "answer": "Aggregation is a framework used to process and transform documents and calculate results. It uses stages such as $match, $group, $sort, $project, and $lookup.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $match stage in MongoDB aggregation?",
          "answer": "$match filters documents based on specified conditions. It is similar to the WHERE clause in SQL and is often placed early in an aggregation pipeline to reduce the amount of data processed.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the $lookup stage in MongoDB?",
          "answer": "$lookup performs a left outer join-like operation between documents in one collection and documents in another collection. It is commonly used to combine related data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is embedding in MongoDB?",
          "answer": "Embedding means storing related data directly inside a document. It can improve read performance when related data is frequently accessed together.",
          "difficulty": "Medium"
        },
        {
          "question": "What is referencing in MongoDB?",
          "answer": "Referencing means storing a reference or ID of another document instead of embedding the entire related data. It is useful when related data is large, shared, or frequently updated independently.",
          "difficulty": "Medium"
        },
        {
          "question": "What are transactions in MongoDB?",
          "answer": "Transactions allow multiple database operations to be executed as a single atomic unit. If an operation fails, the transaction can be rolled back so that partial changes are not committed.",
          "difficulty": "Hard"
        }
      ],
      "DSA": [
        {
          "question": "What is a data structure?",
          "answer": "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step procedure used to solve a problem or perform a specific task.",
          "difficulty": "Easy"
        },
        {
          "question": "What is Big O notation?",
          "answer": "Big O notation describes the upper bound of an algorithm's time or space complexity as the input size grows.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the time complexity of binary search?",
          "answer": "The time complexity of binary search is O(log n) because the search space is divided into half after every step. Binary search requires the data to be sorted.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between an array and a linked list?",
          "answer": "Arrays store elements in contiguous memory and provide fast random access using indexes. Linked lists use nodes connected by pointers and allow efficient insertion and deletion at known positions.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a stack?",
          "answer": "A stack is a linear data structure that follows the LIFO principle, meaning Last In, First Out. Common operations include push, pop, and peek.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a queue?",
          "answer": "A queue is a linear data structure that follows the FIFO principle, meaning First In, First Out. Common operations include enqueue and dequeue.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between a stack and a queue?",
          "answer": "A stack follows LIFO, where the last inserted element is removed first. A queue follows FIFO, where the first inserted element is removed first.",
          "difficulty": "Easy"
        },
        {
          "question": "What is recursion?",
          "answer": "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base condition is required to stop the recursive calls.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between linear search and binary search?",
          "answer": "Linear search checks elements one by one and has O(n) time complexity. Binary search repeatedly divides a sorted search space in half and has O(log n) time complexity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a linked list?",
          "answer": "A linked list is a linear data structure made up of nodes. Each node contains data and a reference to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a binary tree?",
          "answer": "A binary tree is a tree data structure in which each node can have at most two children, commonly called the left child and right child.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a Binary Search Tree?",
          "answer": "A Binary Search Tree, or BST, is a binary tree where values smaller than a node are placed in the left subtree and larger values are placed in the right subtree.",
          "difficulty": "Medium"
        },
        {
          "question": "What is tree traversal?",
          "answer": "Tree traversal is the process of visiting all nodes in a tree. Common traversal methods are inorder, preorder, postorder, and level-order traversal.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a graph in data structures?",
          "answer": "A graph is a non-linear data structure consisting of vertices and edges that represent connections between them.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between BFS and DFS?",
          "answer": "BFS, or Breadth-First Search, explores nodes level by level and commonly uses a queue. DFS, or Depth-First Search, explores as far as possible along a path before backtracking and commonly uses recursion or a stack.",
          "difficulty": "Medium"
        },
        {
          "question": "What is hashing?",
          "answer": "Hashing is a technique that converts a key into an index using a hash function, allowing efficient insertion, deletion, and searching in structures such as hash tables.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a hash collision?",
          "answer": "A hash collision occurs when two different keys produce the same hash value or index. Common techniques to handle collisions include chaining and open addressing.",
          "difficulty": "Medium"
        },
        {
          "question": "What is dynamic programming?",
          "answer": "Dynamic programming is an optimization technique used to solve problems with overlapping subproblems and optimal substructure. It stores previously calculated results to avoid repeated computation.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between sorting and searching?",
          "answer": "Sorting arranges data in a specific order, such as ascending or descending. Searching is the process of finding a specific element or value within a data structure.",
          "difficulty": "Easy"
        }
      ],
      "DBMS": [
        {
          "question": "What is DBMS?",
          "answer": "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, update, and manage data in a database.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be stored, accessed, managed, and updated efficiently.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a primary key?",
          "answer": "A primary key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a foreign key?",
          "answer": "A foreign key is a field that creates a relationship between two tables by referencing the primary key of another table.",
          "difficulty": "Easy"
        },
        {
          "question": "What is normalization in DBMS?",
          "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data consistency and integrity.",
          "difficulty": "Easy"
        },
        {
          "question": "What is denormalization?",
          "answer": "Denormalization is the process of intentionally adding redundant data to a database to improve read performance and reduce the need for complex joins.",
          "difficulty": "Medium"
        },
        {
          "question": "What is SQL?",
          "answer": "SQL stands for Structured Query Language. It is used to communicate with relational databases to create, retrieve, update, and delete data.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between SQL and NoSQL databases?",
          "answer": "SQL databases store structured data in tables and typically use fixed schemas. NoSQL databases can store data in flexible formats such as documents, key-value pairs, graphs, or columns.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a JOIN in SQL?",
          "answer": "A JOIN is used to combine rows from two or more tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values when no match exists.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an index in a database?",
          "answer": "An index is a data structure that improves the speed of database queries by allowing the database to find records more efficiently. However, indexes require additional storage and can slow down write operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a unique key?",
          "answer": "A unique key ensures that all values in a column are unique. Unlike a primary key, a table can have multiple unique keys, and depending on the database system, a unique key may allow NULL values.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a composite key?",
          "answer": "A composite key is a key made up of two or more columns that together uniquely identify a record in a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What are ACID properties?",
          "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a transaction in DBMS?",
          "answer": "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It should either complete successfully or be rolled back.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between DELETE, DROP, and TRUNCATE?",
          "answer": "DELETE removes selected rows and can use a WHERE condition. TRUNCATE removes all rows from a table efficiently. DROP removes the entire database object, such as a table.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a view in SQL?",
          "answer": "A view is a virtual table created from the result of a SQL query. It does not normally store the actual data separately and can simplify complex queries or restrict access to certain data.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a stored procedure?",
          "answer": "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed when needed. It can accept parameters and perform multiple operations.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a deadlock in DBMS?",
          "answer": "A deadlock occurs when two or more transactions wait for resources held by each other, causing them to remain blocked indefinitely unless the database system takes action.",
          "difficulty": "Hard"
        },
        {
          "question": "What is data redundancy?",
          "answer": "Data redundancy occurs when the same data is unnecessarily stored in multiple places. It can increase storage usage and cause data inconsistency if copies are not updated correctly.",
          "difficulty": "Easy"
        }
      ],
      "OOPs": [
        {
          "question": "What is OOP?",
          "answer": "OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes software around objects containing data and methods. The main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What are the four main principles of OOP?",
          "answer": "The four main principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
          "difficulty": "Easy"
        },
        {
          "question": "What is a class?",
          "answer": "A class is a blueprint or template used to create objects. It defines the properties and behaviors that objects created from the class can have.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an object?",
          "answer": "An object is an instance of a class. It contains data represented by properties and behavior represented by methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is encapsulation?",
          "answer": "Encapsulation is the concept of bundling data and methods together inside a class and controlling access to the internal data using access modifiers or controlled methods.",
          "difficulty": "Easy"
        },
        {
          "question": "What is abstraction?",
          "answer": "Abstraction means hiding unnecessary implementation details and exposing only the essential functionality to the user.",
          "difficulty": "Easy"
        },
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to acquire properties and methods from another class. It promotes code reuse and creates a parent-child relationship between classes.",
          "difficulty": "Easy"
        },
        {
          "question": "What is polymorphism?",
          "answer": "Polymorphism means one interface or method can have different implementations. It allows the same operation to behave differently depending on the object or context.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overloading?",
          "answer": "Method overloading occurs when multiple methods have the same name but different parameters. It is commonly used to perform similar operations with different inputs.",
          "difficulty": "Medium"
        },
        {
          "question": "What is method overriding?",
          "answer": "Method overriding occurs when a child class provides its own implementation of a method that is already defined in its parent class.",
          "difficulty": "Medium"
        },
        {
          "question": "What is a constructor?",
          "answer": "A constructor is a special method that is automatically called when an object is created. It is commonly used to initialize the object's properties.",
          "difficulty": "Easy"
        },
        {
          "question": "What is an access modifier?",
          "answer": "An access modifier controls the visibility and accessibility of class members. Common access modifiers include public, private, and protected.",
          "difficulty": "Easy"
        },
        {
          "question": "What is the difference between public, private, and protected?",
          "answer": "Public members can generally be accessed from anywhere. Private members are accessible only within the class. Protected members are accessible within the class and its derived classes.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an abstract class?",
          "answer": "An abstract class is a class designed to be inherited rather than directly instantiated. It can contain abstract methods that derived classes must implement.",
          "difficulty": "Medium"
        },
        {
          "question": "What is an interface?",
          "answer": "An interface defines a contract that specifies methods or behaviors that implementing classes must provide. It helps achieve abstraction and supports flexible software design.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between an abstract class and an interface?",
          "answer": "An abstract class can contain both implemented and abstract methods and can maintain state. An interface primarily defines a contract that implementing classes must follow. The exact capabilities depend on the programming language.",
          "difficulty": "Medium"
        },
        {
          "question": "What is multiple inheritance?",
          "answer": "Multiple inheritance occurs when a class inherits features from more than one parent class. Some languages support it directly, while others use interfaces or other mechanisms to achieve similar behavior.",
          "difficulty": "Medium"
        },
        {
          "question": "What is the difference between composition and inheritance?",
          "answer": "Inheritance represents an 'is-a' relationship, while composition represents a 'has-a' relationship. Composition combines objects to build functionality and often provides more flexibility and lower coupling.",
          "difficulty": "Hard"
        },
        {
          "question": "What is coupling in OOP?",
          "answer": "Coupling refers to the level of dependency between different classes or modules. Low coupling is generally preferred because it makes software easier to maintain, test, and modify.",
          "difficulty": "Medium"
        },
        {
          "question": "What is cohesion in OOP?",
          "answer": "Cohesion describes how closely related the responsibilities of a class or module are. High cohesion is preferred because a class should ideally focus on a clear and specific responsibility.",
          "difficulty": "Medium"
        }
      ],
      "HR Questions": [
        {
          "question": "Tell me about yourself.",
          "answer": "My name is Mohit Soni, and I am currently pursuing a B.Tech in Computer Science Engineering from JECRC University, Jaipur. I have hands-on experience in Full Stack Web Development using the MERN stack, along with skills in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have worked on projects like an AI-powered Resume Builder and AI Chat Application, where I integrated the Gemini API. I have also completed a web development internship where I worked on real-world website development and responsive design. I have solved 250+ DSA problems on LeetCode, which has improved my problem-solving skills. My short-term goal is to start my career as a Software or Full Stack Developer, and my long-term goal is to become a skilled software engineer and build impactful applications.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we hire you?",
          "answer": "You should hire me because I have a strong foundation in programming, web development, and problem-solving. I have practical experience building full-stack applications using the MERN stack and integrating AI APIs into projects. I have also solved 250+ DSA problems, which has helped me improve my logical thinking and coding skills. I am a quick learner, adaptable, and always willing to learn new technologies. As a fresher, I am highly motivated to contribute to the team, take responsibility, and continuously improve myself.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your strengths?",
          "answer": "My main strengths are problem-solving, quick learning, consistency, and adaptability. I enjoy solving coding problems and have solved 250+ DSA problems, which has improved my logical thinking. I am also comfortable learning new technologies and applying them in projects. I believe my ability to learn quickly and my willingness to take on challenges will help me contribute effectively to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "What is your biggest weakness?",
          "answer": "One of my weaknesses is that sometimes I spend too much time trying to make my work perfect. I have been improving this by setting clear priorities and deadlines for my tasks. I am learning to focus on delivering quality work within the required time instead of spending too much time on small details.",
          "difficulty": "Easy"
        },
        {
          "question": "Why do you want to join our company?",
          "answer": "I want to join your company because I believe it will provide me with a good environment to apply my technical skills and learn from experienced professionals. I am looking for an opportunity where I can work on real-world projects, improve my development skills, and contribute to the team. I am also interested in growing with the organization and taking on new challenges.",
          "difficulty": "Easy"
        },
        {
          "question": "Where do you see yourself in five years?",
          "answer": "In the next five years, I see myself as a skilled software engineer with strong expertise in full-stack development and modern technologies. I want to work on challenging projects, take more responsibilities, and contribute to important business solutions. I also want to continuously improve my technical and leadership skills and become someone my team can rely on.",
          "difficulty": "Easy"
        },
        {
          "question": "Why did you choose Computer Science Engineering?",
          "answer": "I chose Computer Science Engineering because I have always been interested in technology and problem-solving. I enjoy understanding how software works and building applications that can solve real-world problems. During my studies, I became more interested in programming, web development, and software engineering, which motivated me to pursue a career in the technology industry.",
          "difficulty": "Easy"
        },
        {
          "question": "What are your career goals?",
          "answer": "My short-term goal is to start my career as a Software Developer or Full Stack Developer, where I can apply my skills and gain real-world industry experience. My long-term goal is to become a skilled software engineer who can design and develop scalable applications, take ownership of challenging projects, and contribute meaningfully to the organization.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your projects.",
          "answer": "I have worked on several projects using modern web technologies. One of my major projects is an AI-powered Resume Builder built using the MERN stack, where I integrated the Gemini API to provide AI-based resume features. I have also worked on an AI Chat Application using React, Node.js, Express.js, MongoDB, and Gemini API. These projects helped me gain practical experience in frontend development, backend APIs, database management, authentication, and AI integration.",
          "difficulty": "Easy"
        },
        {
          "question": "Tell me about your internship experience.",
          "answer": "During my web development internship at UDAAN Society, I worked on real-world website development tasks. I contributed to developing responsive web pages and improving the overall user experience. I also collaborated with team members and worked on assigned tasks according to project requirements. This experience helped me understand teamwork, professional development practices, and how to work on real-world projects.",
          "difficulty": "Easy"
        },
        {
          "question": "What was the biggest challenge you faced in a project?",
          "answer": "One of the biggest challenges I faced was integrating AI functionality into my Resume Builder project. I had to understand how to communicate with the Gemini API, handle API responses, and integrate the generated content into the application properly. I solved the problem by reading the documentation, testing different approaches, and debugging errors step by step. This experience improved my debugging skills and taught me how to integrate third-party APIs into real-world applications.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle pressure and deadlines?",
          "answer": "I handle pressure by staying calm and breaking the work into smaller tasks. First, I understand the requirements and prioritize the most important tasks. Then, I create a simple plan and focus on completing each task within the deadline. If I face any issue that may affect the deadline, I try to solve it quickly and communicate with the team when necessary.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you handle failure?",
          "answer": "I consider failure a learning opportunity. When something does not work, I try to understand the reason behind it instead of getting discouraged. I analyze my mistakes, learn from them, and make sure I do not repeat them. For example, while working on projects, I have faced many technical errors, but debugging those errors has helped me improve my development and problem-solving skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Are you a team player?",
          "answer": "Yes, I consider myself a team player. I believe good teamwork requires communication, respect, and responsibility. I am comfortable sharing my ideas, listening to others, and helping teammates when needed. During my internship and academic projects, I learned that working together and communicating properly can help the team achieve better results.",
          "difficulty": "Easy"
        },
        {
          "question": "How do you handle conflicts with teammates?",
          "answer": "If I have a conflict with a teammate, I first try to understand their point of view and listen carefully. I believe the focus should be on solving the problem rather than proving who is right. I communicate respectfully, discuss the available options, and try to find a solution that is best for the project and the team.",
          "difficulty": "Medium"
        },
        {
          "question": "How do you keep yourself motivated?",
          "answer": "I stay motivated by setting small goals and continuously learning new things. I enjoy coding, solving DSA problems, and building projects because I can see my progress through practical results. Whenever I face a difficult problem, I consider it a learning opportunity and try to solve it step by step. This mindset helps me stay consistent and motivated.",
          "difficulty": "Easy"
        },
        {
          "question": "What do you know about our company?",
          "answer": "I have researched your company and understand that it focuses on delivering valuable products and services to its customers. I am particularly interested in the company's work culture, technology environment, and growth opportunities. I believe joining your organization would give me an opportunity to learn from experienced professionals, work on real-world projects, and contribute using my technical skills.",
          "difficulty": "Easy"
        },
        {
          "question": "Why should we choose you over other candidates?",
          "answer": "I believe you should choose me because I bring a combination of technical knowledge, practical project experience, and a strong willingness to learn. I have experience with the MERN stack, AI API integration, and problem-solving through DSA. I understand that I am a fresher and still have a lot to learn, but I am adaptable, hardworking, and committed to improving my skills. I am confident that with the right opportunity, I can learn quickly and become a valuable member of the team.",
          "difficulty": "Medium"
        },
        {
          "question": "Are you willing to relocate or work from another location?",
          "answer": "Yes, I am open to relocation and working from another location if the opportunity requires it. I believe that working in a new environment can provide valuable professional and personal learning experiences. My priority is to get a good opportunity where I can learn, contribute, and grow in my career.",
          "difficulty": "Easy"
        },
        {
          "question": "Do you have any questions for us?",
          "answer": "Yes, I would like to know more about the team I would be working with and the technologies commonly used in this role. I would also like to know what the expectations are for a fresher during the first few months and what learning and growth opportunities are available within the organization.",
          "difficulty": "Easy"
        }
      ]
    }
  }
};

// ==========================================
// GET INTERVIEW QUESTIONS
// ==========================================

export const getInterviewQuestions = async (req, res) => {
  try {
    const { role, interviewType, topic } = req.query;

    if (!role) {
      return res.status(400).json({ success: false, message: "Role is required" });
    }
    if (!interviewType) {
      return res.status(400).json({ success: false, message: "Interview type is required" });
    }
    if (!topic) {
      return res.status(400).json({ success: false, message: "Topic is required" });
    }

    const questions = questionBank?.[role]?.[interviewType]?.[topic];

    if (!questions || questions.length === 0) {
      return res.status(404).json({ success: false, message: "No questions found for the selected options" });
    }

    res.status(200).json({
      success: true,
      role,
      interviewType,
      topic,
      totalQuestions: questions.length,
      questions,
    });
  } catch (error) {
    console.error("Get Interview Questions Error:", error);
    res.status(500).json({ success: false, message: "Failed to get interview questions" });
  }
};

// ==========================================
// GET AVAILABLE TOPICS
// ==========================================

export const getInterviewTopics = async (req, res) => {
  try {
    const { role, interviewType } = req.query;

    if (!role) {
      return res.status(400).json({ success: false, message: "Role is required" });
    }
    if (!interviewType) {
      return res.status(400).json({ success: false, message: "Interview type is required" });
    }

    const topics = questionBank?.[role]?.[interviewType];

    if (!topics) {
      return res.status(404).json({ success: false, message: "No topics found for the selected options" });
    }

    res.status(200).json({
      success: true,
      role,
      interviewType,
      topics: Object.keys(topics),
    });
  } catch (error) {
    console.error("Get Interview Topics Error:", error);
    res.status(500).json({ success: false, message: "Failed to get interview topics" });
  }
};