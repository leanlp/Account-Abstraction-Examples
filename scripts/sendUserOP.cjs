require("dotenv").config({ path: '../.env' });
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
    process.env.mnemonic3
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
    target:  "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff", // Uniswap V2 Router     "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", //matic    // 
    data: "0x38ed173900000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000c73f8283fc65232834e445703300d760bd231a760000000000000000000000000000000000000000000000000000000064c8201400000000000000000000000000000000000000000000000000000000000000020000000000000000000000009c3c9283d3e44854697cd22d3faa240cfb032889000000000000000000000000a6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",
    value: 0, // value: bigint or undefined
  });

}
send()


// address ERC20 = 0x0723c66f9526D88902513db069d1DD187521AA37
// walletAddressSDk1 0xf86d8f08602d1f9D1A5d9663616E21B3B4a1dAB5
// uniRouter = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff



// walletAddressMM3=0x4F8B8E57EA02c3A438B2d2A756b9D7360932172B
//walletAddressSDK3AlchemyNew=0x052800b6968284B4Fc30C0cb2D59505Eb2a3183d