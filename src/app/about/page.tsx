import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutContent } from './AboutContent';
import { PageTransition } from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  title: 'About | Aspiria Motors',
  description: 'Learn about Aspiria Motors — our mission to revolutionize clean transportation through hydrogen fuel cell vehicles.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg text-text selection:bg-primary/30 overflow-hidden">
        <PageTransition>
          <AboutContent />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
