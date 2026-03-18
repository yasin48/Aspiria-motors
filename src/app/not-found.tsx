import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { PageTransition } from '@/components/ui/PageTransition';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg text-text selection:bg-primary/30 flex flex-col pt-24 pb-12">
        <PageTransition>
          <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl md:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/20 mb-6 drop-shadow-[0_0_30px_rgba(0,200,255,0.3)]">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-text mb-6">
              Page Not Found
            </h2>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-12 font-light">
              We couldn&apos;t find the page you were looking for. It might have been moved or no longer exists.
            </p>
            <Link href="/">
              <Button variant="primary" className="text-lg px-8 py-4 font-orbitron uppercase tracking-widest">
                Return Home
              </Button>
            </Link>
          </div>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
