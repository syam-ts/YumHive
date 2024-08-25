
//npm update react-refresh react-error-overlay

// rm -rf .cache dist node_modules
// npm install
// npm run build



import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "heading1", key: "h1" },
  "Daily Hunt"
);
const heading2 = React.createElement("h2", { key: "h2" }, "Breaking News");
const paragraph1 = React.createElement(
  "p",
  { key: "h3" },
  "Kollam International Railway station"
);
const paragraph2 = React.createElement(
  "p",
  { key: "h4" },
  "Bangalore new IT jobs"
);
const paragraph3 = React.createElement(
  "p",
  { key: "h5" },
  "React 20 Release on November 20"
);

const container = React.createElement("div", { id: "container", key: "h6" }, [
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  paragraph3,
]);

const head = <h1 id="title">Hello React</h1>;

const combinedContainer = React.createElement("div", null, [
  head,
  container,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(combinedContainer);



