require("dotenv").config();

const ethers = require("ethers");
const abi = require('./ABIERC20.json');
const abiUniV2 = require('./ABIUniSwapRouterV2.json');


const iface = new ethers.Interface(abiUniV2);


const arg1 = 1; // first argument
const arg2 = 1; // second argument
const path = ['0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889','0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa']
const walletaddress = "0x6f6eb030334642D3D1527B3D1b05fb08C16852d5"

const encodedABI = iface.encodeFunctionData("swapExactTokensForTokens", [arg1, arg2, path, walletaddress, 50000 ]);

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