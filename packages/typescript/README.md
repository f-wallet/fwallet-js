# @f-wallet/typescript@0.1.0

A TypeScript SDK client for the api.fwallet.co.ug API.

## Usage

First, install the SDK from npm.

```bash
npm install @f-wallet/typescript --save
```

Next, try it out.


```ts
import {
  Configuration,
  AdminApi,
} from '@f-wallet/typescript';
import type { AdminGetAdminDashboardRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: hmacNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacContentSha256
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacKeyId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacSignature
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  try {
    const data = await api.adminGetAdminDashboard();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.fwallet.co.ug*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AdminApi* | [**adminGetAdminDashboard**](docs/AdminApi.md#admingetadmindashboard) | **GET** /v1/admin/dashboard | Get Admin
*AdminApi* | [**adminGetAdminFeeSchedules**](docs/AdminApi.md#admingetadminfeeschedules) | **GET** /v1/admin/fee-schedules | Get Admin
*AdminApi* | [**adminPostAdminFeeSchedulesByIdRules**](docs/AdminApi.md#adminpostadminfeeschedulesbyidrulesoperation) | **POST** /v1/admin/fee-schedules/{id}/rules | Create Admin
*AuthApi* | [**authGetAuthMe**](docs/AuthApi.md#authgetauthme) | **GET** /v1/auth/me | Get Auth
*DepositsApi* | [**depositsPostDepositsBankSlipVerify**](docs/DepositsApi.md#depositspostdepositsbankslipverify) | **POST** /v1/deposits/bank-slip/verify | Create Deposits
*DepositsApi* | [**depositsPostDepositsBankStatements**](docs/DepositsApi.md#depositspostdepositsbankstatementsoperation) | **POST** /v1/deposits/bank-statements | Create Deposits
*DepositsApi* | [**depositsPostDepositsMomoWebhook**](docs/DepositsApi.md#depositspostdepositsmomowebhook) | **POST** /v1/deposits/momo-webhook | Create Deposits
*DeveloperApi* | [**developerGetDeveloperApiKeys**](docs/DeveloperApi.md#developergetdeveloperapikeys) | **GET** /v1/developer/api-keys | Get Developer
*DeveloperApi* | [**developerGetDeveloperApps**](docs/DeveloperApi.md#developergetdeveloperapps) | **GET** /v1/developer/apps | Get Developer
*DeveloperApi* | [**developerGetDeveloperRequestLogs**](docs/DeveloperApi.md#developergetdeveloperrequestlogs) | **GET** /v1/developer/request-logs | Get Developer
*DeveloperApi* | [**developerPatchDeveloperApiKeysByIdRestrictions**](docs/DeveloperApi.md#developerpatchdeveloperapikeysbyidrestrictionsoperation) | **PATCH** /v1/developer/api-keys/{id}/restrictions | Update Developer
*DeveloperApi* | [**developerPatchDeveloperAppsById**](docs/DeveloperApi.md#developerpatchdeveloperappsbyidoperation) | **PATCH** /v1/developer/apps/{id} | Update Developer
*DeveloperApi* | [**developerPostDeveloperApiKeys**](docs/DeveloperApi.md#developerpostdeveloperapikeysoperation) | **POST** /v1/developer/api-keys | Create Developer
*DeveloperApi* | [**developerPostDeveloperApiKeysByIdRevoke**](docs/DeveloperApi.md#developerpostdeveloperapikeysbyidrevoke) | **POST** /v1/developer/api-keys/{id}/revoke | Create Developer
*DeveloperApi* | [**developerPostDeveloperApiKeysByIdRotate**](docs/DeveloperApi.md#developerpostdeveloperapikeysbyidrotate) | **POST** /v1/developer/api-keys/{id}/rotate | Create Developer
*DeveloperApi* | [**developerPostDeveloperApps**](docs/DeveloperApi.md#developerpostdeveloperappsoperation) | **POST** /v1/developer/apps | Create Developer
*HealthApi* | [**healthGetHealth**](docs/HealthApi.md#healthgethealth) | **GET** /v1/health | Get Health
*JournalApi* | [**journalGetJournal**](docs/JournalApi.md#journalgetjournal) | **GET** /v1/journal | Get Journal
*JournalApi* | [**journalGetJournalById**](docs/JournalApi.md#journalgetjournalbyid) | **GET** /v1/journal/{id} | Get Journal
*PayoutsApi* | [**payoutsGetPayoutsCases**](docs/PayoutsApi.md#payoutsgetpayoutscases) | **GET** /v1/payouts/cases | Get Payouts
*PayoutsApi* | [**payoutsPostPayouts**](docs/PayoutsApi.md#payoutspostpayouts) | **POST** /v1/payouts | Create Payouts
*PayoutsApi* | [**payoutsPostPayoutsByCaseIdApprove**](docs/PayoutsApi.md#payoutspostpayoutsbycaseidapproveoperation) | **POST** /v1/payouts/{caseId}/approve | Create Payouts
*PayoutsApi* | [**payoutsPostPayoutsByCaseIdReject**](docs/PayoutsApi.md#payoutspostpayoutsbycaseidrejectoperation) | **POST** /v1/payouts/{caseId}/reject | Create Payouts
*SystemApi* | [**systemGetSystemOrganizations**](docs/SystemApi.md#systemgetsystemorganizations) | **GET** /v1/system/organizations | Get System
*SystemApi* | [**systemGetSystemOverview**](docs/SystemApi.md#systemgetsystemoverview) | **GET** /v1/system/overview | Get System
*SystemApi* | [**systemGetSystemTransactions**](docs/SystemApi.md#systemgetsystemtransactions) | **GET** /v1/system/transactions | Get System
*SystemApi* | [**systemGetSystemWallets**](docs/SystemApi.md#systemgetsystemwallets) | **GET** /v1/system/wallets | Get System
*SystemApi* | [**systemPostSystemOrganizations**](docs/SystemApi.md#systempostsystemorganizationsoperation) | **POST** /v1/system/organizations | Create System
*TeamApi* | [**teamGetTeam**](docs/TeamApi.md#teamgetteam) | **GET** /v1/team | Get Team
*TeamApi* | [**teamPostTeam**](docs/TeamApi.md#teampostteamoperation) | **POST** /v1/team | Create Team
*TenantsApi* | [**tenantsGetTenantsById**](docs/TenantsApi.md#tenantsgettenantsbyid) | **GET** /v1/tenants/{id} | Get Tenants
*TenantsApi* | [**tenantsPostTenants**](docs/TenantsApi.md#tenantsposttenantsoperation) | **POST** /v1/tenants | Create Tenants
*TenantsApi* | [**tenantsPostTenantsByIdApiKeys**](docs/TenantsApi.md#tenantsposttenantsbyidapikeysoperation) | **POST** /v1/tenants/{id}/api-keys | Create Tenants
*TransfersApi* | [**transfersPostTransfers**](docs/TransfersApi.md#transfersposttransfersoperation) | **POST** /v1/transfers | Create Transfers
*TransfersApi* | [**transfersPostTransfersSimulateFee**](docs/TransfersApi.md#transfersposttransferssimulatefeeoperation) | **POST** /v1/transfers/simulate-fee | Create Transfers
*WalletsApi* | [**walletsGetWallets**](docs/WalletsApi.md#walletsgetwallets) | **GET** /v1/wallets | Get Wallets
*WalletsApi* | [**walletsGetWalletsById**](docs/WalletsApi.md#walletsgetwalletsbyid) | **GET** /v1/wallets/{id} | Get Wallets
*WalletsApi* | [**walletsGetWalletsLookup**](docs/WalletsApi.md#walletsgetwalletslookup) | **GET** /v1/wallets/lookup | Get Wallets
*WalletsApi* | [**walletsPostWallets**](docs/WalletsApi.md#walletspostwalletsoperation) | **POST** /v1/wallets | Create Wallets


### Models

- [AdminGetAdminDashboard200Response](docs/AdminGetAdminDashboard200Response.md)
- [AdminGetAdminDashboard200ResponsePoolBalancesInner](docs/AdminGetAdminDashboard200ResponsePoolBalancesInner.md)
- [AdminGetAdminDashboard200ResponseRevenueByurrencyInner](docs/AdminGetAdminDashboard200ResponseRevenueByurrencyInner.md)
- [AdminGetAdminDashboard200ResponseTvlByCurrencyInner](docs/AdminGetAdminDashboard200ResponseTvlByCurrencyInner.md)
- [AdminGetAdminFeeSchedules200Response](docs/AdminGetAdminFeeSchedules200Response.md)
- [AdminGetAdminFeeSchedules200ResponseDataInner](docs/AdminGetAdminFeeSchedules200ResponseDataInner.md)
- [AdminGetAdminFeeSchedules200ResponseDataInnerRulesInner](docs/AdminGetAdminFeeSchedules200ResponseDataInnerRulesInner.md)
- [AdminPostAdminFeeSchedulesByIdRules201Response](docs/AdminPostAdminFeeSchedulesByIdRules201Response.md)
- [AdminPostAdminFeeSchedulesByIdRulesRequest](docs/AdminPostAdminFeeSchedulesByIdRulesRequest.md)
- [ApiKeyMetadata](docs/ApiKeyMetadata.md)
- [ApiKeyRestrictions](docs/ApiKeyRestrictions.md)
- [ApiRequestLog](docs/ApiRequestLog.md)
- [ApiRequestLogPagination](docs/ApiRequestLogPagination.md)
- [ApprovalCase](docs/ApprovalCase.md)
- [AuthGetAuthMe200Response](docs/AuthGetAuthMe200Response.md)
- [AuthGetAuthMe200ResponseUser](docs/AuthGetAuthMe200ResponseUser.md)
- [BankSlipResult](docs/BankSlipResult.md)
- [BankSlipVerifyRequest](docs/BankSlipVerifyRequest.md)
- [BankStatementLine](docs/BankStatementLine.md)
- [DepositsPostDepositsBankStatements200Response](docs/DepositsPostDepositsBankStatements200Response.md)
- [DepositsPostDepositsBankStatementsRequest](docs/DepositsPostDepositsBankStatementsRequest.md)
- [DeveloperApplication](docs/DeveloperApplication.md)
- [DeveloperGetDeveloperApiKeys200Response](docs/DeveloperGetDeveloperApiKeys200Response.md)
- [DeveloperGetDeveloperApps200Response](docs/DeveloperGetDeveloperApps200Response.md)
- [DeveloperGetDeveloperRequestLogs200Response](docs/DeveloperGetDeveloperRequestLogs200Response.md)
- [DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest](docs/DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest.md)
- [DeveloperPatchDeveloperAppsByIdRequest](docs/DeveloperPatchDeveloperAppsByIdRequest.md)
- [DeveloperPostDeveloperApiKeys201Response](docs/DeveloperPostDeveloperApiKeys201Response.md)
- [DeveloperPostDeveloperApiKeysByIdRotate201Response](docs/DeveloperPostDeveloperApiKeysByIdRotate201Response.md)
- [DeveloperPostDeveloperApiKeysRequest](docs/DeveloperPostDeveloperApiKeysRequest.md)
- [DeveloperPostDeveloperAppsRequest](docs/DeveloperPostDeveloperAppsRequest.md)
- [HealthGetHealth200Response](docs/HealthGetHealth200Response.md)
- [JournalGetJournal200Response](docs/JournalGetJournal200Response.md)
- [JournalGetJournal200ResponseDataInner](docs/JournalGetJournal200ResponseDataInner.md)
- [JournalGetJournalById200Response](docs/JournalGetJournalById200Response.md)
- [JournalGetJournalById404Response](docs/JournalGetJournalById404Response.md)
- [JournalGetJournalById404ResponseError](docs/JournalGetJournalById404ResponseError.md)
- [JournalLine](docs/JournalLine.md)
- [MoMoDepositResult](docs/MoMoDepositResult.md)
- [MoMoWebhookPayload](docs/MoMoWebhookPayload.md)
- [PayoutCancellation](docs/PayoutCancellation.md)
- [PayoutRequest](docs/PayoutRequest.md)
- [PayoutSettlement](docs/PayoutSettlement.md)
- [PayoutsGetPayoutsCases200Response](docs/PayoutsGetPayoutsCases200Response.md)
- [PayoutsPostPayouts200Response](docs/PayoutsPostPayouts200Response.md)
- [PayoutsPostPayoutsByCaseIdApproveRequest](docs/PayoutsPostPayoutsByCaseIdApproveRequest.md)
- [PayoutsPostPayoutsByCaseIdRejectRequest](docs/PayoutsPostPayoutsByCaseIdRejectRequest.md)
- [SystemGetSystemOrganizations200Response](docs/SystemGetSystemOrganizations200Response.md)
- [SystemGetSystemOrganizations200ResponseDataInner](docs/SystemGetSystemOrganizations200ResponseDataInner.md)
- [SystemGetSystemOverview200Response](docs/SystemGetSystemOverview200Response.md)
- [SystemGetSystemOverview200ResponseOrganizationsInner](docs/SystemGetSystemOverview200ResponseOrganizationsInner.md)
- [SystemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner](docs/SystemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner.md)
- [SystemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner](docs/SystemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner.md)
- [SystemGetSystemOverview200ResponsePlatformTvlByCurrencyInner](docs/SystemGetSystemOverview200ResponsePlatformTvlByCurrencyInner.md)
- [SystemGetSystemTransactions200Response](docs/SystemGetSystemTransactions200Response.md)
- [SystemGetSystemTransactions200ResponseDataInner](docs/SystemGetSystemTransactions200ResponseDataInner.md)
- [SystemGetSystemTransactions200ResponseDataInnerLinesInner](docs/SystemGetSystemTransactions200ResponseDataInnerLinesInner.md)
- [SystemGetSystemWallets200Response](docs/SystemGetSystemWallets200Response.md)
- [SystemGetSystemWallets200ResponseDataInner](docs/SystemGetSystemWallets200ResponseDataInner.md)
- [SystemPostSystemOrganizations201Response](docs/SystemPostSystemOrganizations201Response.md)
- [SystemPostSystemOrganizations201ResponseAdminUser](docs/SystemPostSystemOrganizations201ResponseAdminUser.md)
- [SystemPostSystemOrganizations201ResponseInviteEmail](docs/SystemPostSystemOrganizations201ResponseInviteEmail.md)
- [SystemPostSystemOrganizations201ResponseInviteEmailOneOf](docs/SystemPostSystemOrganizations201ResponseInviteEmailOneOf.md)
- [SystemPostSystemOrganizations201ResponseInviteEmailOneOf1](docs/SystemPostSystemOrganizations201ResponseInviteEmailOneOf1.md)
- [SystemPostSystemOrganizations201ResponseInviteEmailOneOf2](docs/SystemPostSystemOrganizations201ResponseInviteEmailOneOf2.md)
- [SystemPostSystemOrganizationsRequest](docs/SystemPostSystemOrganizationsRequest.md)
- [SystemPostSystemOrganizationsRequestAdmin](docs/SystemPostSystemOrganizationsRequestAdmin.md)
- [TeamGetTeam200Response](docs/TeamGetTeam200Response.md)
- [TeamGetTeam200ResponseDataInner](docs/TeamGetTeam200ResponseDataInner.md)
- [TeamPostTeam201Response](docs/TeamPostTeam201Response.md)
- [TeamPostTeam201ResponseUser](docs/TeamPostTeam201ResponseUser.md)
- [TeamPostTeamRequest](docs/TeamPostTeamRequest.md)
- [TenantsPostTenants201Response](docs/TenantsPostTenants201Response.md)
- [TenantsPostTenantsByIdApiKeys201Response](docs/TenantsPostTenantsByIdApiKeys201Response.md)
- [TenantsPostTenantsByIdApiKeysRequest](docs/TenantsPostTenantsByIdApiKeysRequest.md)
- [TenantsPostTenantsRequest](docs/TenantsPostTenantsRequest.md)
- [TenantsPostTenantsRequestConfig](docs/TenantsPostTenantsRequestConfig.md)
- [TransfersPostTransfers200Response](docs/TransfersPostTransfers200Response.md)
- [TransfersPostTransfersRequest](docs/TransfersPostTransfersRequest.md)
- [TransfersPostTransfersSimulateFee200Response](docs/TransfersPostTransfersSimulateFee200Response.md)
- [TransfersPostTransfersSimulateFee200ResponseFeeBreakdown](docs/TransfersPostTransfersSimulateFee200ResponseFeeBreakdown.md)
- [TransfersPostTransfersSimulateFeeRequest](docs/TransfersPostTransfersSimulateFeeRequest.md)
- [WalletsGetWallets200Response](docs/WalletsGetWallets200Response.md)
- [WalletsGetWallets200ResponseDataInner](docs/WalletsGetWallets200ResponseDataInner.md)
- [WalletsGetWallets200ResponseDataInnerBalance](docs/WalletsGetWallets200ResponseDataInnerBalance.md)
- [WalletsGetWalletsLookup200Response](docs/WalletsGetWalletsLookup200Response.md)
- [WalletsGetWalletsLookup200ResponseUser](docs/WalletsGetWalletsLookup200ResponseUser.md)
- [WalletsGetWalletsLookup200ResponseWallet](docs/WalletsGetWalletsLookup200ResponseWallet.md)
- [WalletsGetWalletsLookup404Response](docs/WalletsGetWalletsLookup404Response.md)
- [WalletsPostWalletsRequest](docs/WalletsPostWalletsRequest.md)

### Authorization


Authentication schemes defined for the API:
<a id="apiKey"></a>
#### apiKey


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header
<a id="systemKey"></a>
#### systemKey


- **Type**: API key
- **API key parameter name**: `X-System-Key`
- **Location**: HTTP header
<a id="hmacKeyId"></a>
#### hmacKeyId


- **Type**: API key
- **API key parameter name**: `X-FWallet-Key-Id`
- **Location**: HTTP header
<a id="hmacTimestamp"></a>
#### hmacTimestamp


- **Type**: API key
- **API key parameter name**: `X-FWallet-Timestamp`
- **Location**: HTTP header
<a id="hmacNonce"></a>
#### hmacNonce


- **Type**: API key
- **API key parameter name**: `X-FWallet-Nonce`
- **Location**: HTTP header
<a id="hmacContentSha256"></a>
#### hmacContentSha256


- **Type**: API key
- **API key parameter name**: `X-FWallet-Content-SHA256`
- **Location**: HTTP header
<a id="hmacSignature"></a>
#### hmacSignature


- **Type**: API key
- **API key parameter name**: `X-FWallet-Signature`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.0`
- Package version: `0.1.0`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
