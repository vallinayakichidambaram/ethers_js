const {ethers} = require ("ethers")

const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const daiABI = [
    "function name() view returns(string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns(uint256)"

];
const INFURA_ID = '';

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const contract = new ethers.Contract(daiAddress,daiABI,provider);

const main = async() => {

    const senderAddress = '0xf9a66031d68692dfa09ac3ef836129819e527979';

    const ERC20_NAME = await contract.name();
    const ERC20_SYMBOL = await contract.symbol();
    const ERC20_DECIMAL = await contract.decimals();
    const ERC20_TOTALSUPPLY = await contract.totalSupply();
    const ERC20_BALANCE = await contract.balanceOf(senderAddress);

    console.log(`ERC20 Name : ${ERC20_NAME}`)
    console.log(`ERC20 Symbol : ${ERC20_SYMBOL}`)
    console.log(`ERC20 Decimal : ${ERC20_DECIMAL}`)
    console.log(`ERC20 Total Supply  : ${ERC20_TOTALSUPPLY}`)

    console.log(`Balance of Address ${senderAddress} --> ${ethers.utils.formatUnits(ERC20_BALANCE)} DAI`)

    
}

main()