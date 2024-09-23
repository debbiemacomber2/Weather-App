import { useState } from "react";

export default function SearchPlace({ disCou, setDisCou, counties, setInfo }) {
  const [input, setInput] = useState("");

  function inputChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
    resetErr();
  }

  function resetErr() {
    document.getElementById("err").textContent = "";
    document.querySelector(".searchField").classList.remove("blink");
  }

  function showErr() {
    document.getElementById("err").textContent =
      "Enter a name of a county found in Kenya!!";
    document.querySelector(".searchField").classList.add("blink");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const couObj = counties.find(
      (each) =>
        each.county.toUpperCase() === input.replace(/\s+/g, "").toUpperCase() ||
        input.trim().replace(" ", "-").toUpperCase() ===
          each.county.toUpperCase()
    );

    couObj ? setDisCou(couObj) : showErr();
    setInput("");
  }

  return (
    <section className="searchField">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          id="county"
          onChange={(e) => inputChange(e)}
          type="text"
          value={input}
          autoFocus
          autoComplete="off"
        />
        <button type="submit">Get</button>
      </form>
      <p id="err"></p>
    </section>
  );
}
