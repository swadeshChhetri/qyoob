// src/components/layout/Layout.jsx
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="font-sans text-gray-800 space-y-10">
      <Header />
      <main className="pt-10">
        <div className="w-full max-w-[1300px] container mx-auto px-4 sm:px-6 lg:px-4 pt-24">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
