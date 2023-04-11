import Bg from './components/Bg.jsx';
import Card from './components/Card.jsx';
function App() {
  return (
    <main className="p-5 flex justify-center items-center min-h-screen font-LeagueSpartan">
      <article className="flex flex-col md:m-16">
        <Bg />
        <Card />
      </article>
    </main>
  );
}

export default App;
