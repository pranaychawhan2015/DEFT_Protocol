import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTACT_ABI, CONTACT_ADDRESS } from './config';

function Home() {
	const [ether, setEther] = useState();
	const [MindPay, setMindPay] = useState();
    const [balance1, cancelInvestement] = useState();
    const [balance2, stakeInvestment] = useState();


    

	useEffect(() => {
		async function load() {
		const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
	    const accounts = await web3.eth.requestAccounts();
	    const balance = web3.eth.getBalance(accounts[0]);
        setEther(balance);
	    setMindPay(balance*1000);	
		}
		load();
	}, []);

  return (
    <div>
    	<form>
          <div className="input-field col s12">
           <input value={balance1}>Enter ETH</input>
           <input value={MindPay}>Show Equal MIND PAY</input>   
          </div>
          <br></br>
          <div className="input-field col s12">
           <button onClick={}>Invest into MINDPAY</button>
           <input disabled={true} value={total}>Show Equal MIND PAY</input>   
          </div>
          <br></br>
          <div className="input-field col s12">
           <input value={ether}>MINDPAY Balance Of User</input>
           <button onClick={()=> cancelInvestement("")} >Cancel Investment</button>   
          </div> 
        </form>
    </div>
  );
}

export default Home;
