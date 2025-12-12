import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Specs from '@/components/Specs';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <Reviews />
      <Footer />
      <CartModal />
    </main>
  );
}
