/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RoyaltyFeeRegistryInterface extends utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "royaltyFeeLimit()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateRoyaltyFeeLimit(uint256)": FunctionFragment;
    "updateRoyaltyInfoForCollection(address,address,address,uint256)": FunctionFragment;
    "royaltyInfo(address,uint256)": FunctionFragment;
    "royaltyFeeInfoCollection(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "owner"
      | "renounceOwnership"
      | "royaltyFeeLimit"
      | "transferOwnership"
      | "updateRoyaltyFeeLimit"
      | "updateRoyaltyInfoForCollection"
      | "royaltyInfo"
      | "royaltyFeeInfoCollection"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyFeeLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRoyaltyFeeLimit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRoyaltyInfoForCollection",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyFeeInfoCollection",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyFeeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRoyaltyFeeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRoyaltyInfoForCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyFeeInfoCollection",
    data: BytesLike
  ): Result;

  events: {
    "NewRoyaltyFeeLimit(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RoyaltyFeeUpdate(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRoyaltyFeeLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltyFeeUpdate"): EventFragment;
}

export interface NewRoyaltyFeeLimitEventObject {
  royaltyFeeLimit: BigNumber;
}
export type NewRoyaltyFeeLimitEvent = TypedEvent<
  [BigNumber],
  NewRoyaltyFeeLimitEventObject
>;

export type NewRoyaltyFeeLimitEventFilter =
  TypedEventFilter<NewRoyaltyFeeLimitEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RoyaltyFeeUpdateEventObject {
  collection: string;
  setter: string;
  receiver: string;
  fee: BigNumber;
}
export type RoyaltyFeeUpdateEvent = TypedEvent<
  [string, string, string, BigNumber],
  RoyaltyFeeUpdateEventObject
>;

export type RoyaltyFeeUpdateEventFilter =
  TypedEventFilter<RoyaltyFeeUpdateEvent>;

export interface RoyaltyFeeRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoyaltyFeeRegistryInterface;

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
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    royaltyFeeLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Update royalty info for collection
     * @param _royaltyFeeLimit new royalty fee limit (500 = 5%, 1,000 = 10%)
     */
    updateRoyaltyFeeLimit(
      _royaltyFeeLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Update royalty info for collection
     * @param collection address of the NFT contract
     * @param fee fee (500 = 5%, 1,000 = 10%)
     * @param receiver receiver for the royalty fee
     * @param setter address that sets the receiver
     */
    updateRoyaltyInfoForCollection(
      collection: PromiseOrValue<string>,
      setter: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Calculate royalty info for a collection address and a sale gross amount
     * @param amount amount
     * @param collection collection address
     */
    royaltyInfo(
      collection: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    /**
     * View royalty info for a collection address
     * @param collection collection address
     */
    royaltyFeeInfoCollection(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber]>;
  };

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  royaltyFeeLimit(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Update royalty info for collection
   * @param _royaltyFeeLimit new royalty fee limit (500 = 5%, 1,000 = 10%)
   */
  updateRoyaltyFeeLimit(
    _royaltyFeeLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Update royalty info for collection
   * @param collection address of the NFT contract
   * @param fee fee (500 = 5%, 1,000 = 10%)
   * @param receiver receiver for the royalty fee
   * @param setter address that sets the receiver
   */
  updateRoyaltyInfoForCollection(
    collection: PromiseOrValue<string>,
    setter: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Calculate royalty info for a collection address and a sale gross amount
   * @param amount amount
   * @param collection collection address
   */
  royaltyInfo(
    collection: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  /**
   * View royalty info for a collection address
   * @param collection collection address
   */
  royaltyFeeInfoCollection(
    collection: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber]>;

  callStatic: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    royaltyFeeLimit(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Update royalty info for collection
     * @param _royaltyFeeLimit new royalty fee limit (500 = 5%, 1,000 = 10%)
     */
    updateRoyaltyFeeLimit(
      _royaltyFeeLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Update royalty info for collection
     * @param collection address of the NFT contract
     * @param fee fee (500 = 5%, 1,000 = 10%)
     * @param receiver receiver for the royalty fee
     * @param setter address that sets the receiver
     */
    updateRoyaltyInfoForCollection(
      collection: PromiseOrValue<string>,
      setter: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Calculate royalty info for a collection address and a sale gross amount
     * @param amount amount
     * @param collection collection address
     */
    royaltyInfo(
      collection: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    /**
     * View royalty info for a collection address
     * @param collection collection address
     */
    royaltyFeeInfoCollection(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber]>;
  };

  filters: {
    "NewRoyaltyFeeLimit(uint256)"(
      royaltyFeeLimit?: null
    ): NewRoyaltyFeeLimitEventFilter;
    NewRoyaltyFeeLimit(royaltyFeeLimit?: null): NewRoyaltyFeeLimitEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RoyaltyFeeUpdate(address,address,address,uint256)"(
      collection?: PromiseOrValue<string> | null,
      setter?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      fee?: null
    ): RoyaltyFeeUpdateEventFilter;
    RoyaltyFeeUpdate(
      collection?: PromiseOrValue<string> | null,
      setter?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      fee?: null
    ): RoyaltyFeeUpdateEventFilter;
  };

  estimateGas: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    royaltyFeeLimit(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Update royalty info for collection
     * @param _royaltyFeeLimit new royalty fee limit (500 = 5%, 1,000 = 10%)
     */
    updateRoyaltyFeeLimit(
      _royaltyFeeLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Update royalty info for collection
     * @param collection address of the NFT contract
     * @param fee fee (500 = 5%, 1,000 = 10%)
     * @param receiver receiver for the royalty fee
     * @param setter address that sets the receiver
     */
    updateRoyaltyInfoForCollection(
      collection: PromiseOrValue<string>,
      setter: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Calculate royalty info for a collection address and a sale gross amount
     * @param amount amount
     * @param collection collection address
     */
    royaltyInfo(
      collection: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * View royalty info for a collection address
     * @param collection collection address
     */
    royaltyFeeInfoCollection(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    royaltyFeeLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Update royalty info for collection
     * @param _royaltyFeeLimit new royalty fee limit (500 = 5%, 1,000 = 10%)
     */
    updateRoyaltyFeeLimit(
      _royaltyFeeLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Update royalty info for collection
     * @param collection address of the NFT contract
     * @param fee fee (500 = 5%, 1,000 = 10%)
     * @param receiver receiver for the royalty fee
     * @param setter address that sets the receiver
     */
    updateRoyaltyInfoForCollection(
      collection: PromiseOrValue<string>,
      setter: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Calculate royalty info for a collection address and a sale gross amount
     * @param amount amount
     * @param collection collection address
     */
    royaltyInfo(
      collection: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * View royalty info for a collection address
     * @param collection collection address
     */
    royaltyFeeInfoCollection(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
