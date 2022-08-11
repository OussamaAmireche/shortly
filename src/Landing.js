import illustration from './images/illustration-working.svg'

const Landing = () => {
    return ( 
        <div className="landing">
            <div className="container">
                <div className="landing-info">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <div className="main-button">Get Started</div>
                </div>
                <img src={illustration} alt="illustration" />
            </div>
        </div>
     );
}
 
export default Landing;