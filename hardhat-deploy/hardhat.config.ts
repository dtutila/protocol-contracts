import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-deploy';
import '@openzeppelin/hardhat-upgrades';

import type { HttpNetworkUserConfig } from "hardhat/types";
import * as dotenv from 'dotenv';
import * as os from 'os';
import * as path from 'path';
import fs from 'fs';

dotenv.config();

function getConfigPath() {
  const configPath = process.env["NETWORK_CONFIG_PATH"];
  if (configPath) {
    return configPath;
  } else {
    return path.join(os.homedir(),  ".ethereum");
  }
}

function getNetworkApiKey(name: string): string {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return json.verify.apiKey;
  } else {
    // File doesn't exist in path
    return "xyz"
  }
}

function getNetworkApiUrl(name: string): string {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return json.verify.apiURL;
  } else {
    // File doesn't exist in path
    return ""
  }
}

function getNetworkExplorerUrl(name: string): string {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return json.verify.explorerUrl;
  } else {
    // File doesn't exist in path
    return ""
  }
}

function createNetwork(name: string): HttpNetworkUserConfig {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return {
      from: json.address,
      gasPrice: "auto",
      chainId: parseInt(json.network_id),
      url: json.url,
      accounts: [json.key],
      gas: "auto",
      saveDeployments: true,
    };
  } else {
    // File doesn't exist in path
    return {
      from: "0x0000000000000000000000000000000000000000",
      gas: 0,
      chainId: 0,
      url: "",
      accounts: [],
      gasPrice: 0
    };
  }
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    sources: 'src',
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/23aeda901f4249e096e584b8be409743",
        blockNumber: 16813952,
      }
    },
    dev: createNetwork("dev"),
    goerli: createNetwork("goerli"),
    mainnet: createNetwork("mainnet"),
    optimisticEthereum: createNetwork("optimism_mainnet"),
    optimisticGoerli: createNetwork("optimism_goerli"),
    polygonDev: createNetwork("polygon_dev"),
    polygonMainnet: createNetwork("polygon_mainnet"),
    polygonMumbai: createNetwork("polygon_mumbai"),
    polygonStaging: createNetwork("polygon_staging"),
    staging: createNetwork("staging"),
    mantle_mainnet: createNetwork("mantle_mainnet"),
    mantle_testnet: createNetwork("mantle_testnet"),
  },
  etherscan: {
    apiKey: {
    //   mainnet: getNetworkApiKey('mainnet'),
    //   polygon: getNetworkApiKey('polygon_mainnet'),
    //   mumbai: getNetworkApiKey('polygon_mumbai'),
      mantle_mainnet: getNetworkApiKey('mantle_mainnet'),
      mantle_testnet: getNetworkApiKey('mantle_testnet'),
    },
    customChains: [
      {
        network: "mantle_mainnet",
        chainId: createNetwork("mantle_mainnet").chainId!,
        urls: {
          apiURL: getNetworkApiUrl("mantle_mainnet"),
          browserURL: getNetworkExplorerUrl("mantle_mainnet")
        }
      },
      {
        network: "mantle_testnet",
        chainId: createNetwork("mantle_testnet").chainId!,
        urls: {
          apiURL: getNetworkApiUrl("mantle_testnet"),
          browserURL: getNetworkExplorerUrl("mantle_testnet")
        }
      }
    ]
  }
};

export default config;
