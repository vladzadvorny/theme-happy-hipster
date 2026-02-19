export default function App() {
  const title = "Happy Hipster";
  const count = 3;
  const items = ["orange", "lime", "cyan"];
  const meta = { ok: true, items };

  return (
    <main>
      <h1>{title}</h1>
      <p>Number of items: {count}</p>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <pre>
        <code>{JSON.stringify(meta, null, 2)}</code>
      </pre>
    </main>
  );
}
