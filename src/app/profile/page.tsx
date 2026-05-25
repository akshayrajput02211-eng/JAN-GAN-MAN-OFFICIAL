import ProfileHero from "@/components/profile/ProfileHero";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileMenu from "@/components/profile/ProfileMenu";
import BottomNavbar from "@/components/profile/BottomNavbar";

export default function ProfilePage() {
  return (
    <main
      className="
        relative
        min-h-screen

        bg-[#f4f8ff]
        dark:bg-[#07111f]

        text-slate-900
        dark:text-white

        transition-colors
        duration-300
      "
    >
      {/* MAIN CONTENT */}
      <section
        className="
          mx-auto
          max-w-7xl

          px-4
          pt-6
          pb-36

          md:px-6
        "
      >
        {/* PROFILE HERO */}
        <ProfileHero />

        {/* STATS */}
        <div className="mt-6">
          <ProfileStats />
        </div>

        {/* MENU */}
        <div className="mt-6">
          <ProfileMenu />
        </div>
      </section>

      {/* BOTTOM NAVBAR */}
      <BottomNavbar />
    </main>
  );
}