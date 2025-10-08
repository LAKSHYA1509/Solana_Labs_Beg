import {Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl} from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('devnet'));
console.log('Connection object is: confirmed');
let String = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN';
const address = new PublicKey(`${String}`);
const balance = await connection.getBalance(address);
console.log(`Balance is: ${balance}`);
console.log('Connection object is confirmed and balance is fetched');
const solBalance = balance / LAMPORTS_PER_SOL;
console.log(`Balance in SOL is: ${solBalance}`);
console.log('Connection object is confirmed and balance in SOL is fetched');
