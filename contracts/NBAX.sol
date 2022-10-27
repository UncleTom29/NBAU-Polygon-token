// contracts/NBAX.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NBAX is ERC20 {
    uint256 initialSupply;

    constructor() ERC20("NBAUniverse", "NBAX") {
        initialSupply = 1_000_000_000 * (10 ** decimals());
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}