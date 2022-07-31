require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain punch hunt prize tail situate'; 
let testAccounts = [
"0x601eb5d82bedd27791abf35059c512aa8995fe33da7fcc12fafcacc823380865",
"0xb95dc6702d339daeec46abc50cdbaf8afa981c5af869fe40233d9fa6c8e92bc2",
"0xdb9dd5d93194693d552c81f484c7620539257a989ea9dc45f269c5024b5e8e80",
"0x6f200c042bf246bc96495b1d8a180fc2a790680edf5207a231d61a76767f9c80",
"0xa54b21dd755ae36e5c805345ac4363f0672ce367ae9a650703e367637f92f582",
"0xbd373e3a9ea05ac3d06ae23f91fefe2e9aeb7e73bf6fd2afc09b0b649c4f6286",
"0x384fe7a7260c26c4498c2f20680663bd91312e19403e1e87dfcacc41772cca52",
"0x14c7057ccc7df1948b17fe45fef66a4e40ce5458419526cf8c78d24a6b874d76",
"0xba3ade47db137cb8f5363232bc30603e131eea0c0079e15fbd3b13ac3f165502",
"0x4d621ff7052544912e31440fd583cb77989854da4fa6be877ec742bff908759b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

