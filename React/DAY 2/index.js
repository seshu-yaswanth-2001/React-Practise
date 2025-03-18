import React from "react";
import ReactDOM from "react-dom/client";

/**
 * PARCEL is a package
 * Parcel package is dependent on other package and that package is dependent on other package
 * this is called "tranitive Dependencies"
 *
 *
 * HMR - Hot Module Replacement
 * File Watching Algorithms written in C++ for fast Execution
 * dist folder - makes our app bundling, minify the code, cleans our code
 * Super fast build algorithm
 * it does image optimization also
 * Caching while development
 * Compress the files
 * parcel is comptaible with older version of browsers
 * we can build HTTPS on dev
 * Parcel and dist need to be in gitignore file
 * if you have two project open at a time it open with two different port numbers
 * so, it handles Portnumbers also
 * Consistent hashing Algorithm
 *
 */

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    what: "ever",
  },
  "Heading 1 from React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    what: "ever",
  },
  "Heading 2 from React"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
