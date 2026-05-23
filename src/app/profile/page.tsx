import ProfileHero from "@/components/profile/ProfileHero";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileMenu from "@/components/profile/ProfileMenu";
import BottomNavbar from "@/components/profile/BottomNavbar";

export default function ProfilePage() {
  return (
    <main
      className="
        min-h-screen

        bg-[#f5f7fb]

        px-4
        pb-32
        pt-6

        text-slate-900

        transition-colors
        duration-300

        dark:bg-[#07111f]
        dark:text-white

        md:px-6
      "
    >
      <div className="mx-auto max-w-7xl">
        

        <ProfileHero />

        <ProfileStats />

        <ProfileMenu />
      </div>

    

      <BottomNavbar />
    </main>
  );
}