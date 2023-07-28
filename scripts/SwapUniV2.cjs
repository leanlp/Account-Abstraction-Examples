const ethers = require('ethers');
require("dotenv").config({ path: '../.env' });
const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;



  // Connect to the network
  const provider = new ethers.AlchemyProvider(80001, API_KEY_ALCHEMY);


const wallet = new ethers.Wallet(PRIVATE_KEY, provider); // Your wallet
const uniswapRouterAddress = '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'; // Uniswap V2 router address on Polygon

// Token addresses on Polygon
const maticAddress = '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889';
const weth = '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa';

const uniswapRouterABI = [
    'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] path, address to, uint deadline) external returns (uint[] amounts)',
    'function WETH() external pure returns (address)',
];
const erc20ABI = ['function approve(address spender, uint256 amount) public returns(bool)'];

async function swapMaticForUni(amountIn, amountOutMin) {
    const uniswapRouter = new ethers.Contract(uniswapRouterAddress, uniswapRouterABI, wallet);

    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time
    const path = [maticAddress, weth];

    const tx = await uniswapRouter.swapExactTokensForTokens(
        ethers.parseUnits(amountIn.toString(), 'ether'),
        ethers.parseUnits(amountOutMin.toString(), 'ether'),
        path,
        wallet.address, // recipient is the same wallet
        deadline,
        { gasLimit: 1000000, gasPrice: ethers.parseUnits('5', 'gwei') }
    );

    console.log(`Transaction hash: ${tx.hash}`);

    const receipt = await tx.wait();
    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
}

swapMaticForUni(0.1, 0); // Swap 1 MATIC for at least 0.1 UNI