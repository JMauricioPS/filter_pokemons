export default function Footer({ isSearch, len }) {
  console.log(len);
  return (
    <footer>
      <nav
        className={`navbar navbar-dark bg-dark justify-content-center ${
          isSearch && len < 2 && "fixed-bottom"
        }`}
      >
        <p className="text-muted">© 2021 Mauricio PS</p>
      </nav>
    </footer>
  );
}
