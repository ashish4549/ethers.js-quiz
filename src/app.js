const { ethers } = require('ethers');

async function main() {
  // Question 1: Connect to an Ethereum node
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY');

  // Question 2: Interact with a smart contract
  const contractAddress = '0x1234567890123456789012345678901234567890'; // Replace with your contract address
  const contractABI = ['function getName() view returns (string)']; // Replace with your contract ABI

  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Question 3: Call a function on the smart contract
  try {
    const name = await contract.getName();
    console.log('Name:', name);
  } catch (error) {
    console.error('Error calling contract function:', error.message);
  }

  // Question 4: Send a transaction to the smart contract
  const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider); // Replace with your private key

  const contractWithSigner = contract.connect(wallet);

  const transaction = await contractWithSigner.setName('NewName'); // Replace with your contract function and parameters
  console.log('Transaction Hash:', transaction.hash);

  // Add more code for additional questions

}

main();
