/**
 * @ancore/core-sdk
 * Core SDK for Ancore wallet integration
 */

export const SDK_VERSION = '0.1.0';

// Client
export { AncoreClient, type AncoreClientOptions } from './ancore-client';

// Session key helpers
export { addSessionKey, type AddSessionKeyParams } from './add-session-key';
export { revokeSessionKey, type RevokeSessionKeyParams } from './revoke-session-key';

// Account transaction builder (wrapper around Stellar SDK's TransactionBuilder)
export {
  AccountTransactionBuilder,
  type AccountTransactionBuilderOptions,
} from './account-transaction-builder';

// Contract parameter encoding helpers
export {
  toScAddress,
  toScOperationsVec,
  toScPermissionsVec,
  toScU32,
  toScU64,
} from './contract-params';

// Error types
export {
  AncoreSdkError,
  BuilderValidationError,
  SessionKeyExecutionError,
  SessionKeyExecutionValidationError,
  SessionKeyManagementError,
  SimulationExpiredError,
  SimulationFailedError,
  TransactionSubmissionError,
} from './errors';

export {
  mapExecuteWithSessionKeyError,
  type ExecuteWithSessionKeyParams,
  type ExecuteWithSessionKeyResult,
  type SessionKeyExecutionLayer,
  type SessionKeyExecutionRequest,
  type SessionKeySignerInputs,
} from './execute-with-session-key';

// Secure Storage
export { SecureStorageManager } from './storage/secure-storage-manager';
export type {
  AccountData,
  EncryptedPayload,
  SessionKeysData,
  StorageAdapter,
} from './storage/types';
