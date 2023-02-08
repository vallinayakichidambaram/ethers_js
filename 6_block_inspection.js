const { ethers } = require("ethers")

const INFURA_ID = ''; //Your Infura ID here
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);


const main = async() => {

    const latestBlock = await provider.getBlockNumber();
    console.log(`Latest Block --> ${latestBlock}`)


    const blockInfo = await provider.getBlock(latestBlock);
    console.log(blockInfo)

    const { blockTransactions } = await provider.getBlockWithTransactions(latestBlock)
    console.log('First Transaction ---->\n')
    console.log(blockTransactions[0])
}

main()