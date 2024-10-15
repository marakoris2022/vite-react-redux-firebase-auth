import { useState } from "react";

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

const Form = ({ title, handleClick }: FormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </form>
  );
};

export default Form;
