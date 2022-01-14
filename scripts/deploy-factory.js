// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const MyContract = await ethers.getContractFactory('TheLogFactory');
    console.log('Deploying Contract...');
    const myContract = await MyContract.deploy("0x641C0493C70C3acB36d7331f8888d3b2Fa53E113");
    await myContract.deployed();
    console.log('Contract deployed to:', myContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });