import SectionHeading from '../SectionHeading'
import advertiseIcon from '../../assets/img/icons/ad.png'
import peridotToken from '../../assets/img/icons/peridot.png'
import buySell from '../../assets/img/icons/trade.png'

const TrainingOpportunities = ({ data, ClassSpanTitle }) => {
  return (
    <section className='our_blog_area clearfix white-background section-padding-100-0' id='blog'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <SectionHeading
              text='Earning Opportunities'
              ClassSpanTitle={ClassSpanTitle}
            />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6 col-lg-12'>
            <div className='single-blog-area'>
              {/*  */}
              <div className='row my-5'>
                <div className=' blog_thumbnail col-lg-4'>
                  <img className='career-logo center-image' data-aos='fade-right' src={advertiseIcon} alt='' />
                  <h1 className='career-heading text-center' data-aos='fade-right'>Advertisement</h1>
                  <p className='text-center text-dark' data-aos='fade-right'> details ...</p>
                </div>
                <div className='blog_thumbnail col-lg-4'>
                  <img className='career-logo center-image'  data-aos='fade-up' src={peridotToken} alt='' />
                  <h1 className='career-heading text-center' data-aos='fade-up'>Peridot Token </h1>
                  <p className='text-center text-dark' data-aos='fade-up'> details ...</p>
                </div>
                <div className=' col-lg-4'>
                  <img className='career-logo center-image'  data-aos='fade-down' src={buySell} alt='' />
                  <h2 className='career-heading text-center' data-aos='fade-down'> Buy/Sell (Real Estate)</h2>
                  <p className='text-center text-dark' data-aos='fade-down'> details ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingOpportunities
