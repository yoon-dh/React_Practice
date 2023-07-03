function Footer({ isDark, setIsDark }) {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}></button>
    </footer>
  );
}

export default Footer;
