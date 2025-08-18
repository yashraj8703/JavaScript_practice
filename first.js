// Importing required modules
const { log } = require("console");
const express = require("express");
const http = require("http");

const app = express();

/* 
---------------------------------------------------------------------------------
SECTION 1: Wrapper Functions (Validation Logic without Middleware)
---------------------------------------------------------------------------------
These are simple "utility functions" that validate user input.
They don’t directly interact with Express, they just return true/false.
This approach is less scalable compared to middleware because each route
would have to manually call them and handle responses.
*/
function validator(username, password) {
  if (username != "yash" && password != 122) {
    // authentication fails
    return false;
  } else return true;
}

function kidneyChecker(kidneyId) {
  if (kidneyId != 1 && kidneyId != 3) {
    // validation fails
    return false;
  } else return true;
}

// Example route using wrapper functions (NOT middleware yet)
app.get("/", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.query.username;
  const password = req.query.password;

  // Check username/password
  if (!validator(username, password)) {
    res.status(403).json({
      msg: "validation failed",
    });
  }

  // Check kidneyId
  if (!kidneyChecker(kidneyId)) {
    res.status(403).json({
      msg: "kidney checker failed",
    });
  }

  res.send("passed all things");
});

/* 
---------------------------------------------------------------------------------
SECTION 2: Middleware
---------------------------------------------------------------------------------
Middleware in Express is a function that sits in between the request
and the response. It can:
  - Access request and response objects
  - Perform validations/logging/authentication
  - Call `next()` to pass control to the next middleware/route
  - Or stop the request by sending a response

Middleware is more modular and reusable compared to wrapper functions.
*/

// Attach custom middleware globally: requestMiddleware runs for EVERY route
app.use(requestMiddleware); 

// Middleware to validate username & password
function validatorMiddleware(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;
  if (username != "yash" && password != 122) {
    res.status(403).json({
      msg: "Validation failed",
    });
    return; // stop execution
  }
  next(); // move to next middleware/handler
}

// Middleware to validate kidneyId
function kidneyCheckerMiddleware(req, res, next) {
  const kidneyId = Number(req.query.kidneyId);
  if (kidneyId != 1 && kidneyId != 3) {
    res.status(403).json({
      msg: "Validation failed",
    });
    return; 
  }
  next(); // proceed if valid
}

/* 
---------------------------------------------------------------------------------
SECTION 3: Example of Middleware Usage in a Route
---------------------------------------------------------------------------------
Here, before responding, request passes through:
  1. requestMiddleware (global logging)
  2. validatorMiddleware (check username/password)
  3. kidneyCheckerMiddleware (check kidneyId)
If all succeed → the final handler sends "passed things".
*/
app.get("/health", validatorMiddleware, kidneyCheckerMiddleware, (req, res) => {
  res.send("passed things"); 
});

/* 
---------------------------------------------------------------------------------
SECTION 4: Request Counting Middleware
---------------------------------------------------------------------------------
This middleware increments a counter every time a request is made
to the server. It’s useful for monitoring, debugging, and analytics.
*/
let c = 0;
function requestMiddleware(req, res, next) {
  c++;
  console.log("Count of request: ", c);
  next();
}

/* 
---------------------------------------------------------------------------------
SECTION 5: Global Error Handling Middleware
---------------------------------------------------------------------------------
- In Express, any middleware/route can pass errors to this by calling next(err).
- This catches all unhandled errors and sends a generic 500 response.
- Important to keep it as the LAST middleware in the chain.
*/
app.use((err, req, res, next) => {
  res.status(500).send("An internal server error occurred");
});

/* 
---------------------------------------------------------------------------------
SECTION 6: Starting the Server
---------------------------------------------------------------------------------
The app listens on port 3000.
NOTE: app.listen should only be called ONCE in a file.
---------------------------------------------------------------------------------
*/
app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});








// const { log } = require("console");
// const express = require("express");
// const http = require("http");

// const app = express();

// // //! creating wrapper functions
// function validator(username, password) {
//   if (username != "yash" && password != 122) {
//     //authentication
//     return false;
//   } else return true;
// }

// function kidneyChecker(kidneyId) {
//   if (kidneyId != 1 && kidneyId != 3) {
//     //validation
//     return false;
//   } else return true;
// }

// app.get("/", (req, res) => {
//   const kidneyId = req.query.kidneyId;
//   const username = req.query.username;
//   const password = req.query.password;

//   if (!validator(username, password)) {
//     res.status(403).json({
//       msg: "validation failed",
//     });
//   }
//   if (!kidneyChecker(kidneyId)) {
//     res.status(403).json({
//       msg: "kidney checker failed",
//     });
//   }
//   res.send("passed all things");
// });

// app.listen(3000, () => {
//   console.log("Express server running at http://localhost:3000");
// });

// //* using middleware

// app.use(requestMiddleware); //middleware - will get every where - in every route

// function validatorMiddleware(req, res, next) {
//   const username = req.query.username;
//   const password = req.query.password;
//   if (username != "yash" && password != 122) {
//     //authentication
//     res.status(403).json({
//       msg: "Validation failed",
//     });
//     return;
//   }
//   next();
// }

// function kidneyCheckerMiddleware(req, res, next) {
//   const kidneyId = Number(req.query.kidneyId);
//   if (kidneyId != 1 && kidneyId != 3) {
//     //validation
//     res.status(403).json({
//       msg: "Validation failed",
//     });
//     return;
//   }
//   next();
// }


// //? middle ware to find no of requests
// let c=0
// function requestMiddleware(req,res,next)
// {
//     c++
//     console.log("Count of request: ",c);
//     next()
    
// }


// app.get("/health", validatorMiddleware, kidneyCheckerMiddleware, (req, res) => {
//   res.send("passed  things"); //sending text
// });

// app.listen(3000, () => {
//   console.log("Express server running at http://localhost:3000");
// });

// // global catches - error handling middleware
// app.use((err,req,res,next)=>{
//     res.status(500).send(
//         "An internal server error occured"
//     )
// })