import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [state, setState] = useState(0);

  const addition = () => {
    if (state < 20) {
      setState((prev) => prev + 1);
    }
  };
  const substraction = () => {
    if (state > 0) {
      setState((prev) => prev - 1);
    }
  };
  const adding = () => {
    if (state < 20) {
      setState((prev) => prev + 2);
    }
  };
  const substract = () => {
    if (state > 0) {
      setState((prev) => prev - 2);
    }
  };
  const reset = () => {
    setState(0);
    localStorage.clear();
    toast.info("Reseted Successfully!");
  };
  const save = () => {
    localStorage.setItem("counterValue", state);
    toast.success("Saved Successfully!");
  };

  useEffect(() => {
    const counterValue = localStorage.getItem("counterValue");
    const parsedValue = parseInt(counterValue);
    if (parsedValue) {
      setState(parsedValue);
    }
  }, []);
  return (
    <main className="container" style={{ marginTop: 80 }}>
      <header style={{ textAlign: "center" }}>
        <h1>Simple Counter</h1>
      </header>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <div
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            margin: "2rem 0",
          }}
        >
          {state}
        </div>

        <div className="grid">
          <button className="secondary" onClick={substraction}>
            SUB -
          </button>

          <button onClick={addition}> ADD +</button>
        </div>
        <div className="grid">
          <button className="secondary" onClick={substract}>
            SUB -2
          </button>
          <button onClick={adding}>ADD +2</button>
        </div>
        <div>
          <button className="outline" onClick={reset}>
            RESET
          </button>
          <button className="contrast" onClick={save}>
            SAVE
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
