import React, {useEffect, useState } from "react";
import ButtonMenuItem from "../ButtonMenu/ButtonMenuItem";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import {ConnectorNames, useWalletModal} from "../../widgets/WalletModal";
import {NetworkButtonsProps} from "./types";

const getInitialChainId = (chainId: string | null) => {
    switch (chainId) {
        case "1":
        case "3":
        case "4":
            return 0;
        case "1001":
        case "8217":
            return 1;
        case "56":
        case "97":
            return 2;
        case "137":
        case "80001":
            return 3;
        case "1313161554":
        case "1313161555":
            return 4;
        default:
            return 0;
    }
};


const NetworkButtons: React.FC<NetworkButtonsProps> = ({login, logout, account, blockchain, klaytn, binance, polygon, aurora}) => {
    const chainId = window.localStorage.getItem("chainId") ?? blockchain;
    const [index, setIndex] = useState(() => getInitialChainId(chainId));
    const { onPresentConnectModal } = useWalletModal(login, logout, account, blockchain, klaytn, polygon, aurora);


    useEffect(() => {
        switch (chainId) {
            case "1":
            case "3":
            case "4":
                setIndex(0);
                break;
            case "1001":
            case "8217":
                setIndex(1);
                break;
            case "56":
            case "97":
                setIndex(2);
                break;
            case "137":
            case "80001":
                setIndex(3);
                break;
            case "1313161554":
            case "1313161555":
                setIndex(4);
                break;
            default:
                setIndex(0);
                break;
        }
    }, [chainId]);

    const handleClick = (newIndex: number) => {
        if (newIndex !== index) {
            // newIndex === 1
            //     ? window.localStorage.setItem("prevChainId", blockchain)
            //     : window.localStorage.setItem("prevChainId", klaytn);
            // newIndex === 1
            //     ? window.localStorage.setItem("chainId", klaytn)
            //     : window.localStorage.setItem("chainId", blockchain); // Should be called before login
            // if(window.localStorage.getItem("crossChain") !== null) {
            //     newIndex === 1
            //         ? window.localStorage.setItem("crossChain", blockchain)
            //         : window.localStorage.setItem("crossChain", klaytn);
            // }

            if (index === 0) window.localStorage.setItem("prevChainId", blockchain);
            if (index === 1) window.localStorage.setItem("prevChainId", klaytn);
            if (index === 2) window.localStorage.setItem("prevChainId", binance);
            if (index === 3) window.localStorage.setItem("prevChainId", polygon);
            if (index === 4) window.localStorage.setItem("prevChainId", aurora);

            if (newIndex === 0) window.localStorage.setItem("chainId", blockchain);
            if (newIndex === 1) window.localStorage.setItem("chainId", klaytn);
            if (newIndex === 2) window.localStorage.setItem("chainId", binance);
            if (newIndex === 3) window.localStorage.setItem("chainId", polygon);
            if (newIndex === 4) window.localStorage.setItem("chainId", aurora);

            if(window.localStorage.getItem("crossChain") !== null) {
                newIndex === 1
                  ? window.localStorage.setItem("crossChain", blockchain)
                  : newIndex === 2
                    ? window.localStorage.setItem("crossChain", klaytn)
                    : newIndex === 3
                      ? window.localStorage.setItem("crossChain", polygon)
                        : window.localStorage.setItem("crossChain", aurora);
            }

            window.localStorage.setItem("refresh", "true"); // Should be called before login
            account === undefined ? onPresentConnectModal() : login(ConnectorNames.Injected);
            setIndex(newIndex);
        }
    };

    return (
    <ButtonMenu scale="xs" activeIndex={index} onItemClick={handleClick}>
        <ButtonMenuItem style={{ height: "30px", fontSize: "13x" }}>Ethereum</ButtonMenuItem>
        <ButtonMenuItem style={{ height: "30px", fontSize: "13px" }}>Klaytn</ButtonMenuItem>
        <ButtonMenuItem style={{ height: "30px", fontSize: "13px" }}>Binance</ButtonMenuItem>
        <ButtonMenuItem style={{ height: "30px", fontSize: "13px" }}>Polygon</ButtonMenuItem>
        <ButtonMenuItem style={{ height: "30px", fontSize: "13px" }}>Aurora</ButtonMenuItem>
    </ButtonMenu>
);}

export default NetworkButtons;
