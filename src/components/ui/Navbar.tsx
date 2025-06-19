import Sidenav from "./Sidenav";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 flex w-dvw justify-end bg-white/60 px-24 py-5 backdrop-blur-md">
        <Sidenav />
      </nav>
    </header>
  );
}
