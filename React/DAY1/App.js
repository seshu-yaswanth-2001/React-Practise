const heading1 = React.createElement(
  "h1",
  // the second argument is props i.e. attributes that need to be pass in the html tag
  {
    id: "title",
    className: "title1",
    style: {
      background: "red",
      color: "white",
    },
  },
  "Heading1 from React"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    className: "title2",
    style: {
      background: "black",
      color: "white",
    },
  },
  "Heading2 from React"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
