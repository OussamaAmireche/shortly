import axios from "axios";
import { useState } from "react";


const Shorten = () => {

    const baseURL = "https://api.shrtco.de/v2/shorten?url=";

    const [link, setLink] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [links, setLinks] = useState(Object.keys(window.localStorage));
    const [incorrectUrl, setIncorrectUrl] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(link.length === 0){
            setIncorrectUrl(false);
            setIsEmpty(true);
        }else{
            setIsEmpty(false);
            setIncorrectUrl(false);
            axios
            .post(baseURL + link)
            .then((response) => {
                window.localStorage.setItem(response.data.result.original_link, response.data.result.full_short_link);
                setLinks(Object.keys(window.localStorage));
            }).catch((error) => {
                setIncorrectUrl(true);
            });
        }
        console.log();
    }

    return ( 
        <div className="shorten">
            <div className="background"></div>
            <div className="container">
                <div className="form">
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Shorten a link here..."
                            style={{border: (isEmpty || incorrectUrl) && "3px solid hsl(0, 87%, 67%)"}}
                        />
                        <button className="main-button" type="submit">Shorten It!</button>
                    </form>
                    {isEmpty && <p className="error-msg">Please add a link</p>}
                    {incorrectUrl && <p className="error-msg">Please add a valid link</p>}
                </div>
                {links.map(key => (
                    <div className="saved-link" key={key}>
                        <p className="key">{key}</p>
                        <p className="value">{window.localStorage.getItem(key)}</p>
                        {!isCopied && <button className="main-button" onClick={(e) => {
                            navigator.clipboard.writeText(window.localStorage.getItem(key));
                            setIsCopied(true);
                            setTimeout(() => {
                                setIsCopied(false);
                            }, 3000);
                        }}>Copy</button>}
                        {isCopied && <button className="main-button copied">Copied!</button>}
                        <button className="main-button delete" onClick={() => {
                            window.localStorage.removeItem(key);
                            setLinks(Object.keys(window.localStorage));
                        }}>Delete</button>
                    </div>
                )
                )}
                
            </div>
        </div>
     );
}
 
export default Shorten;