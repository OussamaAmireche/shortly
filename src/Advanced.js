import brand from './images/icon-brand-recognition.svg';
import records from './images/icon-detailed-records.svg';
import customizable from './images/icon-fully-customizable.svg';

const Advanced = () => {
    return ( 
        <div className="advanced">
            <div className="container">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className="grid">
                    <div className="brand-recognition">
                        <div className="image-frame"><img src={brand} alt="brand recognition" /></div>
                        <h4>Brand Recognition</h4>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className="detailed-records">
                        <div className="image-frame"><img src={records} alt="Detailed Records" /></div>
                        <h4>Detailed Records</h4>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className="fully-customizable">
                        <div className="image-frame"><img src={customizable} alt="Fully Customizable" /></div>
                        <h4>Fully Customizable</h4>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advanced;