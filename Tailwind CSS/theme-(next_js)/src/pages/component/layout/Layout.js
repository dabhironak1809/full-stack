import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen bg-[#0f172a] text-white">
        {children}
      </main>
      <Footer />
    </>
  );
}

