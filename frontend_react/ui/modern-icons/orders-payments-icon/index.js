import React from "react";

const OrdersPaymentsIcon = ({ iconPath }) => {
  return (
    <div>
      <img
        draggable="false"
        height="36"
        width="36"
        alt="OrdersPaymentsIcon"
        referrerPolicy="origin-when-cross-origin"
        src={iconPath}
      />
    </div>
  );
};

export default OrdersPaymentsIcon;
