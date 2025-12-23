import { servicesMock } from "../data/MockServices";
import "../styles/Services.css";



function Services() {
  return (
    <main className="services">
      <header className="services-header">
        <h1>Serviços Oferecidos</h1>
        <p>
          Cuidamos da sua moto e bicicleta com serviços de qualidade e
          profissionais especializados.
        </p>
      </header>

      <section className="services-grid">
        {servicesMock.map((service) => (
          <div className="service-card" key={service.id}>
            <span className="service-category">{service.category}</span>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <button className="service-btn">
              Solicitar orçamento
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;
