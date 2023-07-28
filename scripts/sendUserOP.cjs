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
    target: "0x0723c66f9526D88902513db069d1DD187521AA37",
    data: "0xa9059cbb0000000000000000000000003a085fa64b3d4df98e3bf4a869ea0d6e3082d8c30000000000000000000000000000000000000000000000000000000000000001",
    value: 0, // value: bigint or undefined
  });
}
send()


// address ERC20 = 0x0723c66f9526D88902513db069d1DD187521AA37
// wallet 0xf86d8f08602d1f9D1A5d9663616E21B3B4a1dAB5