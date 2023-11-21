import {React, useState} from 'react';
import {useCartContext} from '../../contextes/CartContext';
import '../Checkout/checkout.css'


const Checkout = () => {

  /* The line `const [selectedShipping, setSelectedShipping] = useState(null);` is
  declaring a state variable `selectedShipping` and a function
  `setSelectedShipping` to update its value. The initial value of
  `selectedShipping` is set to `null`. This state variable is used to keep track
  of the selected shipping option in the checkout form. */
  const [selectedShipping, setSelectedShipping] = useState(null);
  /* The above code is using the `useCartContext` hook to access the `productsList`
  variable from the cart context. */
  const {productsList} = useCartContext();
  /* The above code is written in JavaScript and it is using the useState hook from
  React. It declares a state variable called promoCode and a function called
  setPromoCode to update the value of promoCode. The initial value of promoCode
  is an empty string. */
  const [promoCode, setPromoCode] = useState('');
  /* The above code is written in JavaScript and it is using the useState hook from
  React. It declares a state variable called "discount" and a function called
  "setDiscount" to update the value of the "discount" variable. The initial
  value of the "discount" variable is set to 0. */
  const [discount, setDiscount] = useState(0);



/**
 * The function handles the submission of a promo code and sets a discount based on
 * the code entered.
 * @param event - The event parameter is the event object that is passed when the
 * handlePromoCodeSubmit function is called. It represents the event that triggered
 * the function, such as a form submission.
 */
const handlePromoCodeSubmit = (event) => {
  event.preventDefault();
  if (promoCode === 'OCSI20') {
    setDiscount(0.2);
  } else {
    setDiscount(0);
  }
};

    return (
      <div className="container">
        <div className="py-5 text-center">
          <h2>Checkout</h2>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
            </h4>
            <ul className="list-group mb-3 sticky-top">
              <li style={{padding:'5%'}} className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  {productsList.length > 0 ? (
                    productsList.map((product) => {
                      return (
                        <div key={product[0]} style={{ display: 'flex' }}>
                          <img className="image-checkout" src={product[6]} alt="product image" />
                          <div style={{ marginLeft: '5%', marginBottom: '10%' }}>
                            <h6 className="my-0">{product[1]}</h6>
                            <small className="text-muted">{product[2]}</small>
                            <br />
                            <small className="text-muted">{product[3]}$</small>
                          </div>
                          <div>
                            <small style={{ textAlign: 'center', marginBottom: '5%' }} className="text-muted">
                              {product[4]}
                            </small>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div>Your cart is empty!</div>
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="">
                  <h6 className="my-0" style={{color: "#086788", fontWeight:"bold"}}> Promo code : "OCSI20"</h6>
                </div>
                <span style={{color: "#086788", fontWeight:"bold"}}>
                  -${(productsList.reduce((total, product) => total + product[3] * product[4], 0) * discount).toFixed(2)}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
              <span>Total:</span>
              <strong>
                {(productsList.reduce((total, product) => total + product[3] * product[4], 0) * (1 - discount)).toFixed(2)}$
              </strong>
              </li>
            </ul>
            <form className="card p-2" onSubmit={handlePromoCodeSubmit}>
            <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <div className="input-group-append">
            <button style={{backgroundColor:"#086788"}} type="submit" className="btn btn-secondary">Redeem</button>
            </div>
            </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="ex: John" required />
                  <div className="invalid-feedback"> Valid first name is required. </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="ex: Doe" required />
                  <div className="invalid-feedback"> Valid last name is required. </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="ex: you@example.com" />
                <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="ex: 1234 Main St" required />
                <div className="invalid-feedback"> Please enter your shipping address. </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="ex: Apartment or suite" />
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="custom-select d-block w-100" id="country" required>
                    <option value>Choose...</option>
                    <option>United States</option>
                    <option>France</option>
                  </select>
                  <div className="invalid-feedback"> Please select a valid country. </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="custom-select d-block w-100" id="state" required>
                    <option value>Choose...</option>
                    <option>California</option>
                    <option>Ile de France</option>
                  </select>
                  <div className="invalid-feedback"> Please provide a valid state. </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip Code</label>
                  <input type="text" className="form-control" id="zip" placeholder required />
                  <div className="invalid-feedback"> Zip code required. </div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="same-address" />
                <label className="custom-control-label" htmlFor="same-address">Delivery address same as billing address</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="save-info" />
                <label className="custom-control-label" htmlFor="save-info">Save this information for next purchase</label>
              </div>
              <div className="delivery-container">
                <div className={`card_product ${selectedShipping === 'DHL' ? 'selected' : ''}`} onClick={() => setSelectedShipping('DHL')}>
                  <img src="images/dhl-100.png" alt="external-dhl-dalsey-hillblom-and-lynn-international-which-is-international-courier-parcel-and-express-mail-company-industry-color-tal-revivo" />
                  <div className="card-product-infos">
                    <h2>Dhl delivery</h2>
                    <p>Delivery time: 3 days</p>
                  </div>
                </div>
                <div className={`card_product ${selectedShipping === 'FedEx' ? 'selected' : ''}`} onClick={() => setSelectedShipping('FedEx')}>
                  <img src="images/icons8-fedex-100.png" alt="DHL" />
                  <div className="card-product-infos">
                    <h2>Fedex delivery</h2>
                    <p>Delivery time: 4 days</p>
                  </div>
                </div>
              </div>
              <hr className="mb" />
              <h4 className="container-payment mb-2">Payment Options</h4>
              <div className="d-block my-3">
                <div className="buttons-payment p-2 mb-3">
                  <button className="button-google"/>
                  <button className="button-apple">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    </svg>
                    Pay
                  </button>
                </div>
                <div className="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                  <label className="custom-control-label" htmlFor="credit">Credit card</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback"> Name on card is required </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder required />
                  <div className="invalid-feedback"> Credit card number is required </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder required />
                  <div className="invalid-feedback"> Expiration date required </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder required />
                  <div className="invalid-feedback"> Security code required </div>
                </div>
              </div>
              <hr className="mb-4"/>
              <div className="container-order">
                <button className="btn-order" type="submit">Place order</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
};

export default Checkout;
