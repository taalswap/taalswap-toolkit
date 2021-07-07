import React from "react";
import { useTheme } from "styled-components";
import { SvgProps } from "../types";
import Link from "../../../components/Link/Link";

const MainLogo: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const logoColor = theme.isDark ? "#fff" : "#000";

  return (
    <div style={{ padding: "24px 20px", boxSizing: "border-box" }}>
      <Link href="https://taalswap.finance/" style={{ width: "150px", cursor: "pointer" }}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1914.3 512"
          style={{ width: "100%" }}
        >
          <g>
            <g>
              <path
                fill="#00ab55"
                d="M214.6,150.3c-19.8-43.1-81.1-43.1-100.9,0L39.9,311.4c-9.4,20.4-2.4,45.5,15.6,56.2
			c18,10.6,40.1,2.7,49.5-17.7l27.6-60.2c12.4-27.1,50.9-27.1,63.3,0l28.5,62.1c12.4,27.1,50.9,27.1,63.3,0l28.5-62.1
			c12.4-27.1,50.9-27.1,63.3,0l27.6,60.2c9.4,20.4,31.5,28.3,49.5,17.7c18-10.6,24.9-35.8,15.6-56.2l-73.9-161.1
			c-19.8-43.1-81.1-43.1-100.9,0l-31.7,69.2c-3.8,8.2-15.4,8.2-19.2,0L214.6,150.3z"
              />
              <g>
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="74.0387"
                  y1="245.2215"
                  x2="437.907"
                  y2="245.2215"
                >
                  <stop offset="0" style={{ stopColor: "#5BE584" }} />
                  <stop offset="1" style={{ stopColor: "#00AB55" }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_1_)"
                  d="M398.2,150.5c0-0.1-0.1-0.1-0.1-0.2c-0.5-1-0.9-1.9-1.4-2.9c-0.1-0.2-0.2-0.5-0.4-0.7
				c-0.5-0.9-1-1.8-1.6-2.7c-0.1-0.2-0.3-0.4-0.4-0.6c-0.5-0.8-1.1-1.7-1.6-2.4c-0.1-0.1-0.1-0.2-0.2-0.3c-0.6-0.9-1.3-1.7-1.9-2.5
				c-0.2-0.2-0.3-0.4-0.5-0.6c-0.7-0.8-1.3-1.5-2-2.3c-0.1-0.1-0.3-0.3-0.4-0.4c-0.6-0.7-1.3-1.3-2-2c-0.1-0.1-0.2-0.2-0.3-0.3
				c-0.7-0.7-1.5-1.3-2.3-2c-0.2-0.1-0.4-0.3-0.5-0.4c-0.8-0.6-1.6-1.2-2.4-1.8c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.4-0.2
				c-0.6-0.4-1.1-0.8-1.7-1.2c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.7-0.4-1.4-0.9-2.2-1.3c0,0-0.1,0-0.1-0.1
				c-0.3-0.2-0.7-0.4-1-0.5c-0.5-0.3-1-0.6-1.6-0.8c-0.4-0.2-0.8-0.4-1.1-0.5c-0.5-0.2-1-0.5-1.5-0.7c-0.4-0.2-0.8-0.3-1.2-0.5
				c-0.5-0.2-1-0.4-1.5-0.6c-0.4-0.2-0.8-0.3-1.3-0.4c-0.5-0.2-1-0.3-1.5-0.5c-0.4-0.1-0.9-0.3-1.3-0.4c-0.5-0.1-1-0.3-1.5-0.4
				c-0.4-0.1-0.9-0.2-1.3-0.3c-0.5-0.1-1-0.2-1.5-0.3c-0.4-0.1-0.9-0.2-1.3-0.2c-0.5-0.1-1-0.2-1.5-0.2c-0.4-0.1-0.9-0.1-1.3-0.2
				c-0.5-0.1-1-0.1-1.5-0.2c-0.4,0-0.9-0.1-1.3-0.1c-0.5,0-1-0.1-1.5-0.1c-0.4,0-0.9,0-1.3,0c-0.5,0-1,0-1.6,0c-0.4,0-0.9,0-1.3,0
				c-0.5,0-1.1,0-1.6,0.1c-0.4,0-0.9,0-1.3,0.1c-0.5,0-1.1,0.1-1.6,0.2c-0.4,0-0.8,0.1-1.2,0.1c-0.6,0.1-1.1,0.2-1.7,0.3
				c-0.4,0.1-0.8,0.1-1.1,0.2c-0.7,0.1-1.4,0.3-2,0.4c-0.3,0.1-0.5,0.1-0.8,0.2c-0.9,0.2-1.9,0.5-2.8,0.7c-0.3,0.1-0.6,0.2-0.9,0.3
				c-0.6,0.2-1.2,0.4-1.8,0.6c-0.4,0.1-0.7,0.3-1.1,0.4c-0.5,0.2-1.1,0.4-1.6,0.6c-0.4,0.2-0.8,0.3-1.2,0.5c-0.5,0.2-1,0.4-1.5,0.7
				c-0.4,0.2-0.8,0.4-1.2,0.6c-0.5,0.2-1,0.5-1.4,0.7c-0.4,0.2-0.8,0.4-1.2,0.7c-0.5,0.3-0.9,0.5-1.4,0.8c-0.4,0.2-0.8,0.5-1.1,0.7
				c-0.4,0.3-0.9,0.6-1.3,0.9c-0.4,0.3-0.7,0.5-1.1,0.8c-0.4,0.3-0.9,0.6-1.3,1c-0.4,0.3-0.7,0.6-1.1,0.9c-0.4,0.3-0.8,0.7-1.2,1
				c-0.4,0.3-0.7,0.6-1,0.9c-0.4,0.4-0.8,0.7-1.2,1.1c-0.3,0.3-0.7,0.7-1,1c-0.4,0.4-0.8,0.8-1.1,1.2c-0.3,0.3-0.6,0.7-0.9,1
				c-0.4,0.4-0.7,0.9-1.1,1.3c-0.3,0.4-0.6,0.7-0.9,1.1c-0.4,0.5-0.7,1-1.1,1.4c-0.3,0.4-0.5,0.7-0.8,1.1c-0.4,0.5-0.7,1.1-1,1.6
				c-0.2,0.4-0.5,0.7-0.7,1.1c-0.4,0.6-0.7,1.2-1.1,1.9c-0.2,0.3-0.4,0.7-0.6,1c-0.5,0.9-1,1.9-1.4,2.9c0,0,0,0.1-0.1,0.1
				l-31.7,69.2c0,0,0,0,0,0c-0.2,0.5-0.5,0.9-0.7,1.3c0,0.1-0.1,0.1-0.1,0.2c-0.3,0.4-0.5,0.8-0.8,1.1c-0.1,0.1-0.1,0.1-0.2,0.2
				c-0.3,0.3-0.6,0.6-0.9,0.9c-0.1,0.1-0.1,0.1-0.2,0.1c-0.3,0.3-0.7,0.5-1.1,0.8c0,0-0.1,0-0.1,0.1c-0.4,0.2-0.7,0.4-1.1,0.6
				c0,0-0.1,0-0.1,0.1c-0.4,0.2-0.8,0.3-1.2,0.4c-0.1,0-0.1,0-0.2,0.1c-0.4,0.1-0.8,0.2-1.2,0.2c-0.1,0-0.2,0-0.2,0
				c-0.4,0.1-0.8,0.1-1.2,0.1c-0.1,0-0.1,0-0.2,0c-0.4,0-0.9,0-1.3-0.1c0,0-0.1,0-0.1,0c-0.4-0.1-0.8-0.1-1.2-0.2
				c-0.2,0-0.3-0.1-0.5-0.2c-0.3-0.1-0.5-0.2-0.8-0.3c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3
				c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.1-0.4-0.3-0.5-0.4c-0.2-0.2-0.4-0.3-0.5-0.5c-0.2-0.2-0.3-0.3-0.5-0.5
				c-0.2-0.2-0.3-0.4-0.5-0.6c-0.1-0.2-0.3-0.4-0.4-0.6c-0.2-0.3-0.3-0.6-0.5-0.8c-0.1-0.2-0.2-0.3-0.3-0.5l-31.7-69.2
				c-0.4-1-0.9-1.9-1.4-2.9c-0.1-0.1-0.1-0.2-0.2-0.3c-0.4-0.8-0.9-1.6-1.3-2.4c-0.1-0.2-0.3-0.4-0.4-0.6c-0.4-0.6-0.8-1.3-1.2-1.9
				c-0.2-0.3-0.3-0.5-0.5-0.7c-0.4-0.6-0.8-1.1-1.2-1.7c-0.2-0.3-0.4-0.5-0.6-0.8c-0.4-0.5-0.8-1-1.2-1.5c-0.2-0.2-0.4-0.5-0.6-0.7
				c-0.4-0.5-0.9-1-1.3-1.4c-0.2-0.2-0.4-0.5-0.7-0.7c-0.5-0.5-0.9-0.9-1.4-1.4c-0.2-0.2-0.4-0.4-0.7-0.6c-0.5-0.5-1-0.9-1.5-1.3
				c-0.2-0.2-0.4-0.4-0.6-0.5c-0.6-0.5-1.1-0.9-1.7-1.4c-0.2-0.1-0.3-0.3-0.5-0.4c-0.7-0.5-1.4-1-2.1-1.5c0,0-0.1,0-0.1-0.1
				c-1.6-1.1-3.2-2-4.8-2.9c-0.1-0.1-0.3-0.1-0.4-0.2c-0.7-0.4-1.3-0.7-2-1c-0.2-0.1-0.5-0.2-0.7-0.3c-0.6-0.3-1.2-0.5-1.8-0.8
				c-0.3-0.1-0.5-0.2-0.8-0.3c-0.6-0.2-1.2-0.4-1.7-0.7c-0.3-0.1-0.6-0.2-0.9-0.3c-0.6-0.2-1.1-0.4-1.7-0.5
				c-0.3-0.1-0.6-0.2-0.9-0.3c-0.6-0.2-1.1-0.3-1.7-0.5c-0.3-0.1-0.6-0.2-0.9-0.2c-0.6-0.1-1.2-0.3-1.8-0.4
				c-0.3-0.1-0.6-0.1-0.9-0.2c-0.6-0.1-1.2-0.2-1.8-0.3c-0.3,0-0.5-0.1-0.8-0.1c-0.7-0.1-1.3-0.2-2-0.2c-0.2,0-0.4,0-0.7-0.1
				c-0.9-0.1-1.7-0.1-2.6-0.2c0,0-0.1,0-0.1,0c-0.9,0-1.8,0-2.8,0c0,0-0.1,0-0.1,0c-0.8,0-1.7,0-2.5,0.1c-0.2,0-0.5,0-0.7,0.1
				c-0.6,0-1.3,0.1-1.9,0.2c-0.3,0-0.6,0.1-0.9,0.1c-0.6,0.1-1.2,0.1-1.7,0.2c-0.3,0.1-0.7,0.1-1,0.2c-0.6,0.1-1.1,0.2-1.6,0.3
				c-0.3,0.1-0.7,0.1-1,0.2c-0.5,0.1-1.1,0.2-1.6,0.4c-0.4,0.1-0.7,0.2-1.1,0.3c-0.5,0.1-1,0.3-1.6,0.5c-0.3,0.1-0.7,0.2-1,0.3
				c-0.5,0.2-1,0.3-1.5,0.5c-0.3,0.1-0.7,0.2-1,0.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.6,0.2-1.2,0.5-1.9,0.8c-0.1,0-0.1,0-0.2,0.1
				c-0.7,0.3-1.4,0.6-2.1,1c-0.2,0.1-0.4,0.2-0.6,0.3c-0.8,0.4-1.5,0.8-2.2,1.2c-9.6,5.4-17.7,13.8-23,25.2L74,237.1c0,0,0,0,0,0
				c21.4-39.7,79.9-38.5,99.2,3.4l22.4,48.7l0.1,0.1l0,0c0.1,0.1,0.1,0.3,0.2,0.4l28.5,62.1c0,0.1,0.1,0.1,0.1,0.1
				c0.4,0.8,0.7,1.5,1.1,2.2c0.2,0.3,0.3,0.5,0.5,0.8c0.3,0.5,0.6,1,0.9,1.4c0.2,0.3,0.4,0.6,0.6,0.9c0.3,0.4,0.6,0.8,0.9,1.2
				c0.2,0.3,0.5,0.6,0.7,0.9c0.3,0.4,0.6,0.7,0.9,1.1c0.2,0.3,0.5,0.5,0.8,0.8c0.3,0.3,0.6,0.7,0.9,1c0.3,0.3,0.5,0.5,0.8,0.8
				c0.3,0.3,0.6,0.6,1,0.9c0.3,0.2,0.6,0.5,0.9,0.7c0.3,0.3,0.7,0.5,1,0.8c0.3,0.2,0.6,0.4,0.9,0.6c0.4,0.2,0.7,0.5,1.1,0.7
				c0.3,0.2,0.6,0.4,0.9,0.6c0.4,0.2,0.7,0.4,1.1,0.6c0.3,0.2,0.6,0.3,1,0.5c0.4,0.2,0.8,0.4,1.1,0.5c0.3,0.1,0.7,0.3,1,0.4
				c0.4,0.2,0.8,0.3,1.2,0.5c0.3,0.1,0.7,0.3,1,0.4c0.4,0.1,0.8,0.3,1.2,0.4c0.3,0.1,0.7,0.2,1,0.3c0.4,0.1,0.9,0.2,1.3,0.3
				c0.3,0.1,0.6,0.2,1,0.2c0.5,0.1,1,0.2,1.4,0.2c0.3,0,0.6,0.1,0.9,0.1c0.7,0.1,1.4,0.2,2,0.2c0.9,0.1,1.8,0.1,2.6,0.1
				c0,0,0.1,0,0.1,0c0.2,0,0.5,0,0.7,0c0.6,0,1.2,0,1.8-0.1c0.3,0,0.6-0.1,0.8-0.1c0.5-0.1,1.1-0.1,1.6-0.2c0.3,0,0.6-0.1,0.9-0.1
				c0.5-0.1,1-0.2,1.6-0.3c0.3-0.1,0.6-0.1,0.9-0.2c0.5-0.1,1-0.2,1.5-0.4c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.2,1-0.3,1.5-0.5
				c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.2,1-0.4,1.4-0.6c0.3-0.1,0.6-0.3,0.8-0.4c0.5-0.2,0.9-0.5,1.4-0.7c0.3-0.1,0.5-0.3,0.8-0.5
				c0.5-0.3,0.9-0.6,1.4-0.8c0.3-0.2,0.5-0.3,0.8-0.5c0.5-0.3,0.9-0.6,1.4-1c0.2-0.2,0.5-0.4,0.7-0.5c0.5-0.4,0.9-0.7,1.3-1.1
				c0.2-0.2,0.4-0.4,0.6-0.6c0.4-0.4,0.9-0.9,1.3-1.3c0.2-0.2,0.4-0.4,0.5-0.6c0.4-0.5,0.9-1,1.3-1.5c0.1-0.2,0.3-0.3,0.4-0.5
				c0.5-0.6,0.9-1.2,1.3-1.8c0.1-0.1,0.2-0.2,0.2-0.3c1-1.5,2-3.2,2.8-5l28.5-62.1c0.1-0.1,0.1-0.3,0.2-0.4l0.1-0.1l0,0l22.4-48.7
				c19.2-42,77.8-43.1,99.2-3.4c0,0,0,0,0,0c0,0,0,0,0,0L398.2,150.5z"
                />
              </g>
            </g>
            <g>
              <path
                fill={logoColor}
                d="M552,354.6V178.7h-42.8c-4.1,0-7.6-0.7-10.5-2.2c-2.9-1.5-5.2-3.5-7-5.9c-1.8-2.4-3.1-5.1-3.9-8.1
			c-0.8-3-1.3-5.9-1.3-8.7c0-2.8,0.4-5.6,1.3-8.5c0.8-2.9,2.1-5.5,3.9-7.8c1.8-2.3,4.1-4.2,7-5.6c2.9-1.4,6.4-2.1,10.5-2.1h143.9
			c4.1,0,7.6,0.7,10.5,2.1c2.9,1.4,5.2,3.3,7,5.6c1.8,2.3,3.1,4.9,3.9,7.8c0.8,2.9,1.3,5.7,1.3,8.5c0,2.8-0.4,5.7-1.3,8.7
			c-0.8,3-2.2,5.7-4.1,8.1c-1.9,2.4-4.2,4.4-7,5.9c-2.8,1.5-6.3,2.2-10.4,2.2h-42.8v175.8H552z"
              />
              <path
                fill={logoColor}
                d="M775.5,354.6l-2.2-11.8c-5.4,5-11.8,9.1-19,12c-7.3,3-15.1,4.5-23.5,4.5h-6.2c-5.8,0-12-0.9-18.8-2.7
			c-6.7-1.8-12.9-4.8-18.6-9.1c-5.7-4.3-10.5-10.1-14.3-17.4c-3.8-7.3-5.7-16.4-5.7-27.4c0-10.6,1.9-19.5,5.6-26.6
			c3.7-7.1,8.7-12.8,15-17.1c6.3-4.3,13.5-7.4,21.8-9.2c8.3-1.9,17-2.8,26.2-2.8h28.8c-0.2-4.1-1-7.5-2.4-10.2
			c-1.4-2.7-3.3-4.9-5.6-6.4c-2.3-1.6-5-2.7-8.1-3.4c-3.1-0.7-6.3-1-9.7-1c-3.2,0-6.3,0.3-9.2,0.8c-3,0.6-6.2,1.3-9.5,2.2
			c-2.2,0.7-4.3,1.6-6.3,2.5c-2,0.9-4.2,2-6.9,3.1c-2.6,1.3-5.4,2-8.3,2.1c-2.9,0.1-5.7-0.3-8.5-1.1c-2.8-0.8-5.4-2.2-7.7-4.1
			c-2.3-1.9-4.2-4.2-5.5-7c-2.6-5.6-3-11.1-1.1-16.4c1.9-5.3,5.2-9.8,10.1-13.6c3.7-2.8,7.9-5.1,12.6-7c4.7-1.9,9.5-3.4,14.6-4.6
			c5-1.2,10.1-2.1,15.3-2.7c5.1-0.6,10.1-0.8,15-0.8c10.1,0,19.7,1.1,29,3.2c9.2,2.1,17.4,6,24.4,11.5c7,5.5,12.6,13.1,16.8,22.8
			c4.2,9.7,6.3,22.1,6.3,37.2v100.2H775.5z M764.5,288.2h-25.5c-5.4,0-9.5,1.3-12.3,3.8c-2.8,2.5-4.2,6-4.2,10.5
			c0,4.7,1.4,8.1,4.2,10.4c2.8,2.2,6.6,3.4,11.5,3.4h3.9c2.6,0,5.2-0.4,7.8-1.1c2.6-0.7,5-1.9,7.1-3.4c2.1-1.5,3.9-3.4,5.3-5.6
			c1.4-2.2,2.1-4.9,2.1-7.8V288.2z"
              />
              <path
                fill={logoColor}
                d="M952.1,354.6l-2.2-11.8c-5.4,5-11.8,9.1-19,12c-7.3,3-15.1,4.5-23.5,4.5h-6.2c-5.8,0-12-0.9-18.8-2.7
			c-6.7-1.8-12.9-4.8-18.6-9.1c-5.7-4.3-10.5-10.1-14.3-17.4c-3.8-7.3-5.7-16.4-5.7-27.4c0-10.6,1.9-19.5,5.6-26.6
			c3.7-7.1,8.7-12.8,15-17.1c6.3-4.3,13.5-7.4,21.8-9.2c8.3-1.9,17-2.8,26.2-2.8h28.8c-0.2-4.1-1-7.5-2.4-10.2
			c-1.4-2.7-3.3-4.9-5.6-6.4c-2.3-1.6-5-2.7-8.1-3.4c-3.1-0.7-6.3-1-9.7-1c-3.2,0-6.3,0.3-9.2,0.8c-3,0.6-6.2,1.3-9.5,2.2
			c-2.2,0.7-4.3,1.6-6.3,2.5c-2,0.9-4.2,2-6.9,3.1c-2.6,1.3-5.4,2-8.3,2.1c-2.9,0.1-5.7-0.3-8.5-1.1c-2.8-0.8-5.4-2.2-7.7-4.1
			c-2.3-1.9-4.2-4.2-5.5-7c-2.6-5.6-3-11.1-1.1-16.4c1.9-5.3,5.2-9.8,10.1-13.6c3.7-2.8,7.9-5.1,12.6-7c4.7-1.9,9.5-3.4,14.6-4.6
			c5-1.2,10.1-2.1,15.3-2.7c5.1-0.6,10.1-0.8,15-0.8c10.1,0,19.7,1.1,29,3.2c9.2,2.1,17.4,6,24.4,11.5c7,5.5,12.6,13.1,16.8,22.8
			c4.2,9.7,6.3,22.1,6.3,37.2v100.2H952.1z M941.2,288.2h-25.5c-5.4,0-9.5,1.3-12.3,3.8c-2.8,2.5-4.2,6-4.2,10.5
			c0,4.7,1.4,8.1,4.2,10.4c2.8,2.2,6.6,3.4,11.5,3.4h3.9c2.6,0,5.2-0.4,7.8-1.1c2.6-0.7,5-1.9,7.1-3.4c2.1-1.5,3.9-3.4,5.3-5.6
			c1.4-2.2,2.1-4.9,2.1-7.8V288.2z"
              />
              <path
                fill={logoColor}
                d="M1024.7,146c0-9.7,2.8-16.8,8.5-21.3c5.7-4.5,12.5-6.7,20.3-6.7s14.6,2.2,20.3,6.7c5.7,4.5,8.5,11.6,8.5,21.3
			v208.6h-57.7V146z"
              />
              <path
                fill={logoColor}
                d="M1167.5,194.7c-0.2,5.2,2.8,9.7,9,13.4c6.2,3.7,14.8,7.5,26,11.2l13.7,4.8c8.2,3,15.6,6.7,22.3,11.2
			c6.6,4.5,12.3,9.8,16.9,15.8c4.7,6.1,8.1,12.9,10.4,20.4c2.2,7.6,3.1,15.8,2.5,24.8c-1.3,20-9.4,35.5-24.2,46.5
			s-35,16.5-60.6,16.5c-12.5,0-24.5-1.4-36.1-4.1c-11.6-2.7-21.2-7-28.8-13c-2.6-2.2-4.9-4.8-6.7-7.7c-1.9-2.9-3.2-5.9-4.1-9.1
			c-0.8-3.2-1-6.5-0.4-9.9c0.6-3.5,1.9-6.8,3.9-9.9c2.1-3.2,4.9-5.6,8.7-7.3c3.7-1.7,7.5-2.6,11.2-2.8c4.9-0.2,8.7,0.6,11.6,2.2
			c2.9,1.7,5.6,3.3,8.3,4.8c3.2,2.1,7.3,3.8,12.3,5.2s12.3,2.1,21.8,2.1c7.8,0,13.9-1.4,18.2-4.2c4.3-2.8,6.5-7.3,6.7-13.4
			c0-2.6-1-5.1-3.1-7.6c-2.1-2.4-5-4.7-8.8-6.7c-3.8-2.1-8.3-4.1-13.3-6s-10.5-3.9-16.2-5.7c-2.2-0.7-4.6-1.6-7.1-2.5
			c-2.5-0.9-4.6-1.8-6.3-2.5c-10.6-4.5-19.2-10-25.8-16.7c-6.5-6.6-11.4-13.8-14.7-21.6c-3.3-7.7-4.9-15.7-5-23.9
			c-0.1-8.2,1.1-16,3.5-23.2c4.9-15.1,13.9-26.8,27-35c13.2-8.2,29.4-12.3,48.6-12.3c7.3,0,13.7,0.3,19.2,1
			c5.5,0.7,10.4,1.5,14.6,2.5c4.2,1,7.8,2.2,10.9,3.6c3.1,1.4,5.9,2.8,8.5,4.1c6.5,3.5,11.6,8.5,15.3,14.8
			c3.6,6.3,4.4,12.9,2.4,19.6c-1.9,5.8-5,9.9-9.4,12.3c-4.4,2.4-9.3,3.6-14.7,3.6c-2.1,0-4.4-0.4-7-1.1c-2.6-0.7-4.6-1.6-5.9-2.5
			c-3.4-2.2-7.7-4.2-12.9-5.9c-5.2-1.7-12-2.5-20.4-2.5c-6.7,0-12,1.4-15.8,4.1C1169.6,184.7,1167.6,188.9,1167.5,194.7z"
              />
              <path
                fill={logoColor}
                d="M1484.7,354.6h-54.6l-28.8-92.7l-30.2,92.7h-54.6l-41.4-138c-1.3-4.1-1.8-8.2-1.5-12.2
			c0.3-4,1.2-7.7,2.8-10.9c1.6-3.3,3.8-6.1,6.7-8.4c2.9-2.3,6.2-3.9,9.9-4.6c8-1.7,15.4-1,22.1,2c6.7,3,11.2,8.9,13.4,17.6
			l21.6,88.8l26-86.8c2.2-7.5,5.6-12.8,9.9-16c4.4-3.2,9.5-4.8,15.3-4.8c5.8,0,11,1.4,15.7,4.3c4.7,2.9,8.2,8.3,10.6,16.1l26,87.9
			l21-89.9c2.1-8.8,6.3-14.6,12.7-17.5c6.4-2.9,13.7-3.5,21.7-1.8c3.7,0.7,7,2.3,9.7,4.6c2.7,2.3,4.8,5.1,6.3,8.4
			c1.5,3.3,2.3,6.9,2.5,10.9c0.2,4-0.4,8.2-1.7,12.5L1484.7,354.6z"
              />
              <path
                fill={logoColor}
                d="M1645.7,354.6l-2.2-11.8c-5.4,5-11.8,9.1-19,12c-7.3,3-15.1,4.5-23.5,4.5h-6.2c-5.8,0-12-0.9-18.8-2.7
			c-6.7-1.8-12.9-4.8-18.6-9.1c-5.7-4.3-10.5-10.1-14.3-17.4c-3.8-7.3-5.7-16.4-5.7-27.4c0-10.6,1.9-19.5,5.6-26.6
			c3.7-7.1,8.7-12.8,15-17.1c6.3-4.3,13.5-7.4,21.8-9.2c8.3-1.9,17-2.8,26.2-2.8h28.8c-0.2-4.1-1-7.5-2.4-10.2
			c-1.4-2.7-3.3-4.9-5.6-6.4c-2.3-1.6-5-2.7-8.1-3.4c-3.1-0.7-6.3-1-9.7-1c-3.2,0-6.3,0.3-9.2,0.8c-3,0.6-6.2,1.3-9.5,2.2
			c-2.2,0.7-4.3,1.6-6.3,2.5c-2,0.9-4.2,2-6.9,3.1c-2.6,1.3-5.4,2-8.3,2.1c-2.9,0.1-5.7-0.3-8.5-1.1c-2.8-0.8-5.4-2.2-7.7-4.1
			c-2.3-1.9-4.2-4.2-5.5-7c-2.6-5.6-3-11.1-1.1-16.4c1.9-5.3,5.2-9.8,10.1-13.6c3.7-2.8,7.9-5.1,12.6-7c4.7-1.9,9.5-3.4,14.6-4.6
			c5-1.2,10.1-2.1,15.3-2.7c5.1-0.6,10.1-0.8,15-0.8c10.1,0,19.7,1.1,29,3.2c9.2,2.1,17.4,6,24.4,11.5c7,5.5,12.6,13.1,16.8,22.8
			c4.2,9.7,6.3,22.1,6.3,37.2v100.2H1645.7z M1634.8,288.2h-25.5c-5.4,0-9.5,1.3-12.3,3.8c-2.8,2.5-4.2,6-4.2,10.5
			c0,4.7,1.4,8.1,4.2,10.4c2.8,2.2,6.6,3.4,11.5,3.4h3.9c2.6,0,5.2-0.4,7.8-1.1c2.6-0.7,5-1.9,7.1-3.4c2.1-1.5,3.9-3.4,5.3-5.6
			c1.4-2.2,2.1-4.9,2.1-7.8V288.2z"
              />
              <path
                fill={logoColor}
                d="M1717.1,403.9V207.6c0-4.7,0.8-8.7,2.4-12.2c1.6-3.5,3.7-6.3,6.3-8.7c2.6-2.3,5.6-4.1,9-5.3
			c3.4-1.2,6.9-1.8,10.6-1.8c5.4,0,10.5,1.3,15.3,3.9c4.8,2.6,8.4,6.4,10.8,11.5c5.4-5,11.7-8.9,18.9-11.5
			c7.2-2.6,14.3-3.9,21.4-3.9c9.1,0,17.9,1.3,26.2,3.8c8.3,2.5,15.6,6.8,21.8,12.7c6.3,6,11.2,13.9,14.8,23.8
			c3.6,9.9,5.5,22.2,5.5,37v25.2c0,14.7-1.8,27.1-5.5,37c-3.6,9.9-8.6,17.8-14.8,23.8c-6.3,6-13.5,10.2-21.8,12.7
			c-8.3,2.5-17,3.8-26.2,3.8c-7.1,0-13.8-1-20.2-2.9c-6.3-2-12.2-4.8-17.6-8.5v56H1717.1z M1822.4,252.9c0-4.7-0.8-8.6-2.4-11.9
			c-1.6-3.3-3.6-5.9-6-8c-2.4-2.1-5-3.5-7.8-4.3s-5.4-1.3-7.8-1.3c-2.4,0-5.1,0.4-8,1.3c-2.9,0.8-5.6,2.3-8,4.3
			c-2.4,2.1-4.4,4.7-6,8c-1.6,3.3-2.4,7.2-2.4,11.9v34.4c0.2,4.5,1.1,8.3,2.8,11.3c1.7,3.1,3.7,5.6,6,7.4c2.3,1.9,4.9,3.2,7.7,4.1
			c2.8,0.8,5.4,1.3,7.8,1.3c2.4,0,5-0.4,7.8-1.3c2.8-0.8,5.4-2.3,7.8-4.3c2.4-2.1,4.4-4.7,6-7.8c1.6-3.2,2.4-7.2,2.4-12V252.9z"
              />
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default MainLogo;
