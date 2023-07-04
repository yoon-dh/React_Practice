function App() {
  const [parentAge, setParentAge] = userState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };
  return <div className="App"></div>;
}

export default App;
