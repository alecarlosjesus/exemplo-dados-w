import { useState } from "react";
import type { FormEvent } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert(`Enviado!\nNome: ${nome}\nEmail: ${email}`);
    setNome("");
    setEmail("");
  }

  return (
    <main>
      <h1>TESTE</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label><br />
          <input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label><br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
