import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters } from "@/data/chapters";

type ChapterPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export function generateMetadata({ params }: ChapterPageProps) {
  const chapter = chapters.find((item) => item.slug === params.slug);

  if (!chapter) {
    return {};
  }

  return {
    title: `${chapter.title} · Fome e Capitalismo`,
    description: chapter.summary,
  };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const chapter = chapters.find((item) => item.slug === params.slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((item) => item.slug === params.slug);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <main>
      <div className="container">
        <Link className="back-link" href="/">
          &larr; Voltar ao índice
        </Link>
        <article className="chapter-content">
          <h2>
            Capítulo {chapter.number}: {chapter.title}
          </h2>
          {chapter.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        <nav className="cta-grid" style={{ marginTop: "2.5rem" }}>
          {previousChapter && (
            <Link className="cta-card" href={`/capitulos/${previousChapter.slug}`}>
              <h3>&larr; Capítulo {previousChapter.number}</h3>
              <p>{previousChapter.title}</p>
            </Link>
          )}
          {nextChapter && (
            <Link className="cta-card" href={`/capitulos/${nextChapter.slug}`}>
              <h3>Capítulo {nextChapter.number} &rarr;</h3>
              <p>{nextChapter.title}</p>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}
