import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Sivananda Yoga Dalat",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-grow">
        <div className="py-40 text-center bg-[#FDFCF8]">
          <h1 className="text-4xl font-serif text-[#0B3B24]">
            About Sivananda Yoga Dalat
          </h1>
        </div>
      </section>

      <Footer />
    </main>
  );
}
