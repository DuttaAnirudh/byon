import Header from "../_components/Header";
import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <div className="grid grid-cols-[16rem_1fr] h-full gap-12 overflow-y-hidden">
        <SideNavigation />
        <div className="py-1 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
