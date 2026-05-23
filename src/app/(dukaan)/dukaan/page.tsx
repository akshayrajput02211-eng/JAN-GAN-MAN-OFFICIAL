import Navbar from "@/components/dukanshared/navbar/Navbar";
import Footer from "@/components/dukanshared/footer/Footer";

import Hero from "@/components/dukaan/hero/Hero";
import Categories from "@/components/dukaan/categories/Categories";
import NearbyShops from "@/components/dukaan/shops/NearbyShops";
import SellerCTA from "@/components/dukaan/seller-cta/SellerCTA";
import HowItWorks from "@/components/dukaan/working/HowItWorks";
import QuickOrder from "@/components/dukaan/quick-order/QuickOrder";
import Reviews from "@/components/dukaan/reviews/Reviews";
import StatsBar from "@/components/dukaan/stats/StatsBar";

export default function DukaanPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <Categories />

      <NearbyShops />

      <SellerCTA />

      <HowItWorks />

      <QuickOrder />

      <Reviews />

      <StatsBar />

      <Footer />
    </main>
  );
}