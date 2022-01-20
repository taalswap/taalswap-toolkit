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
        default:
            return 0;
    }
};


const NetworkButtons: React.FC<NetworkButtonsProps> = ({login, logout, account, blockchain, klaytn}) => {
    const chainId = window.localStorage.getItem("chainId") ?? blockchain;
    const [index, setIndex] = useState(() => getInitialChainId(chainId));
    const { onPresentConnectModal } = useWalletModal(login, logout, account, blockchain, klaytn);


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
            default:
                setIndex(0);
                break;
        }
    }, [chainId]);

    const handleClick = (newIndex: number) => {
        if (newIndex !== index) {
            newIndex === 1
                ? window.localStorage.setItem("prevChainId", blockchain)
                : window.localStorage.setItem("prevChainId", klaytn);
            newIndex === 1
                ? window.localStorage.setItem("chainId", klaytn)
                : window.localStorage.setItem("chainId", blockchain); // Should be called before login
            if(window.localStorage.getItem("crossChain") !== null) {
                newIndex === 1
                    ? window.localStorage.setItem("crossChain", blockchain)
                    : window.localStorage.setItem("crossChain", klaytn);
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
    </ButtonMenu>
);}

export default NetworkButtons;
