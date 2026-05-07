import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import References from '@/components/References';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0a0b0d]">
      <Header />
      <Hero />
      <About />
      <Catalog />
      <References />
      <ContactForm />
      <Footer />
    </div>
  );
}
