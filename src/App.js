import logo from './img/logo.svg';
import menu from './img/menu.svg';
import './App.css';


function App() {
  return (
    <div className="App-body">
      <header className="App-header">
        <nav className="App-header__nav">
          <div className="App-header__menu">
            <button className="App-menu__button">
              <img src={menu} className="App-menu" alt="menu" />
            </button>
          </div>
          <div className="App-logo_group">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-logo_title__phone">
              8 800 725 32 32
            </p>
          </div>
        </nav>
      </header>
      <main>
        <section className="App-intro__container">
          <h1 className="App-intro__title">Захватывающие <br /> вершины <br /> Кавказа </h1>
          <p className="App-intro__text">
            В сопровождении опытных гидов вы пройдете через потрясающие ландшафты и совершите восход <br /> на вершину горы Чегет.
          </p>
          <button className="App-intro__button">
            <p className="App-intro-text__button">Смотреть тур</p>
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
