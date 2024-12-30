const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const whitelist = [
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
];
const leaves = whitelist.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const rootHash = merkleTree.getRoot().toString("hex");
console.log(`Whitelist Merkle Root: 0x${rootHash}`);
whitelist.forEach((address) => {
  const proof = merkleTree.getHexProof(keccak256(address));
  console.log(`Address: ${address} Proof: ${proof}`);
});
