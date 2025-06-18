import Sidenav from "./Sidenav";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 flex w-full justify-end border-b border-white/20 bg-white/60 px-12 py-4 shadow-sm backdrop-blur-md">
        <Sidenav />
      </nav>
    </header>
  );
}
