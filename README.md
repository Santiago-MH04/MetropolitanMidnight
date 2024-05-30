# MetropolitanMidnight
Metropolitan Midnight is an intermediate project that gathers all the options for nightlife in the Aburrá Valley, and can create value by showing the broad entertainment options that can be found in our city, helping to transform the image Medellín has earned during the last years, and also creating jobs, which is amazing and such a great opportunity for us to be taken.

                                Important!!!!!
On the one hand, the command npm install most likely to work without any inconveniences if you run the command npm i both in chat and MetropoltanMidnight folders.
On the other hand, in order to deploy the application, the user must initialise the terminal using the following commands, preferently in different terminal profiles: 

    ---------- THE ORDER IS MANDATORY, OTHERWISE, IT WON'T WORK -------------------
    1. npx json-server ./public/data/database.json
    2. npm start

Metropolitan Midnight is a project that integrates various tools and libraries to create a cohesive development environment. This README explains the libraries used in this project, detailing their purposes and functionalities.

Libraries and Their Uses
Development Dependencies
@babel/core (^7.24.5)

Transforms modern JavaScript into a version compatible with older environments, enabling the use of the latest syntax and features.
@babel/node (^7.23.9)

Allows execution of Node.js scripts using Babel, facilitating the use of modern JavaScript features in a Node.js environment.
@babel/preset-env (^7.24.5)

Automatically selects Babel plugins and polyfills based on the target environments, ensuring compatibility with the latest JavaScript features.
concurrently (^8.2.2)

Runs multiple npm scripts at the same time, useful for handling several tasks concurrently, such as starting a server and building the front-end.
nodemon (^3.1.0)

Monitors for changes in source code and automatically restarts the Node.js server, enhancing development efficiency.
sass (^1.77.1)

A preprocessor scripting language that is interpreted or compiled into CSS, providing a more powerful and flexible way to write CSS.
vite (^5.2.11)

A build tool that aims to provide a faster and leaner development experience for modern web projects. It's particularly useful for its fast hot module replacement.
Production Dependencies
@popperjs/core (^2.11.8)

A library for managing poppers in web applications, used for tooltips, popovers, and similar elements.
bootstrap (^5.3.3)

A popular CSS framework that provides pre-designed components and utilities to create responsive and modern web interfaces.
bootstrap-icons (^1.11.3)

An icon library that works seamlessly with Bootstrap, providing a wide range of icons.
express (^4.19.2)

A web application framework for Node.js, designed for building web applications and APIs, known for its simplicity and flexibility.
google-fonts (^1.0.0)

A utility for embedding Google Fonts in web applications, providing easy access to a variety of font styles.
json-server (^1.0.0-beta.0)

A full fake REST API that can be used for prototyping and testing without setting up a real backend.
socket.io (^4.7.5)

A library that enables real-time, bidirectional, and event-based communication between web clients and servers, commonly used for applications like chat systems.
Scripts
start: Runs both start:intento-2 and dev:metropolitan concurrently.
start:intento-2: Uses nodemon and babel-node to run the server code with automatic restarts on file changes.
dev:metropolitan: Starts the Vite development server.
build:metropolitan: Builds the project using Vite.


chat:
in the functionality of the chat we can see that it works with a local database so it can only be deployed in a local environment unless the program is uploaded to the network, if you open it in several windows and enter as if they were different users you can see that the server automatically reads when a user connects or disconnects, it also reads if someone is already connected and does not allow them to connect in the database there are some profiles created that allow us to see this operation, the chat was developed from the backend so it has a different json package.this is a valid exception for a program in a professional environment to have two package. json.


The tasks management system used is Trello, and, the tasks assigned can be seen in here:
https://trello.com/b/vSUyapnC/metropolitan-midnight
