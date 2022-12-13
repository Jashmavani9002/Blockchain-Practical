const EDDSA = require ("elliptic" ).eddsa;

const eddsa = new EDDSA ("ed25519" );

// / uuid/v1 creates timestamp dependent ids
const uuidV1 = require("uuid/v1") ;
// used for hashing data to 256 bits string
const SHA256 = require ("crypto-js/sha256");
class chainUtil{
    static genKeyPain(secret) {
        return eddsa. keyFromsecret(secret) ;
    }
    static id() {
        return uuidV1 ();
        }
        // / hashes any data using SHA256
        static hash(data) {
            return SHA256 (JSON. stringify (data)).tostring();
        }
        // verifies the signed hash by decrypting it with public key
        // and matching it with the hash
        static verifySignature (publicKey, signature, dataHash) {
            return eddsa.keyFromPublic(publicKey).verify(datalash,signature);
        }
}

module.exports = chainUtil;
