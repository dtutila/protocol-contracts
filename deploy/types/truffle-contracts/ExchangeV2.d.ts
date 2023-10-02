/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ExchangeV2Contract
  extends Truffle.Contract<ExchangeV2Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ExchangeV2Instance>;
}

export interface Cancel {
  name: "Cancel";
  args: {
    hash: string;
    0: string;
  };
}

export interface Match {
  name: "Match";
  args: {
    leftHash: string;
    rightHash: string;
    newLeftFill: BN;
    newRightFill: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
  };
}

export interface MatcherChange {
  name: "MatcherChange";
  args: {
    assetType: string;
    matcher: string;
    0: string;
    1: string;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface ProxyChange {
  name: "ProxyChange";
  args: {
    assetType: string;
    proxy: string;
    0: string;
    1: string;
  };
}

type AllEvents =
  | Cancel
  | Match
  | MatcherChange
  | OwnershipTransferred
  | ProxyChange;

export interface ExchangeV2Instance extends Truffle.ContractInstance {
  cancel: {
    (
      order: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      order: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      order: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      order: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  directAcceptBid: {
    (
      direct: {
        bidMaker: string;
        bidNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        bidPaymentAmount: number | BN | string;
        paymentToken: string;
        bidSalt: number | BN | string;
        bidStart: number | BN | string;
        bidEnd: number | BN | string;
        bidDataType: string;
        bidData: string;
        bidSignature: string;
        sellOrderPaymentAmount: number | BN | string;
        sellOrderNftAmount: number | BN | string;
        sellOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      direct: {
        bidMaker: string;
        bidNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        bidPaymentAmount: number | BN | string;
        paymentToken: string;
        bidSalt: number | BN | string;
        bidStart: number | BN | string;
        bidEnd: number | BN | string;
        bidDataType: string;
        bidData: string;
        bidSignature: string;
        sellOrderPaymentAmount: number | BN | string;
        sellOrderNftAmount: number | BN | string;
        sellOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      direct: {
        bidMaker: string;
        bidNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        bidPaymentAmount: number | BN | string;
        paymentToken: string;
        bidSalt: number | BN | string;
        bidStart: number | BN | string;
        bidEnd: number | BN | string;
        bidDataType: string;
        bidData: string;
        bidSignature: string;
        sellOrderPaymentAmount: number | BN | string;
        sellOrderNftAmount: number | BN | string;
        sellOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      direct: {
        bidMaker: string;
        bidNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        bidPaymentAmount: number | BN | string;
        paymentToken: string;
        bidSalt: number | BN | string;
        bidStart: number | BN | string;
        bidEnd: number | BN | string;
        bidDataType: string;
        bidData: string;
        bidSignature: string;
        sellOrderPaymentAmount: number | BN | string;
        sellOrderNftAmount: number | BN | string;
        sellOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  directPurchase: {
    (
      direct: {
        sellOrderMaker: string;
        sellOrderNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        sellOrderPaymentAmount: number | BN | string;
        paymentToken: string;
        sellOrderSalt: number | BN | string;
        sellOrderStart: number | BN | string;
        sellOrderEnd: number | BN | string;
        sellOrderDataType: string;
        sellOrderData: string;
        sellOrderSignature: string;
        buyOrderPaymentAmount: number | BN | string;
        buyOrderNftAmount: number | BN | string;
        buyOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      direct: {
        sellOrderMaker: string;
        sellOrderNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        sellOrderPaymentAmount: number | BN | string;
        paymentToken: string;
        sellOrderSalt: number | BN | string;
        sellOrderStart: number | BN | string;
        sellOrderEnd: number | BN | string;
        sellOrderDataType: string;
        sellOrderData: string;
        sellOrderSignature: string;
        buyOrderPaymentAmount: number | BN | string;
        buyOrderNftAmount: number | BN | string;
        buyOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      direct: {
        sellOrderMaker: string;
        sellOrderNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        sellOrderPaymentAmount: number | BN | string;
        paymentToken: string;
        sellOrderSalt: number | BN | string;
        sellOrderStart: number | BN | string;
        sellOrderEnd: number | BN | string;
        sellOrderDataType: string;
        sellOrderData: string;
        sellOrderSignature: string;
        buyOrderPaymentAmount: number | BN | string;
        buyOrderNftAmount: number | BN | string;
        buyOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      direct: {
        sellOrderMaker: string;
        sellOrderNftAmount: number | BN | string;
        nftAssetClass: string;
        nftData: string;
        sellOrderPaymentAmount: number | BN | string;
        paymentToken: string;
        sellOrderSalt: number | BN | string;
        sellOrderStart: number | BN | string;
        sellOrderEnd: number | BN | string;
        sellOrderDataType: string;
        sellOrderData: string;
        sellOrderSignature: string;
        buyOrderPaymentAmount: number | BN | string;
        buyOrderNftAmount: number | BN | string;
        buyOrderData: string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  fills(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  matchOrders: {
    (
      orderLeft: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureLeft: string,
      orderRight: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureRight: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      orderLeft: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureLeft: string,
      orderRight: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureRight: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      orderLeft: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureLeft: string,
      orderRight: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureRight: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      orderLeft: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureLeft: string,
      orderRight: {
        maker: string;
        makeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        taker: string;
        takeAsset: {
          assetType: { assetClass: string; data: string };
          value: number | BN | string;
        };
        salt: number | BN | string;
        start: number | BN | string;
        end: number | BN | string;
        dataType: string;
        data: string;
      },
      signatureRight: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  royaltiesRegistry(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setAssetMatcher: {
    (
      assetType: string,
      matcher: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      assetType: string,
      matcher: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      assetType: string,
      matcher: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      assetType: string,
      matcher: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setRoyaltiesRegistry: {
    (
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setTransferProxy: {
    (
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  __ExchangeV2_init: {
    (
      _transferProxy: string,
      _erc20TransferProxy: string,
      newProtocolFee: number | BN | string,
      newDefaultFeeReceiver: string,
      newRoyaltiesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _transferProxy: string,
      _erc20TransferProxy: string,
      newProtocolFee: number | BN | string,
      newDefaultFeeReceiver: string,
      newRoyaltiesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _transferProxy: string,
      _erc20TransferProxy: string,
      newProtocolFee: number | BN | string,
      newDefaultFeeReceiver: string,
      newRoyaltiesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _transferProxy: string,
      _erc20TransferProxy: string,
      newProtocolFee: number | BN | string,
      newDefaultFeeReceiver: string,
      newRoyaltiesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    cancel: {
      (
        order: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        order: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        order: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        order: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    directAcceptBid: {
      (
        direct: {
          bidMaker: string;
          bidNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          bidPaymentAmount: number | BN | string;
          paymentToken: string;
          bidSalt: number | BN | string;
          bidStart: number | BN | string;
          bidEnd: number | BN | string;
          bidDataType: string;
          bidData: string;
          bidSignature: string;
          sellOrderPaymentAmount: number | BN | string;
          sellOrderNftAmount: number | BN | string;
          sellOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        direct: {
          bidMaker: string;
          bidNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          bidPaymentAmount: number | BN | string;
          paymentToken: string;
          bidSalt: number | BN | string;
          bidStart: number | BN | string;
          bidEnd: number | BN | string;
          bidDataType: string;
          bidData: string;
          bidSignature: string;
          sellOrderPaymentAmount: number | BN | string;
          sellOrderNftAmount: number | BN | string;
          sellOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        direct: {
          bidMaker: string;
          bidNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          bidPaymentAmount: number | BN | string;
          paymentToken: string;
          bidSalt: number | BN | string;
          bidStart: number | BN | string;
          bidEnd: number | BN | string;
          bidDataType: string;
          bidData: string;
          bidSignature: string;
          sellOrderPaymentAmount: number | BN | string;
          sellOrderNftAmount: number | BN | string;
          sellOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        direct: {
          bidMaker: string;
          bidNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          bidPaymentAmount: number | BN | string;
          paymentToken: string;
          bidSalt: number | BN | string;
          bidStart: number | BN | string;
          bidEnd: number | BN | string;
          bidDataType: string;
          bidData: string;
          bidSignature: string;
          sellOrderPaymentAmount: number | BN | string;
          sellOrderNftAmount: number | BN | string;
          sellOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    directPurchase: {
      (
        direct: {
          sellOrderMaker: string;
          sellOrderNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          sellOrderPaymentAmount: number | BN | string;
          paymentToken: string;
          sellOrderSalt: number | BN | string;
          sellOrderStart: number | BN | string;
          sellOrderEnd: number | BN | string;
          sellOrderDataType: string;
          sellOrderData: string;
          sellOrderSignature: string;
          buyOrderPaymentAmount: number | BN | string;
          buyOrderNftAmount: number | BN | string;
          buyOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        direct: {
          sellOrderMaker: string;
          sellOrderNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          sellOrderPaymentAmount: number | BN | string;
          paymentToken: string;
          sellOrderSalt: number | BN | string;
          sellOrderStart: number | BN | string;
          sellOrderEnd: number | BN | string;
          sellOrderDataType: string;
          sellOrderData: string;
          sellOrderSignature: string;
          buyOrderPaymentAmount: number | BN | string;
          buyOrderNftAmount: number | BN | string;
          buyOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        direct: {
          sellOrderMaker: string;
          sellOrderNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          sellOrderPaymentAmount: number | BN | string;
          paymentToken: string;
          sellOrderSalt: number | BN | string;
          sellOrderStart: number | BN | string;
          sellOrderEnd: number | BN | string;
          sellOrderDataType: string;
          sellOrderData: string;
          sellOrderSignature: string;
          buyOrderPaymentAmount: number | BN | string;
          buyOrderNftAmount: number | BN | string;
          buyOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        direct: {
          sellOrderMaker: string;
          sellOrderNftAmount: number | BN | string;
          nftAssetClass: string;
          nftData: string;
          sellOrderPaymentAmount: number | BN | string;
          paymentToken: string;
          sellOrderSalt: number | BN | string;
          sellOrderStart: number | BN | string;
          sellOrderEnd: number | BN | string;
          sellOrderDataType: string;
          sellOrderData: string;
          sellOrderSignature: string;
          buyOrderPaymentAmount: number | BN | string;
          buyOrderNftAmount: number | BN | string;
          buyOrderData: string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    fills(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

    matchOrders: {
      (
        orderLeft: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureLeft: string,
        orderRight: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureRight: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        orderLeft: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureLeft: string,
        orderRight: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureRight: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        orderLeft: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureLeft: string,
        orderRight: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureRight: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        orderLeft: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureLeft: string,
        orderRight: {
          maker: string;
          makeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          taker: string;
          takeAsset: {
            assetType: { assetClass: string; data: string };
            value: number | BN | string;
          };
          salt: number | BN | string;
          start: number | BN | string;
          end: number | BN | string;
          dataType: string;
          data: string;
        },
        signatureRight: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    royaltiesRegistry(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setAssetMatcher: {
      (
        assetType: string,
        matcher: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        assetType: string,
        matcher: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        assetType: string,
        matcher: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        assetType: string,
        matcher: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setRoyaltiesRegistry: {
      (
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setTransferProxy: {
      (
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    __ExchangeV2_init: {
      (
        _transferProxy: string,
        _erc20TransferProxy: string,
        newProtocolFee: number | BN | string,
        newDefaultFeeReceiver: string,
        newRoyaltiesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _transferProxy: string,
        _erc20TransferProxy: string,
        newProtocolFee: number | BN | string,
        newDefaultFeeReceiver: string,
        newRoyaltiesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _transferProxy: string,
        _erc20TransferProxy: string,
        newProtocolFee: number | BN | string,
        newDefaultFeeReceiver: string,
        newRoyaltiesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _transferProxy: string,
        _erc20TransferProxy: string,
        newProtocolFee: number | BN | string,
        newDefaultFeeReceiver: string,
        newRoyaltiesProvider: string,
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
