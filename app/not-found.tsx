import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container">
        <div className="chapter-content">
          <h2>Página não encontrada</h2>
          <p>O capítulo que você procura não existe ou foi movido.</p>
          <p>
            <Link className="back-link" href="/">
              &larr; Voltar ao índice
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
