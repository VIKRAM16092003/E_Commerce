import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function CartItems({product , quantity}) {
    const [totalquantity,setTotalQuantity]=useState(Number(quantity));
    const Add=()=>
        {
            if(totalquantity<product.stock)
            {
                setTotalQuantity(totalquantity+1);
            }
        }
        const Reduce=()=>{
            if(totalquantity>1)
            {
                setTotalQuantity(totalquantity-1);
            }
        }
  return (
    <>
   
            <div className="col-12 col-lg-8">
                <hr />
                <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={product.images[0].image} alt="Laptop" height="90" width="115" />
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to={"/product/"+product._id} className="text-decoration-none">{product.name}</Link>
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">${product.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={Reduce}>-</span>
                                <input type="number" className="form-control count d-inline" value={totalquantity} readOnly />

								<span className="btn btn-primary plus" onClick={Add}>+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger"></i>
                        </div>

                    </div>
                </div>
                <hr />
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">1 (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">$245.67</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block">Place Order</button>
                </div>
            </div>
    </>
  )
}

export default CartItems