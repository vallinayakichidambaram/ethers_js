const { ethers } = require("ethers")

const INFURA_ID = ''; //Your Infura ID here
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const daiABI = [
    "function name() view returns(string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns(uint256)",

    "event Transfer(address indexed from, address indexed to, uint amount)"

];
const contract = new ethers.Contract(daiAddress,daiABI,provider);


const main = async() => {

    const block = await provider.getBlockNumber();

    const transferEvents = await contract.queryFilter('Transfer',block -5,block);
    console.log(transferEvents);


}

main()