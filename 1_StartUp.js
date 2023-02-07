const { ethers } = require("ethers")

const INFURA_ID = ''; //Your Infura ID here
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);


//Connection to the blockchain via Infura Node
//Infura is a node provider - instead of running your node, you can use other's node for developing application
//Address, block and transaction hash are taken from etherscan for reference
const address = '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe';

const block = 16567619

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`Balance of ${address} is --> ${ethers.utils.formatEther(balance)} ETH`)
    const transactionCount = await provider.getTransactionCount(address)
    console.log(`Transaction count of ${address} is ${transactionCount}`)

    const addressCode = await provider.getCode(address);
    console.log(`AddressCode at ${address} is ${addressCode}`)

    const storage = await provider.getStorageAt(address, 0)
    console.log(`Storage of ${address} is ${storage}`)

    const blockData = await provider.getBlock(block);
    console.log(`Block Hash of ${block} : ${blockData.hash}`)

    const network = await provider.getNetwork()
    console.log(network);

    const blockNumber = await provider.getBlockNumber();
    console.log(`Recent block is ${blockNumber}`)

    const gasPrice = await provider.getGasPrice()
    console.log(`Gas Price: ${ethers.utils.formatUnits(gasPrice, 'gwei')} GWEI`)

    const transaction = await provider.getTransaction('0xbfd4d3da7beeb34467cf3c535f2bb2b8d37f48bebc794924f54322eb8f5deabe');
    console.log(transaction)
}


main()


