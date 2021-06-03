import React from "react";
import Link from "../../components/Link/Link";

const TopMenu = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  return (
    <div>
      <input type="button" onClick={onClick} className="mobilenav_icon" />
      {showResults ? <Results /> : null}
    </div>
  );
};

const Results = () => (
  <div className="hide_menu" id="results">
    <span className="arrow_box">-</span>
    <ul>
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
          <span className="liquidity_icon">liquidity_icon</span>Pools
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3001/farms" style={{ textDecoration: "none" }}>
          <span className="farms_icon">Farms_icon</span>Farming
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3001/pools" style={{ textDecoration: "none" }}>
          <span className="pools_icon">Pools_icon</span>Staking
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3001" style={{ textDecoration: "none" }}>
          <span className="pools_icon">connect_icon</span>Coneect Wallet
        </Link>
      </li>
    </ul>
  </div>
);

export default TopMenu;
