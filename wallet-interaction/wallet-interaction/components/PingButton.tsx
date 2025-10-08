// components/PingButton.tsx

import { FC } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js";

export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = async () => {
    if (!publicKey) {
      alert("Please connect your wallet.");
      return;
    }

    const programId = new PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
    const dataAccount = new PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");

    const instruction = new TransactionInstruction({
      keys: [{ pubkey: dataAccount, isSigner: false, isWritable: true }],
      programId,
      data: Buffer.from([]),
    });

    const transaction = new Transaction().add(instruction);

    try {
      const signature = await sendTransaction(transaction, connection);
      console.log("Transaction sent:", signature);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return <button onClick={onClick}>Ping!</button>;
};
