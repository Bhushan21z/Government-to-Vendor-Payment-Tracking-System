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
  ///////////////////
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  ////////////////////// Login
  const [cLogin, setCLogin] = useState(false);
  const [govLogin, setGovLogin] = useState(false);
  const [deptLogin, setDeptLogin] = useState(false);
  const [vendorLogin, setVendorLogin] = useState(false);
  ///////////////////// Register
  const [formData1, setformData1] = useState({ address: "", name: ""});
  const handleChange1 = (e, name) => {
    setformData1((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const [formData2, setformData2] = useState({ under_name:"",address: "", name: ""});
  const handleChange2 = (e, name) => {
    setformData2((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const [formData3, setformData3] = useState({ under_name:"",address: "", name: ""});
  const handleChange3 = (e, name) => {
    setformData3((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const [already, setAlready] = useState(false);
  ///////////////////// Central
  const [balance, setBalance] = useState(0);
  const [spend, setSpend] = useState(0);
  const [formData4, setformData4] = useState({ amount: 0});
  const handleChange4 = (e, name) => {
    setformData4((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const [projects, setProjects] = useState([]);
  const [projects2, setProjects2] = useState([]);
  ///////////////////// State
  const [formData5, setformData5] = useState({ name:"",amount:0,installments:0,state_name:"",dept_name:""});
  const handleChange5 = (e, name) => {
    setformData5((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  ///////////////////// Department
  const [formData6, setformData6] = useState({ pname:"", cname:"",dept_name:"",amount:0});
  const handleChange6 = (e, name) => {
    setformData6((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const [contracts, setContracts] = useState([]);
  const [formData7, setformData7] = useState({ vname:""});
  const handleChange7 = (e, name) => {
    setformData7((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  // const [formData7, setformData7] = useState({ name:"",dept_name:"",amount:0});
  // const handleChange7 = (e, name) => {
  //   setformData6((prevState) => ({ ...prevState, [name]: e.target.value }));
  // };

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
        //await getSpend();
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
        const currentTransactionCount = await transactionsContract.getProjectCount();

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

  const connectDepartmentWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts", });
      const log=await DepartmentLogin();
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

  const connectVendorWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts", });
      const log=await VendorLogin();
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

  const DepartmentLogin = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const login = await transactionsContract.DepartmentLogin();
        console.log(login);
        setDeptLogin(login);
        return login;

      } else {
        console.log("Ethereum is not present");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const VendorLogin = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const login = await transactionsContract.VendorLogin();
        console.log(login);
        setVendorLogin(login);
        return login;

      } else {
        console.log("Ethereum is not present");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////////////////////////////////////////
  /////// Register Functions
  /////////////////////////////////////////////////////////////////////

  const CheckRegisterGovernment = async () => {
    try {
    if (ethereum) {
        const { address, name } = formData1;
        const transactionsContract = createEthereumContract();

        const checkReg = await transactionsContract.GovernmentCheck(name);
        setAlready(checkReg);
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
        const { address, name } = formData1;
        const transactionsContract = createEthereumContract();
        const transaction = await transactionsContract.GovernmentRegister(address, name);

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

 const CheckRegisterDepartment = async () => {
  try {
  if (ethereum) {
      const { under_name, address, name } = formData2;
      const transactionsContract = createEthereumContract();

      const checkReg = await transactionsContract.DepartmentCheck(name);
      setAlready(checkReg);
  } else {
      console.log("No ethereum object");
  }
  } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
  }
};

const RegisterDepartment = async () => {
  try {
  if (ethereum) {
    const { under_name, address, name } = formData2;
      const transactionsContract = createEthereumContract();
      const transaction = await transactionsContract.DepartmentRegister(under_name,address, name);

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

const CheckRegisterVendor = async () => {
  try {
  if (ethereum) {
    const { under_name, address, name } = formData3;
      const transactionsContract = createEthereumContract();

      const checkReg = await transactionsContract.VendorCheck(name);
      setAlready(checkReg);
  } else {
      console.log("No ethereum object");
  }
  } catch (error) {
  console.log(error);

  throw new Error("No ethereum object");
  }
};

const RegisterVendor = async () => {
  try {
  if (ethereum) {
    const { under_name, address, name } = formData3;
      const transactionsContract = createEthereumContract();
      const transaction = await transactionsContract.VendorRegister(under_name,address, name);

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

  /////////////////////////////////////////////////////////////////////
  /////// Central Functions
  /////////////////////////////////////////////////////////////////////

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

// const getSpend = async () => {
//   try {
//     if (ethereum) {
//       const transactionsContract = createEthereumContract();

//       const spe = await transactionsContract.GetSpend();
//       console.log(spe);
//       const num= Number(spe);
//       setSpend(num);
//       console.log(spend);

//     } else {
//       console.log("Ethereum is not present");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

  const AddFunds = async () => {
      try {
      if (ethereum) {
          const { amount } = formData4;
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
          window.location.reload();
      } else {
          console.log("No ethereum object");
      }
      } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
      }
  };

  const getAllProjects = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
  
        const proj = await transactionsContract.getAllProjects();
        console.log(proj);
        const structuredProjects = proj.map((project) => ({
          id: parseInt(project.id),
          name: project.name,
          amount: parseInt(project.amount),
          installments: parseInt(project.installments),
          status: parseInt(project.status),
          state_name: project.state_name,
          dept_name:project.department_name
        }));
        setProjects(structuredProjects);
        //console.log(projects);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProjects2 = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
  
        const proj = await transactionsContract.getAllProjects();
        console.log(proj);
        var data=[];
        for(var a=0;a<proj.length;a++){
          console.log(proj[a]);
        const status=parseInt(proj[a].status);
    var stat="";
    var app="";
    if(status==0){
      stat="Initiated";
      app="Not Approved";
    }
    if(status==1){
      stat="In progress";
      app="Approved";
    }
    if(status==2){
      stat="Completed";
      app="Approved";
    }
    var instno=[];
    var instts=[];
    var instamount=[];
    var instfrom=[];
    var instto=[];
    console.log("fff");
    for(var i=0; i<proj[a].inst.length ; i++){
      instno.push(parseInt(proj[a].inst[i].installment_no));
      instamount.push(parseInt(proj[a].inst[i].amount));
      instfrom.push(proj[a].inst[i].from_name);
      instto.push(proj[a].inst[i].to_name);
      instts.push(parseInt(proj[a].inst[i].time));
    }

    var contracts=[];
    var vendors=[];
    var vendorts=[];
    var vendoramt=[];
    for(var i=0;i<proj[a].vendor.length;i++){
      contracts.push(proj[a].vendor[i].contract_name);
      vendors.push(proj[a].vendor[i].vendor_name);
      vendorts.push(parseInt(proj[a].vendor[i].time));
      vendoramt.push(parseInt(proj[a].vendor[i].amount));
    }

    const dumm =
      {
        state: proj[a].state_name,
        department: proj[a].department_name,
        name: proj[a].name,
        amount: parseInt(proj[a].amount),
        status: stat,
        central: app,
        installment: parseInt(proj[a].installments),
        givenAmt: parseInt(proj[a].given),
        currInst: parseInt(proj[a].curr_inst),
        instno: instno,
        instts: instts,
        instamount: instamount,
        instfrom: instfrom,
        instto: instto,
        contracts: contracts,
        vendorts:vendorts,
        vendoramt: vendoramt,
        vendors: vendors
      } 
  
     console.log(dumm);
     data.push(dumm);
    
    }
     setProjects2(data);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ApproveProject = async (id) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        
        const app = await transactionsContract.ApproveProjects(id);
        console.log(app);
        window.location.reload();
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SendInstallmentCentral = async (id) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        
        const app = await transactionsContract.SendInstallment1(id);
        console.log(app);
        window.location.reload();
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };


  /////////////////////////////////////////////////////////////////////
  /////// State Functions
  /////////////////////////////////////////////////////////////////////

  const StartProject = async () => {
    try {
    if (ethereum) {
        const { name, amount, installments, state_name, dept_name } = formData5;
        const transactionsContract = createEthereumContract();
        const transaction = await transactionsContract.StartProject(name,amount,installments,state_name,dept_name);

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

  const getStateProjects = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
  
        const proj = await transactionsContract.getStateProjects();
        console.log(proj);
        const structuredProjects = proj.map((project) => ({
          id: parseInt(project.id),
          name: project.name,
          amount: parseInt(project.amount),
          installments: parseInt(project.installments),
          status: parseInt(project.status),
          state_name: project.state_name,
          dept_name:project.department_name
        }));
        setProjects(structuredProjects);
        //console.log(projects);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SendInstallmentState = async (id) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        
        const app = await transactionsContract.SendInstallment2(id);
        console.log(app);
        window.location.reload();
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };


  /////////////////////////////////////////////////////////////////////
  /////// Department Functions
  /////////////////////////////////////////////////////////////////////

  const OpenContracts = async () => {
    try {
    if (ethereum) {
        const { pname, cname,dept_name, amount } = formData6;
        const transactionsContract = createEthereumContract();
        const transaction = await transactionsContract.OpenContract(pname,cname,dept_name,amount);

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

  const getContracts = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
  
        const contracts = await transactionsContract.getContracts();
        console.log(contracts);
        const structuredContracts = contracts.map((contract) => ({
          contract_id: parseInt(contract.contract_id),
          project_id: parseInt(contract.project_id),
          name: contract.name,
          dept_name: contract.dept_name,
          dept_add: contract.dept_add,
          status: parseInt(contract.status),
          amount: parseInt(contract.amount)
        }));
        setContracts(structuredContracts);
        //console.log(projects);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SendToVendor = async (_id,_amount,_vendor_name,_contract_name) => {
    try {
    if (ethereum) {
        const transactionsContract = createEthereumContract();
        console.log(_id,_amount,_vendor_name,_contract_name);
        const transaction = await transactionsContract.SendToVendor(_id,_amount,_vendor_name,_contract_name);
        console.log("init2");
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



  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        /// Variables
        currentAccount,
        transactionCount,
        cLogin,
        govLogin,
        vendorLogin,
        deptLogin,
        formData1,
        handleChange1,
        setformData1,
        formData2,
        handleChange2,
        formData3,
        handleChange3,
        already,
        balance,
        spend,
        formData4,
        handleChange4,
        formData5,
        handleChange5,
        projects,
        projects2,
        formData6,
        handleChange6,
        contracts,
        formData7,
        handleChange7,

        /// Functions
        checkIfCentralIsConnect,
        checkIfWalletIsConnect,
        checkIfTransactionsExists,
        connectCentralWallet,
        connectDepartmentWallet,
        connectGovernmentWallet,
        connectVendorWallet,
        connectWallet,
        centralLogin,
        governmentLogin,
        DepartmentLogin,
        VendorLogin,
        CheckRegisterGovernment,
        RegisterGovernment,
        CheckRegisterDepartment,
        RegisterDepartment,
        CheckRegisterVendor,
        RegisterVendor,
        getBalance,
        AddFunds,
        StartProject,
        getAllProjects,
        getAllProjects2,
        getStateProjects,
        ApproveProject,
        SendInstallmentCentral,
        SendInstallmentState,
        OpenContracts,
        getContracts,
        SendToVendor

      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
