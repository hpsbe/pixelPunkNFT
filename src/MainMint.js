import {useState} from "react";
import {ethers, BigNumber} from "ethers";
import {Box, Button, Flex, Input, Text} from '@chakra-ui/react';
import pixelPunkNFT from "./PixelPunkNFT.json";

const pixelPunkNFTAddress = "0x4a933285701E7766af09C8025fD7414B671250D1";

const MainMint = ({accounts, setAccounts}) => {
  const [mintAmount, setMintAmount] = useState([1]);
  const isConnected = Boolean(accounts[0]);

  async function handleMint(){
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
          pixelPunkNFTAddress,
          pixelPunkNFT.abi,
          signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
            value: ethers.utils.parseEther((0.02 * mintAmount).toString())
        });
        console.log('response: ', response)
      } catch (err) {
        console.log('error', err)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  }

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px" classname="hero">
        <Box width="520px">
            <div className="text">
                <Text fontSize="48px" textShadow="0 5px #000000">
                    PIXEL:PUNKS
                </Text>
                <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow='0 2px 2px #000000'>
                    Its 3202. Can the heroic Pixel Punks, with their power to manipulate pixels, save humanity from the shadow virus? Mint Pixel Punks to find out.
                </Text>
            </div>

            {isConnected ? (
                <div>
                    <Flex justify="center" align="center">
                        <Button background="#D6517D" borderRadius="5px" boxShadow="0 2px 2px 1px #0F0F0F" color="white" cursor="pointer" fontFamily="inherit" padding="15px" marginTop="10px" onClick = {handleDecrement}>-</Button>
                        <Input readOnly fontFamily="inherit" width="100px" height="40px" textAlign="center" paddingLeft="19px" marginTop="10px" type="number" value={mintAmount}/>
                        <Button background="#D6517D" borderRadius="5px" boxShadow="0 2px 2px 1px #0F0F0F" color="white" cursor="pointer" fontFamily="inherit" padding="15px" marginTop="10px" onClick = {handleIncrement}>+</Button>
                    </Flex>
                    <Button background="#D6517D" borderRadius="5px" boxShadow="0 2px 2px 1px #0F0F0F" color="white" cursor="pointer" fontFamily="inherit" padding="15px" marginTop="10px" onClick = {handleMint}>Mint Now</Button>
                </div>
            ) : (
                <Text marginTop="70px" fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow='0 3px #000000' color="#D6517D">Connect To Mint.</Text>
            )}
        </Box>
    </Flex>
  )
}

export default MainMint;
