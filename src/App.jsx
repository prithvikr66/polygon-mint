import { ConnectButton } from "@rainbow-me/rainbowkit"
import {ethers} from "ethers"
import {abi} from "./abi"
import { useEffect } from "react";
function App() {
  const contractAddress="0x46432B120b849568D5cf6d18Fb751a97867E4D94";
  useEffect(()=>{
    const read=async()=>{
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      const signer=provider.getSigner();
      const walletAddress=await signer.getAddress()
      const contract=new ethers.Contract(contractAddress,abi,signer);
      const totalSupplyInHex=await contract.totalSupply();
      const totalSupply=parseInt(totalSupplyInHex,16)
      
      const userTokenIds=[]
      
      const getOwner=async(tokenId)=>{
        const owner=await contract.ownerOf(tokenId);
        if(owner==="0x59FE0Feab6Dae194916769290b20fF57fe22FABF")
        return tokenId;
      }
      for (let i=1;i<=totalSupply;i++){
        const token=getOwner(i)
        userTokenIds.push(token)
      }
     
      
        
    }
    read()
  }
  
  ,[])
  
  return (
    <>
    <ConnectButton/>
     
    </>
  )
}

export default App
