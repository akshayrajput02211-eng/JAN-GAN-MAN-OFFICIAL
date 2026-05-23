import PageNavigator from "./PageNavigator";

import ThemeToggle from "./ThemeToggle";

export default function PageHeader() {
  return (
    <div
      className="
        mb-6

        flex
        items-center
        justify-between
      "
    >
      <PageNavigator />

      <ThemeToggle />
    </div>
  );
}