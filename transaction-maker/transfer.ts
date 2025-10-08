import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
  Keypair,
  clusterApiUrl
} from "@solana/web3.js";
import "dotenv/config";

const secretKeyString = process.env.SECRET_KEY;

if (!secretKeyString) {
  console.error("Secret key is not set in environment variables");
  process.exit(1);
}

const secretKeyUint8Array = Uint8Array.from(JSON.parse(secretKeyString));
const senderKeypair = Keypair.fromSecretKey(secretKeyUint8Array);

console.log(`suppliedToPubkey: ${secretKeyString}`);

const toPubkey = new PublicKey(secretKeyString);

const connection = new Connection(clusterApiUrl("devnet"));

console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
);

console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,
);
console.log(`Transaction signature is ${signature}!`);