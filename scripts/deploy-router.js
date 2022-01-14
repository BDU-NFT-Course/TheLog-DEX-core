// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const MyContract = await ethers.getContractFactory('TheLogRouter02');
    console.log('Deploying Contract...');
    const myContract = await MyContract.deploy("0xa5e08D5BD3315Cc04cF0BD043974ee89b0a825eb","0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
    await myContract.deployed();
    console.log('Contract deployed to:', myContract);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });