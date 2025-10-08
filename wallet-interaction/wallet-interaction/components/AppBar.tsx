// components/AppBar.tsx

import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar: FC = () => {
  return (
    <div>
      <span>My Solana App</span>
      <WalletMultiButton />
    </div>
  );
};
