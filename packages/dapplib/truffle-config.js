require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pumpkin under gesture photo equal gas'; 
let testAccounts = [
"0xae6f3829e08e94a4e9483882df2a5765638f135b5c9230d9aa916fcc6b1b51b5",
"0x1690ef6dcde5694c324ead2b299dabaefa13b3bf20bf73ed57cb231bed9af007",
"0x2ab39e67a1e472ccf12f9187c66c1215bff9999bddb1dcfa0ca48afc271d82f0",
"0x2e4fe9db63ebacc89b59d8dac40a75299e6598640d0dc9498d84645a5cb1eda9",
"0x85b23d375609a1412872bb202cb8d116ba9dd394c2178450b11b06df6d2c6c42",
"0x160debc62f4ffa5a1ed0be3cbcd2867eea1ce1326af3ba19f5d9681e19830c12",
"0x26e06132bd1798ddcf789d74a188734b9c609523d96a72605f98edd5171d0010",
"0x00a69adabf3b0a6f7d3fe48eea1da258262351232e6ff0b7251cdd96fe8c4eab",
"0xc153116526e2ddf91c6b7a4a18d2b67badf8fe951d50d79f4bbe7c45bd363c32",
"0x77e59bae2aed2f079d6cde4f3d9567de403e7ecb93b4500cc678d9ec8d78e2c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
