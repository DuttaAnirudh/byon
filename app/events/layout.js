import Header from "../_components/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      {children}
    </div>
  );
}
