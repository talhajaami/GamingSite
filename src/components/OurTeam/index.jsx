import SectionHeading from "../SectionHeading"

const OurTeam = ({data , ClassSpanTitle}) => {

    return (

      <section className="our_team_area white-background section-padding-100-0 clearfix" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading
                text="Awesome Team"
                ClassSpanTitle={ClassSpanTitle}
              />

            </div>
          </div>
          <div className="row">
            {data && data.map((item , key) => (
                <div className="col-12 col-sm-6 col-lg-3" key={key}>
                  <div className="single-team-member" data-aos="fade-up">
                    {/* Image */}
                    <div className="team-member-thumb  img-shadow">
                      <img draggable="false" src={item.img} className="center-block" alt="" />
                    </div>
                    {/* Team Info */}
                    <div className="team-info">
                      <h5 className="w-text">{item.title}</h5>
                      <p className="g-text">{item.text}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurTeam