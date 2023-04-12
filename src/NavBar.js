import React from "react";
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import Facebook from './assets/social-media-icons/facebook_32x32.png';
import Twitter from './assets/social-media-icons/twitter_32x32.png';
import Email from './assets/social-media-icons/email_32x32.png';

const NavBar = ({accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);

  async function connectedAccount() {
    if(window.ethereum) {
        const account = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccounts(account);
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="30px">

        {/*Left Side Social Media Icons*/}
        <Flex justify="space-around" width="40%" padding = "0 75px">
            <Link href="https://www.facebook.com" target="_blank">
                <Image src={Facebook} boxSize = "42px" margin="0 15px"/>
            </Link>
            <Link href="https://twitter.com" target="_blank">
                <Image src={Twitter} boxSize = "42px" margin="0 15px"/>
            </Link>
            <Link href="https://www.gmail.com" target="_blank">
                <Image src={Email} boxSize = "42px" margin="0 15px"/>
            </Link>
        </Flex>

        {/*Left Side Social Media Icons*/}
        <Flex justify="space-around" align="center" width="40%" padding = "30px">
            <Box margin="0 15px">
                <Link href="https://github.com/hpsbe/pixelPunkNFT" target="_blank" textDecoration="none" color="white">About</Link>
            </Box>
            <Spacer />
            <Box margin="0 15px">
                <Link href="https://mumbai.polygonscan.com/address/0x4a933285701e7766af09c8025fd7414b671250d1" target="_blank" textDecoration="none" color="white">Scan:Tx</Link>
            </Box>
            <Spacer />
            <Box margin="0 15px">
                <Link href="https://hpsb.vercel.app/hpsb.html" textDecoration="none" color="white" target="_blank">Team</Link>
            </Box>
            <Spacer />

            {/*Connect Button*/}
            {isConnected ? (
              <Box margin="0 15px">Connected</Box>
            ) : (
              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                fontFamily="inherit"
                padding="15px"
                margin = "0 15px"
                cursor="pointer"
                onClick = {connectedAccount}
              >
              Connect
              </Button>
            )}
        </Flex>

    </Flex>
  )
};

export default NavBar;
