import { useState } from "react";

export default function SearchPlace({ setDisCou, counties, setInfo, setAll }) {
  const [input, setInput] = useState("");

  function inputChange(e) {
    setInput(e.target.value);
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

    setAll(false);
    setInfo(null);

    const couObj = counties.find(
      (each) =>
        each.county.toUpperCase() === input.replace(/\s+/g, "").toUpperCase() ||
        input.trim().replace(" ", "-").toUpperCase() ===
          each.county.toUpperCase()
    );

    couObj ? setDisCou(couObj) : showErr();
    setInput("");
  }

  function handleAll() {
    setDisCou(null);
    setInfo(null);
    setAll(true);
  }

  return (
    <section className="searchField">
      <div className="btns">
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
        <button onClick={handleAll}>Show All</button>
      </div>
      <p id="err"></p>
    </section>
  );
}
