require("dotenv").config();

const ethers = require("ethers");
const abi = require('./ABIERC20.json');
const abiUniV2 = require('./ABIUniSwapRouterV2.json');


const iface = new ethers.Interface(abi);


const arg1 = "0x3a085Fa64b3d4DF98e3BF4a869Ea0d6E3082d8c3"; // first argument
const arg2 = 1; // second argument

const encodedABI = iface.encodeFunctionData("transfer", [arg1, arg2]);

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