import Image from 'next/image';
import { links, backgroundImage, copyrightName } from './data';
import { Background } from '@/components/background';

export default function Home() {
  return (
    <>
      <Background src={backgroundImage} />
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="flex w-full max-w-[400px] flex-col items-center gap-y-8">
          <header>
            <h1 className="font-headline text-4xl font-bold uppercase tracking-widest text-foreground shadow-sm">
              Links
            </h1>
          </header>

          <section className="w-full rounded-2xl bg-card/50 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {links.map((link, index) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block overflow-hidden rounded-lg border-2 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-background ${
                    index === 0 ? 'animate-pulse' : ''
                  }`}
                  style={
                    {
                      borderColor: link.borderColor,
                      '--tw-ring-color': link.borderColor,
                    } as React.CSSProperties
                  }
                  aria-label={link.title}
                >
                  <Image
                    src={link.image}
                    alt={link.title}
                    width={1080}
                    height={250}
                    className="h-auto w-full"
                    priority={index === 0}
                  />
                </a>
              ))}
            </div>
          </section>

          <footer className="text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {copyrightName}
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
