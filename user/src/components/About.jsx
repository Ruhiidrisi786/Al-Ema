import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container-fluid bg-light py-5" style={{ marginTop: "90px" }}>
      <div className="container p-5 shadow-sm rounded-3" style={{ background: "#f8f9fa" }}>
        
        <h1 className="fw-bold text-center mb-4">
          About AL-EMA Industries
        </h1>

        <p className="fs-5 text-secondary">
          With over 25 years of excellence in the petroleum industry,
          <strong> AL-EMA Industries</strong> stands as a trusted name in crude oil supply.
          We bridge the gap between oil producers and refineries worldwide,
          ensuring seamless transactions and reliable delivery.
        </p>

        <p className="fs-5 text-secondary">
          Our commitment to quality, transparency, and customer satisfaction has made us
          the preferred partner for businesses across <strong>50+ countries</strong>.
          We understand the complexities of the global oil market and provide
          tailored solutions to meet your specific requirements.
        </p>

        <p className="fs-5 text-secondary">
          From light sweet crude to heavy industrial-grade oil, we supply a comprehensive
          range of petroleum products backed by rigorous quality control and industry certifications.
        </p>
      </div>
    </div>
  );
};

export default About;
