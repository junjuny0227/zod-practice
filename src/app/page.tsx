"use client";

import { useState } from "react";
import { humanForm } from "./schema";

const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    const result = humanForm.safeParse({
      name,
      age,
    });

    if (result.success) {
      setError(null);
      console.log("✅ 유효한 값:", result.data);
    } else {
      setError(result.error.issues[0].message);
      console.error("❌ 유효성 오류:", result.error.issues);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        maxWidth: "300px",
      }}
    >
      <label>
        이름:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        나이:
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />
      </label>
      <button type="submit">제출</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Main;
