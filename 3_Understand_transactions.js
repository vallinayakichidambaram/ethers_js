const { ethers } = require ("ethers");

const INFURA_ID = ''; //Your Infura ID here


//Connected to Goreli Test Network
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

//We need 2 accounts - sender and receiver
const account1 = ''; //Sender - Public Key from Metamask
const account2 = '0x55662d33a29b14ea99168c6cc77deed31e61c438'; //Receiver
//Account from Etherscan

const privateKey1 = ''; //Account1 Private Key

const wallet = new ethers.Wallet(privateKey1,provider); //New wallet using private key

const main = async() => {

   

    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)
    console.log(`Sender Balance before --> ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`Reciever Balance before --> ${ethers.utils.formatEther(recieverBalanceBefore)}`)



    //wallet inherits Signer. So we can call sendTransaction
    const tx = await wallet.sendTransaction({
        to: account2, 
        value: ethers.utils.parseEther('0.001'
        )});
    //Wait for the transaction to be mined
    await tx.wait();

    console.log(tx);


    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)
    console.log(`Sender Balance After --> ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`Reciever Balance After --> ${ethers.utils.formatEther(recieverBalanceAfter)}`)


}

main()