import Polygon from '../../../src/assets/img/icons/polygon.png'
import Telos from '../../../src/assets/img/icons/telos.png'
const AboutOther = () => {

  return (

    <section className="about-us-area section-padding-0-100 pink-background clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 offset-lg-0">
              <h4 className="fadeInUp my-5 text-center" data-aos="fade-down" data-aos-delay="200" alt="abc">A Metaverse built on Polygon and Telos</h4>
          </div>
          <div className="col-lg-6 col-sm-6">
            <img className='about-icons  center-image' data-aos="fade-up" src={Polygon} alt="abc"/>
            <h4 className="text-center" data-aos="fade-up">Polygon</h4>
          </div>
          <div className="col-lg-6 col-sm-6">
            <img className='about-icons  center-image' data-aos="fade-up" src={Telos} alt="abc" />
            <h4 className="text-center" data-aos="fade-up">Telos</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOther;