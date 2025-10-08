import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKeyMyString = new PublicKey("J8oRhiYkHY1czR2faHrKcB6V4D2tvJnK7ckDecatqSJW");
const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connection object is: confirmed");
const balance = await connection.getBalance(publicKeyMyString);
console.log(`Balance is: ${balance}`);
console.log("Connection object is confirmed and balance is fetched");

const solBalance = balance / LAMPORTS_PER_SOL;
console.log(`Balance in SOL is: ${solBalance}`);
console.log("Connection object is confirmed and balance in SOL is fetched");

