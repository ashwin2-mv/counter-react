const App = () => {
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
          4
        </div>

        <div className="grid">
          <button className="secondary">- Subtract</button>
          <button>+ Add</button>
        </div>
      </section>
    </main>
  );
};

export default App;
