export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">MyApp</a>
      </div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}