import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";

const items = [
  {
    title: "What is React",
    content: "React is frontend javascript framework",
  },
  {
    title: "Why use React ?",
    content: "React is favourate",
  },
  {
    title: "How do you use React",
    content: "React is used by creating components, Hooks and Redux",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      <h1>Widget App</h1>
      <br />

      <Dropdown
        label={"Select a Language"}
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />

      <Translate />
    </div>
  );
}

export default App;
