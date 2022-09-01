const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const cookieContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const cookieContract = await cookieContractFactory.deploy();
    await cookieContract.deployed();
  
    console.log("Contract deployed to:", cookieContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let cookieCount;
    cookieCount = await cookieContract.getTotalCookies();
  
    let cookieTxn = await cookieContract.cookie();
    await cookieTxn.wait();
  
    cookieCount = await cookieContract.getTotalCookies();
  
    cookieTxn = await cookieContract.connect(randomPerson).cookie();
    await cookieTxn.wait();
  
    cookieCount = await cookieContract.getTotalCookies();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();