const { ethers } = require ("ethers");

const INFURA_ID = ''; //Your Infura ID here


//Connected to Goreli Test Network
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)


const account1 = ''; //Sender Address
const account2 = ''; //Receiver Address

const privateKey1 = ''; //Sender Private Key

const wallet = new ethers.Wallet(privateKey1,provider); //New wallet using private key

const linkAddress = '0x326c977e6efc84e512bb9c30f76e30c160ed06fb'; //Contract Address
const ERC20_ABI = [

    "function balanceOf(address) view returns (uint256)",
    "function transfer(address,uint256) returns(bool)"

];

//connecting to the contract using a provider
//Provider - only read
//Signer or wallet - both read and write

const contract = new ethers.Contract(linkAddress,ERC20_ABI,provider)


const main = async() => {

    //To call "read" functions, you can directly call
    const senderBalanceBefore = await contract.balanceOf(account1);
    console.log(`Sender LINK --> ${ethers.utils.formatEther(senderBalanceBefore)} LINK`)
    const recieverBalanceBefore = await contract.balanceOf(account2);
    console.log(`Reciever LINK --> ${ethers.utils.formatEther(recieverBalanceBefore)} LINK`)

    //To execute "write" functions, you need to connect to the contract 
    //with a wallet and then call the function
    const contractWallet = contract.connect(wallet);
    const tx = await contractWallet.transfer(account2,balance);

    await tx.wait();

    console.log(tx);


    const senderBalanceAfter = await contract.balanceOf(account1);
    console.log(`Sender LINK --> ${ethers.utils.formatEther(senderBalanceAfter)} LINK`)
    const recieverBalanceAfter = await contract.balanceOf(account2);
    console.log(`Reciever LINK --> ${ethers.utils.formatEther(recieverBalanceAfter)} LINK`)


}


main()