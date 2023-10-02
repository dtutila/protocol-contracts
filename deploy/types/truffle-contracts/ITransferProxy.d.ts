/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ITransferProxyContract
  extends Truffle.Contract<ITransferProxyInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ITransferProxyInstance>;
}

type AllEvents = never;

export interface ITransferProxyInstance extends Truffle.ContractInstance {
  transfer: {
    (
      asset: {
        assetType: { assetClass: string; data: string };
        value: number | BN | string;
      },
      from: string,
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      asset: {
        assetType: { assetClass: string; data: string };
        value: number | BN | string;
      },
      from: string,
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      asset: {
        assetType: { assetClass: string; data: string };
        value: number | BN | string;
      },
      from: string,
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      asset: {
        assetType: { assetClass: string; data: string };
        value: number | BN | string;
      },
      from: string,
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    transfer: {
      (
        asset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        },
        from: string,
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        asset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        },
        from: string,
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        asset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        },
        from: string,
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        asset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        },
        from: string,
        to: string,
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
