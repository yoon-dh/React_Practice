function Header() {
  return <header className="header" style={
    backgroundColor : isDark ? 'black' : 'lightgray',
    color : isDark ? 'white' : 'black',
  }></header>;
}
