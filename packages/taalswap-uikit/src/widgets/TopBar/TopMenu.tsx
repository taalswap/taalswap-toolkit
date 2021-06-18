import React, { JSXElementConstructor, MutableRefObject, RefObject, useEffect, useReducer, useRef } from "react";
import Link from "../../components/Link/Link";
import { Icon, InlineIcon } from "@iconify/react";
import gitbookIcon from "@iconify-icons/simple-icons/gitbook";
import linkExternal from "@iconify-icons/fe/link-external";
import { marginRight } from "styled-system";

const TopMenu = () => {
  const modalEl = useRef<HTMLDivElement>(null);
  const [showResults, setShowResults] = React.useState(Boolean);

  const onClick = () => {
    const result = showResults;
    console.log(`result : ${result}`);
    console.log(`showResults : ${showResults}`);
    setShowResults(!result);
  };

  const handleClickOutside = ({ target }: any) => {
    console.log(`outside result : ${showResults}`);
    if (showResults) {
      console.log("close");
      console.log(showResults);
      console.log("-----");
      setShowResults(false);
    }
    // if(showResults && !modalEl.current(target)) setShowResults(false)
  };

  useEffect(() => {
    console.log(`useEffect result : ${showResults}`);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input type="button" onClick={onClick} className="mobilenav_icon" />
      {/* {showResults ? <Results ref={modalEl} /> : null} */}
      {showResults && <Results ref={modalEl} />}
    </div>
  );
};

const Results = React.forwardRef<HTMLDivElement>(() => (
  <div className="hide_menu" id="results">
    <span className="arrow_box">-</span>
    <ul style={{ listStyle: "none" }}>
      <li>
        <Link href="http://localhost:3001" style={{ color: "#00ab55", textDecoration: "none" }}>
          <span className="home_icon">home_icon</span>Home
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3000/#/swap" style={{ textDecoration: "none" }}>
          <span className="swap_icon">swap_icon</span>Swap
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3000/#/pool" style={{ textDecoration: "none" }}>
          <span className="liquidity_icon">liquidity_icon</span>Liquidity
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3001/farms" style={{ textDecoration: "none" }}>
          <span className="farms_icon">Farms_icon</span>Farms
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3001/pools" style={{ textDecoration: "none" }}>
          <span className="liquidity_icon">liquidity_icon</span>Staking
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3001" style={{ textDecoration: "none" }}>
          <span className="connect_icon">connect_icon</span>Connect Wallet
        </Link>
      </li>
      <li>
        <Link href="https://taalswap.finance" target="_blank" style={{ textDecoration: "none" }}>
          {/* <span> */}
          <Icon icon={linkExternal} width="22" style={{ marginRight: "6px", color: "#637381", padding: "0" }} />
          {/* </span> */}
          IDO
        </Link>
      </li>
      <li>
        <Link href="https://taalswap.gitbook.io/taalswap-docs-v-2-0" target="_blank" style={{ textDecoration: "none" }}>
          {/* <span> */}
          <Icon icon={gitbookIcon} width="20" style={{ marginRight: "8px", color: "#637381" }} />
          {/* </span> */}
          Docs
        </Link>
      </li>
    </ul>
  </div>
));

export default TopMenu;
