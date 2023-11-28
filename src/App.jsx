import NewGame from './components/NewGame';

function App() {
  const gameSetHandler = (levels, name) => {
    console.log(levels);
    console.log(name);
  };
  return (
    <>
      <h1>Catch the snow!</h1>
      <NewGame onclick={gameSetHandler} />
    </>
  );
}

export default App;
