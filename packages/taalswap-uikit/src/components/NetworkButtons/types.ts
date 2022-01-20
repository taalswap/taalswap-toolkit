import { Login } from "../../widgets/WalletModal/types";

export interface NetworkButtonsProps {
    login: Login;
    logout:()=>void;
    account?: string;
    blockchain: string;
    klaytn:string;
}
