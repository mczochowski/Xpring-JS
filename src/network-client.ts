import { AccountInfoRequest, AccountInfo } from "../generated/rippled_pb";

/**
 * An error that can occur when making a request.
 */
export interface NetworkServiceError {
  message: string;
  code: number;
  metadata: object;
}

/**
 * The network client interface provides a wrapper around network calls to the Xpring Platform.
 */
export interface NetworkClient {
  getAccountInfo(accountInfoRequest: AccountInfoRequest): Promise<AccountInfo>;
}