import WhitepaperIcon from '../../assets/img/icons/White-paper.png'

const Whitepaper = () => {

  return (

    <section className="spread-map white-background download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img draggable="false"  data-aos="fade-right" src={WhitepaperIcon} className="center-block" alt="" />
            </div>
          </div> 
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <h4 className="text-dark" data-aos="fade-left">Download Our Whitepaper</h4>
              <p className="text-dark"  data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui iste asperiores harum maiores praesentium facere ullam blanditiis, odio dolorum. Officia quisquam eaque suscipit facere ducimus, sit quaerat. Numquam, corrupti?</p>
              <a className="btn dream-btn mt-30"  data-aos="fade-left" href="#">
                Get Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Whitepaper