// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalCookie;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }
    function cookie() public {
        totalCookie += 1;
        console.log("%s has cookies!", msg.sender);
    }

    function getTotalCookies() public view returns (uint256) {
        console.log("We have %d total cookies!", totalCookie);
        return totalCookie;
    }
}