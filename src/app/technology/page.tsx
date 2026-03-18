import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TechnologyContent } from './TechnologyContent';
import { PageTransition } from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  title: 'Technology | Aspiria Motors',
  description: 'Hydrogen fuel cell innovation redefined through swappable pods, AI intelligence, and immersive interfaces.',
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg text-text selection:bg-primary/30 overflow-hidden">
        <PageTransition>
          <TechnologyContent />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
