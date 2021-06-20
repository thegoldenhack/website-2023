import React from "react";

import Gear from "./../../assets/images/gear.png";

export default ({ rotation = -40, timing = 150, width = 150 }) => {
  const [isRotated, setIsRotated] = React.useState(false);

  const style = {
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isRotated ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };
  const childStyle = {
    width: width,
  };

  React.useEffect(() => {
    if (!isRotated) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsRotated(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isRotated, timing]);

  const trigger = () => {
    setIsRotated(true);
  };

  const childWidth = "width: " + width + "em";

  return (
    <span onMouseEnter={trigger} onLoad={trigger} style={style}>
      <img src={Gear} alt="gear" style={childStyle} />
    </span>
  );
};
