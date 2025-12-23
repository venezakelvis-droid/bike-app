import { partsMock } from "../data/MockPart";
import "../styles/Parts.css";


function Parts() {
    return (
        <main className="parts">
            <header className="parts-header">
                <h1>Peças para Moto & Bike</h1>
                <p>
                    Encontre peças de qualidade para manutenção, revisão e performance.
                </p>
            </header>

            <section className="parts-filters">
                <button className="filter active">Todas</button>
                <button className="filter">Moto</button>
                <button className="filter">Bike</button>
            </section>

            <section className="parts-grid">
                {partsMock.map((part) => (
                    <div className="part-card" key={part.id}>
                        <div className="part-image">
                            <span>{part.category}</span>
                        </div>

                        <div className="part-info">
                            <h3>{part.name}</h3>
                            <p>{part.description}</p>

                            <div className="part-footer">
                                <strong>{part.price}</strong>
                                <button>Detalhes</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>


            <header className="parts-header">
                <h1>Acessorios para Moto & Bike</h1>
                <p>
                    Encontre acessorios de qualidade para você.
                </p>
            </header>

            <section className="parts-filters">
                <button className="filter active">Todas</button>
                <button className="filter">Moto</button>
                <button className="filter">Bike</button>
            </section>

            <section className="parts-grid">
                {partsMock.map((part) => (
                    <div className="part-card" key={part.id}>
                        <div className="part-image">
                            <span>{part.category}</span>
                        </div>

                        <div className="part-info">
                            <h3>{part.name}</h3>
                            <p>{part.description}</p>

                            <div className="part-footer">
                                <strong>{part.price}</strong>
                                <button>Detalhes</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

        </main>
    );
}

export default Parts;
