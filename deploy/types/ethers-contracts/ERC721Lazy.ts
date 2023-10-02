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

export declare namespace LibPart {
  export type PartStruct = {
    account: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
  };

  export type PartStructOutput = [string, BigNumber] & {
    account: string;
    value: BigNumber;
  };
}

export declare namespace LibERC721LazyMint {
  export type Mint721DataStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    tokenURI: PromiseOrValue<string>;
    creators: LibPart.PartStruct[];
    royalties: LibPart.PartStruct[];
    signatures: PromiseOrValue<BytesLike>[];
  };

  export type Mint721DataStructOutput = [
    BigNumber,
    string,
    LibPart.PartStructOutput[],
    LibPart.PartStructOutput[],
    string[]
  ] & {
    tokenId: BigNumber;
    tokenURI: string;
    creators: LibPart.PartStructOutput[];
    royalties: LibPart.PartStructOutput[];
    signatures: string[];
  };
}

export interface ERC721LazyInterface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseURI()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getRaribleV2Royalties(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferFromOrMint((uint256,string,(address,uint96)[],(address,uint96)[],bytes[]),address,address)": FunctionFragment;
    "mintAndTransfer((uint256,string,(address,uint96)[],(address,uint96)[],bytes[]),address)": FunctionFragment;
    "updateAccount(uint256,address,address)": FunctionFragment;
    "getCreators(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "balanceOf"
      | "baseURI"
      | "getApproved"
      | "getRaribleV2Royalties"
      | "isApprovedForAll"
      | "name"
      | "ownerOf"
      | "royaltyInfo"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "symbol"
      | "tokenByIndex"
      | "tokenOfOwnerByIndex"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
      | "supportsInterface"
      | "transferFromOrMint"
      | "mintAndTransfer"
      | "updateAccount"
      | "getCreators"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRaribleV2Royalties",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFromOrMint",
    values: [
      LibERC721LazyMint.Mint721DataStruct,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndTransfer",
    values: [LibERC721LazyMint.Mint721DataStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAccount",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreators",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRaribleV2Royalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFromOrMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreators",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Creators(uint256,tuple[])": EventFragment;
    "RoyaltiesSet(uint256,tuple[])": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Creators"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltiesSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface CreatorsEventObject {
  tokenId: BigNumber;
  creators: LibPart.PartStructOutput[];
}
export type CreatorsEvent = TypedEvent<
  [BigNumber, LibPart.PartStructOutput[]],
  CreatorsEventObject
>;

export type CreatorsEventFilter = TypedEventFilter<CreatorsEvent>;

export interface RoyaltiesSetEventObject {
  tokenId: BigNumber;
  royalties: LibPart.PartStructOutput[];
}
export type RoyaltiesSetEvent = TypedEvent<
  [BigNumber, LibPart.PartStructOutput[]],
  RoyaltiesSetEventObject
>;

export type RoyaltiesSetEventFilter = TypedEventFilter<RoyaltiesSetEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ERC721Lazy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721LazyInterface;

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
     * See {IERC721-approve}.
     */
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[LibPart.PartStructOutput[]]>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
    >;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferFromOrMint(
      data: LibERC721LazyMint.Mint721DataStruct,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintAndTransfer(
      data: LibERC721LazyMint.Mint721DataStruct,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAccount(
      _id: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCreators(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[LibPart.PartStructOutput[]]>;
  };

  /**
   * See {IERC721-approve}.
   */
  approve(
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-balanceOf}.
   */
  balanceOf(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
   */
  baseURI(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-getApproved}.
   */
  getApproved(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRaribleV2Royalties(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<LibPart.PartStructOutput[]>;

  /**
   * See {IERC721-isApprovedForAll}.
   */
  isApprovedForAll(
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * See {IERC721Metadata-name}.
   */
  name(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-ownerOf}.
   */
  ownerOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  royaltyInfo(
    id: PromiseOrValue<BigNumberish>,
    _salePrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
  >;

  /**
   * See {IERC721-safeTransferFrom}.
   */
  "safeTransferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-safeTransferFrom}.
   */
  "safeTransferFrom(address,address,uint256,bytes)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-setApprovalForAll}.
   */
  setApprovalForAll(
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721Metadata-symbol}.
   */
  symbol(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721Enumerable-tokenByIndex}.
   */
  tokenByIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC721Enumerable-tokenOfOwnerByIndex}.
   */
  tokenOfOwnerByIndex(
    owner: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC721Metadata-tokenURI}.
   */
  tokenURI(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * See {IERC721Enumerable-totalSupply}.
   */
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC721-transferFrom}.
   */
  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferFromOrMint(
    data: LibERC721LazyMint.Mint721DataStruct,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintAndTransfer(
    data: LibERC721LazyMint.Mint721DataStruct,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAccount(
    _id: PromiseOrValue<BigNumberish>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCreators(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<LibPart.PartStructOutput[]>;

  callStatic: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<LibPart.PartStructOutput[]>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
    >;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFromOrMint(
      data: LibERC721LazyMint.Mint721DataStruct,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintAndTransfer(
      data: LibERC721LazyMint.Mint721DataStruct,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAccount(
      _id: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getCreators(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<LibPart.PartStructOutput[]>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "Creators(uint256,tuple[])"(
      tokenId?: null,
      creators?: null
    ): CreatorsEventFilter;
    Creators(tokenId?: null, creators?: null): CreatorsEventFilter;

    "RoyaltiesSet(uint256,tuple[])"(
      tokenId?: null,
      royalties?: null
    ): RoyaltiesSetEventFilter;
    RoyaltiesSet(tokenId?: null, royalties?: null): RoyaltiesSetEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
  };

  estimateGas: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFromOrMint(
      data: LibERC721LazyMint.Mint721DataStruct,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintAndTransfer(
      data: LibERC721LazyMint.Mint721DataStruct,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAccount(
      _id: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCreators(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFromOrMint(
      data: LibERC721LazyMint.Mint721DataStruct,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintAndTransfer(
      data: LibERC721LazyMint.Mint721DataStruct,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAccount(
      _id: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCreators(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
