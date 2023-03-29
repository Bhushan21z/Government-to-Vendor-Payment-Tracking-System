import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  ///////// Input Datas
  const [formData1, setformData1] = useState({ address: "", govtype: "", name: ""});
  const [formData2, setformData2] = useState({ amount: 0});
  const [formData3, setformData3] = useState({ amount:0, to:"", project:""});
  const [formData4, setformData4] = useState({ amount:0, to:"", project:""});

  ///////////////////
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  const [governments, setGovernments] = useState([]);
  const [govTransactions, setGovTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [spend, setSpend] = useState(0);
  //////////////////////
  const [cLogin, setCLogin] = useState(false);
  const [govLogin, setGovLogin] = useState(false);
  const [govDetails, setGovDetails] = useState({address:"", gov_type:"", name:"", balance:0, spend:0});
  const [allocFunds, setAllocFunds] = useState([]);
  const [alreadyGov, setAlreadyGov] = useState(true);

  const handleChange = (e, name) => {
    setformData1((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleChange2 = (e, name) => {
    setformData2((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleChange3 = (e, name) => {
    setformData3((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleChange4 = (e, name) => {
    setformData4((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  /////////////////////////////////////////////////////////////////////
  /////// Pages Function Calling Functions
  /////////////////////////////////////////////////////////////////////

  const checkIfCentralIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        //AddFunds();
        await getBalance();
        await getSpend();
        // getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        //AddFunds();
        //getBalance();
        // getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  /////////////////////////////////////////////////////////////////////
  /////// Login Functions
  /////////////////////////////////////////////////////////////////////

  const connectCentralWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts", });
      const log=await centralLogin();
      console.log(log);
      if(log){
        console.log("llllll");
        setCurrentAccount(accounts[0]);
        return true;
      }
      else{
        return false;
      }
      //window.location.reload();
    } catch (error) {
      console.log(error);
      return false;
      throw new Error("No ethereum object");
    }
  };

  const connectGovernmentWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts", });
      const log=await governmentLogin();
      console.log(log);
      if(log){
        console.log("llllll");
        setCurrentAccount(accounts[0]);
        return true;
      }
      else{
        return false;
      }
      //window.location.reload();
    } catch (error) {
      console.log(error);
      return false;
      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      return true;
      //window.location.reload();
    } catch (error) {
      console.log(error);
      return false;
      throw new Error("No ethereum object");
    }
  };

  /////////////////////////////////////////////////////////////////////
  /////// Funds Functions
  /////////////////////////////////////////////////////////////////////
  // centralLogin,
  // governmentLogin,
  // GovernmentDetails,
  // getBalance,
  // getSpend,
  // AddFunds,
  // getAddedFunds,
  // CheckRegisterGovernment,
  // RegisterGovernment,
  // AllocateFunds,
  // TransferFunds,
  // getAllGovernmentTrancations,
  // getAllTransactions
  
  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTrancations();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.to,
          addressFrom: transaction.from,
          toName: transaction.to_name,
          fromName: transaction.from_name,
          timestamp: new Date(transaction.time.toNumber() * 1000).toLocaleString(),
          amount: parseInt(transaction.amount),
          project: transaction.project_name
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllGovernments = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableGovernment = await transactionsContract.getAllGovernment();

        const structuredGovernments = availableGovernment.map((government) => ({
          address: government.add,
          gov_type: government.gov_type,
          name: government.name,
          balance: Number(government.balance),
          spend : Number(government.spend) 
        }));

        console.log(structuredGovernments);

        setGovernments(structuredGovernments);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const centralLogin = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const login = await transactionsContract.CentralLogin();
        console.log(login);
        setCLogin(login);
        return login;
      } else {
        console.log("Ethereum is not present");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const governmentLogin = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const login = await transactionsContract.GovernmentLogin();
        console.log(login);
        setGovLogin(login);
        return login;

      } else {
        console.log("Ethereum is not present");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GovernmentDetails = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const details = await transactionsContract.GovernmentDetails();
        console.log(details);
        const det={
            address: details.address,
            gov_type: details.gov_type,
            name: details.name,
            balance: details.name,
            spend: details.spend
        }
        setGovDetails(det);

      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBalance = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const bal = await transactionsContract.GetBalance();
        console.log(bal);
        const num= Number(bal);
        setBalance(num);
        console.log(balance);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSpend = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const spe = await transactionsContract.GetSpend();
        console.log(spe);
        const num= Number(spe);
        setSpend(num);
        console.log(spend);

      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

    const AddFunds = async () => {
        try {
        if (ethereum) {
            const { amount } = formData2;
            const pamount= parseInt(amount);
            const transactionsContract = createEthereumContract();
            //const parsedAmount = parseInt(amount);

            const transactionHash = await transactionsContract.AddFunds(pamount);
            // const transactionHash = await transactionsContract.AddFunds(1000);
            console.log("Funds Added");
            // setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            // setIsLoading(false);
            const transactionsCount = await transactionsContract.getTransactionCount();

            setTransactionCount(transactionsCount.toNumber());
            window.location.reload();
        } else {
            console.log("No ethereum object");
        }
        } catch (error) {
        console.log(error);

        throw new Error("No ethereum object");
        }
  };

  const getAddedFunds = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const alloc = await transactionsContract.getAllocatedFunds();
        console.log(alloc);
        setAllocFunds(alloc);

      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CheckRegisterGovernment = async () => {
    try {
    if (ethereum) {
        const { address, gov_type, name } = formData1;
        const transactionsContract = createEthereumContract();

        const checkReg = await transactionsContract.CheckRegister(name);
        setAlreadyGov(checkReg);
    } else {
        console.log("No ethereum object");
    }
    } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
    }
 };

  const RegisterGovernment = async () => {
    try {
    if (ethereum) {
        const { address, govtype, name } = formData1;
        const transactionsContract = createEthereumContract();


        const transaction = await transactionsContract.Register(address, govtype, name);
        // console.log(transaction.hash)
        //const transaction = await transactionsContract.Register(amount);

        // setIsLoading(true);
        console.log(`Loading - ${transaction.hash}`);
        // await transactionHash.wait();
        console.log(`Success - ${transaction.hash}`);
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

//  const checkRegPlusRegisterGovernment = async () => {
//     try {
//     if (ethereum) {
//         const { address, gov_type, name } = formData1;
//         const transactionsContract = createEthereumContract();
//         const checkReg = await transactionsContract.CheckRegister(name);
//         setAlreadyGov(checkReg);
//         if(checkReg == true){
//             const transaction = await transactionsContract.Register(address, gov_type, name);
//             window.location.reload();
//         }

//     } else {
//         console.log("No ethereum object");
//     }
//     } catch (error) {
//     console.log(error);

//     throw new Error("No ethereum object");
//     }
//  };


    const AllocateFunds = async () => {
        try {
        if (ethereum) {
            const { amount, to, project } = formData3;
            const transactionsContract = createEthereumContract();

            const transactionHash = await transactionsContract.AllocateFunds(amount,to,project);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            const transactionsCount = await transactionsContract.getTransactionCount();

            setTransactionCount(transactionsCount.toNumber());
            window.location.reload();
        } else {
            console.log("No ethereum object");
        }
        } catch (error) {
        console.log(error);

        throw new Error("No ethereum object");
        }
    };

    const TransferFunds = async () => {
        try {
        if (ethereum) {
            const { amount, to, project } = formData4;
            const transactionsContract = createEthereumContract();

            const transactionHash = await transactionsContract.AllocateFunds(amount,to,project);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            const transactionsCount = await transactionsContract.getTransactionCount();

            setTransactionCount(transactionsCount.toNumber());
            // window.location.reload();
        } else {
            console.log("No ethereum object");
        }
        } catch (error) {
        console.log(error);

        throw new Error("No ethereum object");
        }
    };

    const getAllGovernmentTrancations = async () => {
        try {
          if (ethereum) {
            const transactionsContract = createEthereumContract();
    
            const availableTransactions = await transactionsContract.getAllGovernmentTrancations();
    
            const structuredTransactions = availableTransactions.map((transaction) => ({
              addressTo: transaction.to,
              addressFrom: transaction.from,
              toName: transaction.to_name,
              fromName: transaction.from_name,
              timestamp: new Date(transaction.time.toNumber() * 1000).toLocaleString(),
              amount: parseInt(transaction.amount),
              project: transaction.project_name
            }));
    
            console.log(structuredTransactions);
    
            setGovTransactions(structuredTransactions);
          } else {
            console.log("Ethereum is not present");
          }
        } catch (error) {
          console.log(error);
        }
    };
  


  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        connectCentralWallet,
        connectGovernmentWallet,
        transactions,
        governments,
        govTransactions,
        currentAccount,
        isLoading,
        /////////
        handleChange,
        handleChange2,
        handleChange3,
        handleChange4,
        /////////
        formData1,
        formData4,
        formData3,
        formData2,
        setformData1,
        setformData2,
        setformData3,
        setformData4,
        //////////
        cLogin,
        govLogin,
        govDetails,
        allocFunds,
        balance,
        spend,
        alreadyGov,
        //////////
        getAllTransactions,
        checkIfWalletIsConnect,
        checkIfTransactionsExists,
        checkIfCentralIsConnect,
        centralLogin,
        governmentLogin,
        GovernmentDetails,
        getBalance,
        getSpend,
        AddFunds,
        getAddedFunds,
        getAllGovernments,
        CheckRegisterGovernment,
        RegisterGovernment,
        AllocateFunds,
        TransferFunds,
        getAllGovernmentTrancations
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
