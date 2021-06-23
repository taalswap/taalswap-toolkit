import React from "react";
import { useTheme } from "styled-components";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useTheme();
    const btnColor = theme.isDark ? "#fff" : "#212b36";

    return (
      <Svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="7px" height="10px" viewBox="0 0 7 10"
      preserveAspectRatio="xMidYMid meet"{...props} >

<g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)"
fill={btnColor} stroke="none">
<path d="M20 75 l23 -25 -23 -25 c-30 -32 -14 -32 25 0 l30 25 -30 25 c-39 32
-55 32 -25 0z"/>
</g>
      </Svg>
    );
  };
  
  export default Icon;