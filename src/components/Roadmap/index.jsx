import SectionHeading from "../SectionHeading"

const Roadmap = ({ data }) => {

  return (

    <section className="roadmap dark-background section-padding-0-0" id="roadmap">
      <br/>
      <h1 className='text-white text-center' data-aos="fade-up">Roadmap</h1>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              {data && data.map((item, key) => (
                <div className="timeline" data-aos="fade-up" key={key}>
                  <div className="icon" />
                  <div className="date-content">
                    <div className="date-outer" data-aos="fade-up"> <span className="date"> <span className="month">{item.month}</span> <span className="year">{item.year}</span> </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title" data-aos="fade-down">{item.title}</h5>
                    <p className="description text-light-gray" data-aos="fade-up"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Roadmap