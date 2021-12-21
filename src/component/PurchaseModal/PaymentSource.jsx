import React from "react";

const PaymentSource = (props) => {
  const {
    name,
    price,
    src,
    discounts,
    paymentSource,
    dollarPrice,
    postPaymentSource,
  } = props;
 
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-400 p-3 gap-y-8">
      <div className="flex items-center space-x-3">
        <input
          className="form-check-input"
          type="radio"
          name="paymentSource"
          id={`paymentSource${name}`}
          value={name}
          checked={paymentSource === name}
          onChange={(e) => postPaymentSource(e.target.value)}
        />

        <label className="form-check-label text-capitalize" htmlFor="mee">
          <div className="flex items-center space-x-4">
            <p className="">{name}</p>
            <p className="text-right font-extrabold">
              {dollarPrice}
              {/* {price && `₦ ${getDiscountedPrice(price, discounts)}`} */}
            </p>
          </div>
        </label>
      </div>
      <div>
        <img src={src} className="img-fluid" alt={`payment-source-${name}`} />
      </div>
    </div>
  );
};

export default PaymentSource;
