require("dotenv").config();
const aaCore = require("@alchemy/aa-core");
const ethers = require("ethers");


const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;


const SimpleSmartContractAccount = aaCore.SimpleSmartContractAccount;
const SmartAccountProvider = aaCore.SmartAccountProvider;
const SimpleSmartAccountOwner = aaCore.SimpleSmartAccountOwner;
const LocalAccountSigner = aaCore.LocalAccountSigner;

const mnemonicToAccount = require("viem/accounts").mnemonicToAccount;
const polygonMumbai = require("viem/chains").polygonMumbai;
const toHex = require("viem").toHex;

  const SIMPLE_ACCOUNT_FACTORY_ADDRESS =
    "0x9406Cc6185a346906296840746125a0E44976454";
  const owner = LocalAccountSigner.mnemonicToAccountSigner
  (
    process.env.mnemonic
    );

  const provider = new SmartAccountProvider
  (
    API_URL_ALCHEMY, //change path
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // entryPointAddress
    polygonMumbai // chain
  )
  .connect(
    (rpcClient) =>
      new SimpleSmartContractAccount({
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        chain: polygonMumbai,
        factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
        rpcClient,
        owner
     
      })
  );

  
    
  // 3. send a UserOperation
  async function send(){
  const { hash } = await provider.sendUserOperation({
    target: "0x5eA59ee2Ec4588Cf515bE33F44239eb443F62cF7",
    data: "0x1adc7383",
    value: 0, // value: bigint or undefined
  });

}
send()


// function encodePacked(params = []){

//     let types = []
//     let values = []

//     params.forEach(itemArray => {
//         types.push(itemArray[0])
//         values.push(itemArray[1])
//     })

//     return ethers.solidityPacked(types, values)
//   }


// console.log(encodePacked([
// ["address", "0x2924a6C59115299A5945cA1dF6D73ABA526C97bd"],
// ["uint256", 15]
// ]))




async function main() {
  // Connect to the network
  const provider = new ethers.AlchemyProvider(80001, API_KEY_ALCHEMY);
 

 
  let wallet = new ethers.Wallet(PRIVATE_KEY);
   // Connect the wallet to the provider
  wallet = wallet.connect(provider);

  console.log(provider)
  // The transaction data

  let transaction = {
      to: "0x3a085Fa64b3d4DF98e3BF4a869Ea0d6E3082d8c3",
      value: 1, 
  };

  // Sign the transaction
  let signedTransaction = await wallet.signTransaction(transaction);

  // Send the transaction
  let tx = await wallet.sendTransaction(transaction);
  console.log(tx.hash);
}

// main();