import {Keypair} from '@solana/web3.js';
import "dotenv/config";
import {getKeypairFromEnvironment} from '@solana-developers/helpers';

const keypair = Keypair.generate();
console.log('Public Key:', keypair.publicKey.toBase58());
console.log('Secret Key:', (keypair.secretKey).toString());


const newkey = getKeypairFromEnvironment("SECRET_KEY");
console.log('Public Key:');