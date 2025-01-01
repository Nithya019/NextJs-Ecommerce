export default function Page() {
  return (
    <div className="p-8">
      <h2>Get in Touch</h2>
      <ul style={{ listStyleType: "square" }}>
        <li>
          <span>
            Email: <a href="mailto:contact@example.com">contact@example.com</a>
          </span>
        </li>
        <li>
          <span>
            Website: <a href="https://www.example.com">www.example.com</a>
          </span>
        </li>
      </ul>
    </div>
  );
}
