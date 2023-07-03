function Footer({ isDark, setIsDark }) {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    ></div>
  );
}

export default Footer;
