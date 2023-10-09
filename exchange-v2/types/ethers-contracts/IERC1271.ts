/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface IERC1271Interface extends utils.Interface {
  functions: {
    "isValidSignature(bytes32,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "isValidSignature"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC1271 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC1271Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     * Should return whether the signature provided is valid for the provided data
     * @param _hash Hash of the data signed on the behalf of address(this)
     * @param _signature Signature byte array associated with _data MUST return the bytes4 magic value 0x1626ba7e when function passes. MUST NOT modify state (using STATICCALL for solc < 0.5, view modifier for solc > 0.5) MUST allow external calls
     */
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { magicValue: string }>;
  };

  /**
   * Should return whether the signature provided is valid for the provided data
   * @param _hash Hash of the data signed on the behalf of address(this)
   * @param _signature Signature byte array associated with _data MUST return the bytes4 magic value 0x1626ba7e when function passes. MUST NOT modify state (using STATICCALL for solc < 0.5, view modifier for solc > 0.5) MUST allow external calls
   */
  isValidSignature(
    _hash: PromiseOrValue<BytesLike>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    /**
     * Should return whether the signature provided is valid for the provided data
     * @param _hash Hash of the data signed on the behalf of address(this)
     * @param _signature Signature byte array associated with _data MUST return the bytes4 magic value 0x1626ba7e when function passes. MUST NOT modify state (using STATICCALL for solc < 0.5, view modifier for solc > 0.5) MUST allow external calls
     */
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    /**
     * Should return whether the signature provided is valid for the provided data
     * @param _hash Hash of the data signed on the behalf of address(this)
     * @param _signature Signature byte array associated with _data MUST return the bytes4 magic value 0x1626ba7e when function passes. MUST NOT modify state (using STATICCALL for solc < 0.5, view modifier for solc > 0.5) MUST allow external calls
     */
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Should return whether the signature provided is valid for the provided data
     * @param _hash Hash of the data signed on the behalf of address(this)
     * @param _signature Signature byte array associated with _data MUST return the bytes4 magic value 0x1626ba7e when function passes. MUST NOT modify state (using STATICCALL for solc < 0.5, view modifier for solc > 0.5) MUST allow external calls
     */
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
