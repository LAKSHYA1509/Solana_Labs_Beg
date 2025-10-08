import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKeyMyString = new PublicKey("So11111111111111111111111111111111111111112");
const connection = new Connection(clusterApiUrl("mainnet-beta"));
console.log("Connection object is: confirmed");
const balance = await connection.getBalance(publicKeyMyString);
console.log(`Balance is: ${balance}`);
console.log("Connection object is confirmed and balance is fetched");

const solBalance = balance / LAMPORTS_PER_SOL;
console.log(`Balance in SOL is: ${solBalance}`);
console.log("Connection object is confirmed and balance in SOL is fetched");

