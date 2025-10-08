// pages/index.tsx

import { NextPage } from "next";
import WalletContextProvider from "./components/WalletContextProvider";
import { AppBar } from "./components/AppBar";
import { PingButton } from "./components/PingButton";

const Home: NextPage = () => {
  return (
    <WalletContextProvider>
      <AppBar />
      <PingButton />
    </WalletContextProvider>
  );
};

export default Home;
