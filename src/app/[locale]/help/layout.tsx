import HelpNavbar from "@/components/help/HelpNavbar";
import Footer from "@/components/layout/Footer";

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HelpNavbar />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
}
