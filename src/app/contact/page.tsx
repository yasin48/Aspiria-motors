import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/ui/PageTransition';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Aspiria Motors',
  description: 'Get in touch with the Aspiria Motors team.',
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080808] text-white selection:bg-primary/30 selection:text-white pb-0">
        <PageTransition>
          <ContactContent />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
