import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Bem-vindo ao app Bike</h1>
        <p>
          Suas Peças com os melhores preços.
        </p>

        <div className="hero-actions">
          <a href="/pecas" className="btn primary">
            Ver Peças
          </a>
          <a href="/servicos" className="btn secondary">
            Ver serviços
          </a>
        </div>
      </section>

    </main>
  );
}

export default Home;
