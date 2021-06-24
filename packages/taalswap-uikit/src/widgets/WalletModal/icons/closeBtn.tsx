import React from "react";
import { useTheme } from "styled-components";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useTheme();
    const btnColor = theme.isDark ? "#fff" : "#212b36";

    return (
      <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" {...props} >
  <g id="___Icons_ic_replace" data-name="__🥬Icons/ ic_replace" transform="translate(0 16.971) rotate(-45)">
    <g id="_gr" data-name="#gr">
      <path id="Path" d="M22.5,10.5h-9v-9a1.5,1.5,0,0,0-3,0v9h-9a1.5,1.5,0,0,0,0,3h9v9a1.5,1.5,0,0,0,3,0v-9h9a1.5,1.5,0,0,0,0-3Z" fill={btnColor}/>
    </g>
  </g>
      </Svg>
    );
  };
  
  export default Icon;