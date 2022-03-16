import SectionHeading from "../../components/SectionHeading"
import TrustItem from "./TrustItem"

const SecTrust = ({data}) => {

    return (

      <div className="section-padding-100-70">
        <SectionHeading
          text="Partners"
        />
        <div className="container">
          <div className="row">
            {data && data.map((item , key) => (
              <TrustItem
                key={key}
                img={item.img}
                CheckIcon={item.CheckIcon}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default SecTrust;