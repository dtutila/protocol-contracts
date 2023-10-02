/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IRoyaltiesProviderContract
  extends Truffle.Contract<IRoyaltiesProviderInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IRoyaltiesProviderInstance>;
}

type AllEvents = never;

export interface IRoyaltiesProviderInstance extends Truffle.ContractInstance {
  getRoyalties: {
    (
      token: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      token: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ account: string; value: BN }[]>;
    sendTransaction(
      token: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    getRoyalties: {
      (
        token: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        token: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<{ account: string; value: BN }[]>;
      sendTransaction(
        token: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        tokenId: number | BN | string,
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
