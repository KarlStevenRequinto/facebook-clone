import React from "react";

const FriendsStatusIcon = ({width,height,fill}) => {
  return (
    <div>
      <svg
        viewBox="0 0 16 16"
        width={width}
        height={height}
        fill={fill}
        // title="Shared with Lerd Robott's friends"
      >
        {/* <title>Shared with Leo's friends</title> */}
        <g fillRule="evenodd" transform="translate(-448 -544)">
          <path d="M459.75 551c-1.24 0-2.25-1.121-2.25-2.5 0-1.542.863-2.5 2.25-2.5s2.25.958 2.25 2.5c0 1.379-1.01 2.5-2.25 2.5m.692 1h-1.384c-.105 0-.21.005-.312.014a.3.3 0 0 0-.186.509 5.03 5.03 0 0 1 1.44 3.53v1.147a.3.3 0 0 0 .3.3h2.015c.929 0 1.685-.756 1.685-1.685v-.257a3.562 3.562 0 0 0-3.558-3.558m-3.032 6.5h-7.82c-.877 0-1.59-.714-1.59-1.59v-.857a4.057 4.057 0 0 1 4.053-4.053h2.894a4.057 4.057 0 0 1 4.053 4.053v.856c0 .877-.713 1.591-1.59 1.591m-3.91-7.5c-1.379 0-2.5-1.346-2.5-3 0-1.879.935-3 2.5-3s2.5 1.121 2.5 3c0 1.654-1.121 3-2.5 3"></path>
        </g>
      </svg>
    </div>
  );
};

export default FriendsStatusIcon;
