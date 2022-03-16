import androidIcon from '../../assets/img/icons/android.png'
import webGL from '../../assets/img/icons/webgl.png'

const Platform = ({data}) => {

    return (

      <section className='our_blog_area clearfix pink-background section-padding-100-0' id='blog'>
      <div className='container'>
      <h1 className='text-white text-center' data-aos="fade-up">Platforms</h1>
      <br/>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6 col-lg-12'>
            <div className='single-blog-area'>
              {/* Post Thumbnail */}
              <div className='row my-5'>
                <div className=' col-lg-6'>
                  <img  data-aos='fade-right' className='platform-icon center-image' src={androidIcon} alt='' />
                </div>
                <div className='col-lg-6'>
                  <img  data-aos='fade-left' className='platform-icon center-image' src={webGL} alt='' />
                  {/* <h1 className='text-light text-center'>WebGL </h1> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
    );

}

export default Platform;