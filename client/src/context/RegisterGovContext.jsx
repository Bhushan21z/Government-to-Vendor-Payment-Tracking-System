const RegisterGovernment = async () => {
    try {
    if (ethereum) {
        const { address, gov_type, name,govmail,govpin } = formData1;
        const transactionsContract = createEthereumContract();


        const transaction = await transactionsContract.Register(address, gov_type, name,govmail,govpin);

        //const transaction = await transactionsContract.Register(amount);

        // setIsLoading(true);
        // console.log(`Loading - ${transactionHash.hash}`);
        // await transactionHash.wait();
        // console.log(`Success - ${transactionHash.hash}`);
        // setIsLoading(false);

        window.location.reload();
    } else {
        console.log("No ethereum object");
    }
    } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
    }
 };