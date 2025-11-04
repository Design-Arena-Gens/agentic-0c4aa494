import Link from "next/link";
import { chapters } from "@/data/chapters";

export default function HomePage() {
  const highlightChapters = chapters.slice(0, 3);

  return (
    <main>
      <div className="container">
        <section className="hero">
          <h1>Fome e Capitalismo</h1>
          <p>
            Um livro digital em quinze capítulos que mergulha nas engrenagens da fome como fenômeno estrutural
            do capitalismo contemporâneo. Cada capítulo aborda dimensões históricas, políticas e culturais do
            tema, propondo caminhos de transformação coletiva.
          </p>
          <div className="cta-grid">
            {highlightChapters.map((chapter) => (
              <article key={chapter.slug} className="cta-card">
                <h3>{chapter.title}</h3>
                <p>{chapter.summary}</p>
                <p>
                  <Link href={`/capitulos/${chapter.slug}`} aria-label={`Ler ${chapter.title}`}>
                    Ler capítulo &rarr;
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="chapter-index">
          <h2>Índice</h2>
          <div className="chapter-list">
            {chapters.map((chapter) => (
              <Link key={chapter.slug} href={`/capitulos/${chapter.slug}`}>
                <h4>
                  Capítulo {chapter.number}: {chapter.title}
                </h4>
                <p>{chapter.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>
            Livro digital criado para refletir sobre o vínculo entre estruturas econômicas e a experiência da
            fome. Compartilhe, discuta e transforme.
          </p>
        </footer>
      </div>
    </main>
  );
}
