const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("database");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();


//pond verb paper mansion bulb problem behave spice speak inspire net ask