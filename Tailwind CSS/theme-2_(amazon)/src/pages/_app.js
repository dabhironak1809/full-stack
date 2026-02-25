import '../styles/globals.css'; // Your Tailwind CSS
// import Navbar from '../components/Navbar';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content with top padding equal to navbar height */}
      <main className="pt-[20px] md:pt-[90px] lg:pt-[90px]">
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}
