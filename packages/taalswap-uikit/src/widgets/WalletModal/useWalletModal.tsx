import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string, blockchain?: string, klaytn?: string, binance?: string, polygon?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} login={login} logout={logout} blockchain={blockchain ?? "1"} klaytn={klaytn ?? "8217"} binance={binance ?? "56"} polygon={polygon ?? "137"}/>);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
