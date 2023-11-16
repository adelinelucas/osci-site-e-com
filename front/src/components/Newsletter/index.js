import React from 'react';
import './style.css';

const Newsletter = () => {
    return (
        <div className="container my-4 py-2 row  m-auto">
            <aside className="main__aside__newsletter py-3 px-2 rounded col-12 col-sm-10 col-lg-7 m-auto">
                <h4 className="text-light">Let's keep in touch ! <span>Newsletter inscription</span></h4>
                <form action="#" className="main__aside__newsletter__form">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="my-mail@gmail.com"/>
                        <label for="floatingInput">myemail@gmail.com</label>
                        <img src="./images/icons/blue-email-50px.png" alt="Mail icon"/>
                    </div>
                </form>
            </aside>
        </div>
    )
};

export default Newsletter;