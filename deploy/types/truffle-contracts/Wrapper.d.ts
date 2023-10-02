/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface WrapperContract extends Truffle.Contract<WrapperInstance> {
  "new"(
    _auction: string,
    meta?: Truffle.TransactionDetails
  ): Promise<WrapperInstance>;
}

type AllEvents = never;

export interface WrapperInstance extends Truffle.ContractInstance {
  /**
   * Called in PartyBid.sol in `initialize` at line 174
   * Given the auctionId, nftContract, and tokenId, check that: 1. the auction ID matches the token referred to by tokenId + nftContract 2. the auctionId refers to an *ACTIVE* auction (e.g. an auction that will accept bids) within this market contract 3. any additional validation to ensure that a PartyBid can bid on this auction (ex: if the market allows arbitrary bidding currencies, check that the auction currency is ETH) Note: This function probably should have been named "isValidAuction"
   */
  auctionIdMatchesToken(
    auctionId: number | BN | string,
    nftContract: string,
    tokenId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Called in PartyBid.sol in `bid` at line 251
   * Calculate the minimum next bid for this auction. PartyBid contracts always submit the minimum possible bid that will be accepted by the Market contract. usually, this is either the reserve price (if there are no bids) or a certain percentage increase above the current highest bid
   */
  getMinimumBid(
    auctionId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Called in PartyBid.sol in `bid` at line 241
   * Query the current highest bidder for this auction It is assumed that there is always 1 winning highest bidder for an auction This is used to ensure that PartyBid cannot outbid itself if it is already winning
   */
  getCurrentHighestBidder(
    auctionId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Called in PartyBid.sol in `bid` at line 259
   * Submit bid to Market contract
   */
  bid: {
    (
      auctionId: number | BN | string,
      bidAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      auctionId: number | BN | string,
      bidAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      auctionId: number | BN | string,
      bidAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      auctionId: number | BN | string,
      bidAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Called in PartyBid.sol in `bid` at line 247and in `finalize` at line 288
   * Determine whether the auction has been finalized Used to check if it is still possible to bid And to determine whether the PartyBid should finalize the auction
   */
  isFinalized(
    auctionId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Called in PartyBid.sol in `finalize` at line 289
   * Finalize the results of the auction on the Market contract It is assumed  that this operation is performed once for each auction, that after it is done the auction is over and the NFT has been transferred to the auction winner.
   */
  finalize: {
    (
      auctionId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      auctionId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      auctionId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      auctionId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * Called in PartyBid.sol in `initialize` at line 174
     * Given the auctionId, nftContract, and tokenId, check that: 1. the auction ID matches the token referred to by tokenId + nftContract 2. the auctionId refers to an *ACTIVE* auction (e.g. an auction that will accept bids) within this market contract 3. any additional validation to ensure that a PartyBid can bid on this auction (ex: if the market allows arbitrary bidding currencies, check that the auction currency is ETH) Note: This function probably should have been named "isValidAuction"
     */
    auctionIdMatchesToken(
      auctionId: number | BN | string,
      nftContract: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Called in PartyBid.sol in `bid` at line 251
     * Calculate the minimum next bid for this auction. PartyBid contracts always submit the minimum possible bid that will be accepted by the Market contract. usually, this is either the reserve price (if there are no bids) or a certain percentage increase above the current highest bid
     */
    getMinimumBid(
      auctionId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Called in PartyBid.sol in `bid` at line 241
     * Query the current highest bidder for this auction It is assumed that there is always 1 winning highest bidder for an auction This is used to ensure that PartyBid cannot outbid itself if it is already winning
     */
    getCurrentHighestBidder(
      auctionId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Called in PartyBid.sol in `bid` at line 259
     * Submit bid to Market contract
     */
    bid: {
      (
        auctionId: number | BN | string,
        bidAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        auctionId: number | BN | string,
        bidAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        auctionId: number | BN | string,
        bidAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        auctionId: number | BN | string,
        bidAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Called in PartyBid.sol in `bid` at line 247and in `finalize` at line 288
     * Determine whether the auction has been finalized Used to check if it is still possible to bid And to determine whether the PartyBid should finalize the auction
     */
    isFinalized(
      auctionId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Called in PartyBid.sol in `finalize` at line 289
     * Finalize the results of the auction on the Market contract It is assumed  that this operation is performed once for each auction, that after it is done the auction is over and the NFT has been transferred to the auction winner.
     */
    finalize: {
      (
        auctionId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        auctionId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        auctionId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        auctionId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
