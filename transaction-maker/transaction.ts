import { Connection, PublicKey, Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const sender = Keypair.generate();
const recipient = new PublicKey("J8oRhiYkHY1czR2faHrKcB6V4D2tvJnK7ckDecatqSJW");

const airdropSignature = await connection.requestAirdrop(sender.publicKey, 1 * LAMPORTS_PER_SOL);
await connection.confirmTransaction(airdropSignature, "confirmed");

const instruction = SystemProgram.transfer({
  fromPubkey: sender.publicKey,
  toPubkey: recipient,
  lamports: 0.1 * LAMPORTS_PER_SOL,
});

const transaction = new Transaction().add(instruction);

const signature = await connection.sendTransaction(transaction, [sender]);

await connection.confirmTransaction(signature, "confirmed");

console.log("Transaction successful. Signature:", signature);
