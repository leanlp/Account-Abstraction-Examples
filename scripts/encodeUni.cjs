require("dotenv").config();

const ethers = require("ethers");
const abi = require('./ABIERC20.json');
const abiUniV2 = require('./ABIUniSwapRouterV2.json');


const iface = new ethers.Interface(abiUniV2);
const deadline = Math.floor(Date.now() / 1000) + 60 * 20; 

const arg1 = 1000000000000000n; // WMATIC
const arg2 = 1; // WETH
const path = ['0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889','0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa'] 
const walletaddress = "0xf86d8f08602d1f9D1A5d9663616E21B3B4a1dAB5"

const encodedABI = iface.encodeFunctionData("swapExactTokensForTokens", [arg1, arg2, path, walletaddress, deadline ]);

console.log(encodedABI);




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