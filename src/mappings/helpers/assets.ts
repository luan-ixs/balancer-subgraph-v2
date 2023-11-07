// This file is automatically generated and contains assets from mainnet.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssetAggregators: Address[][];
}

export const USDC_ADDRESS = Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
export const DAI_ADDRESS = Address.fromString('0x6B175474E89094C44Da98b954EedeAC495271d0F');
export const USDT_ADDRESS = Address.fromString('0xdAC17F958D2ee523a2206206994597C13D831ec7');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'), // USDC
    Address.fromString('0x6B175474E89094C44Da98b954EedeAC495271d0F'), // DAI
    Address.fromString('0xdAC17F958D2ee523a2206206994597C13D831ec7'), // USDT
  ],
  pricingAssets: [
    Address.fromString('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'), // WETH
    Address.fromString('0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0'), // wstETH
    Address.fromString('0x804CdB9116a10bB78768D3252355a1b18067bF8f'), // bb-a-DAI-V1
    Address.fromString('0x9210F1204b5a24742Eba12f710636D76240dF3d0'), // bb-a-USDC-V1
    Address.fromString('0x2BBf681cC4eb09218BEe85EA2a5d3D13Fa40fC0C'), // bb-a-USDT-V1
    Address.fromString('0xae37D54Ae477268B9997d4161B96b8200755935c'), // bb-a-DAI-V2
    Address.fromString('0x82698aeCc9E28e9Bb27608Bd52cF57f704BD1B83'), // bb-a-USDC-V2
    Address.fromString('0x2F4eb100552ef93840d5aDC30560E5513DFfFACb'), // bb-a-USDT-V2
    Address.fromString('0x6667c6fa9f2b3Fc1Cc8D85320b62703d938E4385'), // bb-a-DAI-V3
    Address.fromString('0xcbFA4532D8B2ade2C261D3DD5ef2A2284f792692'), // bb-a-USDC-V3
    Address.fromString('0xA1697F9Af0875B63DdC472d6EeBADa8C1fAB8568'), // bb-a-USDT-V3
    Address.fromString('0xfeBb0bbf162E64fb9D0dfe186E517d84C395f016'), // bb-a-USD-V3
    Address.fromString('0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'), // WBTC
    Address.fromString('0xba100000625a3754423978a60c9317c58a424e3D'), // BAL
    Address.fromString('0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2'), // MKR
    Address.fromString('0x6810e776880C02933D47DB1b9fc05908e5386b96'), // GNO
    Address.fromString('0x5c6ee304399dbdb9c8ef030ab642b10820db8f56'), // B-80BAL-20WETH
    Address.fromString('0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'), // MATIC
    Address.fromString('0xA13a9247ea42D743238089903570127DdA72fE44'), // bb-a-USD
    Address.fromString('0x60D604890feaa0b5460B28A424407c24fe89374a'), // bb-a-WETH-V3
  ],
  fxAssetAggregators: [
    [
      Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'), // USDC
      Address.fromString('0x789190466E21a8b78b8027866CBBDc151542A26C'), // USDC/USD
    ],
    [
      Address.fromString('0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96'), // XSGD
      Address.fromString('0xc96129C796F03bb21AC947EfC5329CD1F560305B'), // SGD/USD
    ],
    [
      Address.fromString('0x6B175474E89094C44Da98b954EedeAC495271d0F'), // DAI
      Address.fromString('0xDEc0a100eaD1fAa37407f0Edc76033426CF90b82'), // DAI/USD
    ],
    [
      Address.fromString('0xdB25f211AB05b1c97D595516F45794528a807ad8'), // EURS
      Address.fromString('0x02F878A94a1AE1B15705aCD65b5519A46fe3517e'), // EUR/USD
    ],
  ],
};
