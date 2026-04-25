import localVarRequest from 'request';

export * from './adminGetAdminDashboard200Response';
export * from './adminGetAdminDashboard200ResponsePoolBalancesInner';
export * from './adminGetAdminDashboard200ResponseRevenueByurrencyInner';
export * from './adminGetAdminDashboard200ResponseTvlByCurrencyInner';
export * from './adminGetAdminFeeSchedules200Response';
export * from './adminGetAdminFeeSchedules200ResponseDataInner';
export * from './adminGetAdminFeeSchedules200ResponseDataInnerRulesInner';
export * from './adminPostAdminFeeSchedulesByIdRules201Response';
export * from './adminPostAdminFeeSchedulesByIdRulesRequest';
export * from './apiKeyMetadata';
export * from './apiKeyRestrictions';
export * from './apiRequestLog';
export * from './apiRequestLogPagination';
export * from './approvalCase';
export * from './authGetAuthMe200Response';
export * from './authGetAuthMe200ResponseUser';
export * from './bankSlipResult';
export * from './bankSlipVerifyRequest';
export * from './bankStatementLine';
export * from './depositsPostDepositsBankStatements200Response';
export * from './depositsPostDepositsBankStatementsRequest';
export * from './developerApplication';
export * from './developerGetDeveloperApiKeys200Response';
export * from './developerGetDeveloperApps200Response';
export * from './developerGetDeveloperRequestLogs200Response';
export * from './developerPatchDeveloperApiKeysByIdRestrictionsRequest';
export * from './developerPatchDeveloperAppsByIdRequest';
export * from './developerPostDeveloperApiKeys201Response';
export * from './developerPostDeveloperApiKeysByIdRotate201Response';
export * from './developerPostDeveloperApiKeysRequest';
export * from './developerPostDeveloperAppsRequest';
export * from './healthGetHealth200Response';
export * from './journalGetJournal200Response';
export * from './journalGetJournal200ResponseDataInner';
export * from './journalGetJournalById200Response';
export * from './journalGetJournalById404Response';
export * from './journalGetJournalById404ResponseError';
export * from './journalLine';
export * from './moMoDepositResult';
export * from './moMoWebhookPayload';
export * from './payoutCancellation';
export * from './payoutRequest';
export * from './payoutSettlement';
export * from './payoutsGetPayoutsCases200Response';
export * from './payoutsPostPayouts200Response';
export * from './payoutsPostPayoutsByCaseIdApproveRequest';
export * from './payoutsPostPayoutsByCaseIdRejectRequest';
export * from './systemGetSystemOrganizations200Response';
export * from './systemGetSystemOrganizations200ResponseDataInner';
export * from './systemGetSystemOverview200Response';
export * from './systemGetSystemOverview200ResponseOrganizationsInner';
export * from './systemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner';
export * from './systemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner';
export * from './systemGetSystemOverview200ResponsePlatformTvlByCurrencyInner';
export * from './systemGetSystemTransactions200Response';
export * from './systemGetSystemTransactions200ResponseDataInner';
export * from './systemGetSystemTransactions200ResponseDataInnerLinesInner';
export * from './systemGetSystemWallets200Response';
export * from './systemGetSystemWallets200ResponseDataInner';
export * from './systemPostSystemOrganizations201Response';
export * from './systemPostSystemOrganizations201ResponseAdminUser';
export * from './systemPostSystemOrganizations201ResponseInviteEmail';
export * from './systemPostSystemOrganizations201ResponseInviteEmailOneOf';
export * from './systemPostSystemOrganizations201ResponseInviteEmailOneOf1';
export * from './systemPostSystemOrganizations201ResponseInviteEmailOneOf2';
export * from './systemPostSystemOrganizationsRequest';
export * from './systemPostSystemOrganizationsRequestAdmin';
export * from './teamGetTeam200Response';
export * from './teamGetTeam200ResponseDataInner';
export * from './teamPostTeam201Response';
export * from './teamPostTeam201ResponseUser';
export * from './teamPostTeamRequest';
export * from './tenantsPostTenants201Response';
export * from './tenantsPostTenantsByIdApiKeys201Response';
export * from './tenantsPostTenantsByIdApiKeysRequest';
export * from './tenantsPostTenantsRequest';
export * from './tenantsPostTenantsRequestConfig';
export * from './transfersPostTransfers200Response';
export * from './transfersPostTransfersRequest';
export * from './transfersPostTransfersSimulateFee200Response';
export * from './transfersPostTransfersSimulateFee200ResponseFeeBreakdown';
export * from './transfersPostTransfersSimulateFeeRequest';
export * from './walletsGetWallets200Response';
export * from './walletsGetWallets200ResponseDataInner';
export * from './walletsGetWallets200ResponseDataInnerBalance';
export * from './walletsGetWalletsLookup200Response';
export * from './walletsGetWalletsLookup200ResponseUser';
export * from './walletsGetWalletsLookup200ResponseWallet';
export * from './walletsGetWalletsLookup404Response';
export * from './walletsPostWalletsRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdminGetAdminDashboard200Response } from './adminGetAdminDashboard200Response';
import { AdminGetAdminDashboard200ResponsePoolBalancesInner } from './adminGetAdminDashboard200ResponsePoolBalancesInner';
import { AdminGetAdminDashboard200ResponseRevenueByurrencyInner } from './adminGetAdminDashboard200ResponseRevenueByurrencyInner';
import { AdminGetAdminDashboard200ResponseTvlByCurrencyInner } from './adminGetAdminDashboard200ResponseTvlByCurrencyInner';
import { AdminGetAdminFeeSchedules200Response } from './adminGetAdminFeeSchedules200Response';
import { AdminGetAdminFeeSchedules200ResponseDataInner } from './adminGetAdminFeeSchedules200ResponseDataInner';
import { AdminGetAdminFeeSchedules200ResponseDataInnerRulesInner } from './adminGetAdminFeeSchedules200ResponseDataInnerRulesInner';
import { AdminPostAdminFeeSchedulesByIdRules201Response } from './adminPostAdminFeeSchedulesByIdRules201Response';
import { AdminPostAdminFeeSchedulesByIdRulesRequest } from './adminPostAdminFeeSchedulesByIdRulesRequest';
import { ApiKeyMetadata } from './apiKeyMetadata';
import { ApiKeyRestrictions } from './apiKeyRestrictions';
import { ApiRequestLog } from './apiRequestLog';
import { ApiRequestLogPagination } from './apiRequestLogPagination';
import { ApprovalCase } from './approvalCase';
import { AuthGetAuthMe200Response } from './authGetAuthMe200Response';
import { AuthGetAuthMe200ResponseUser } from './authGetAuthMe200ResponseUser';
import { BankSlipResult } from './bankSlipResult';
import { BankSlipVerifyRequest } from './bankSlipVerifyRequest';
import { BankStatementLine } from './bankStatementLine';
import { DepositsPostDepositsBankStatements200Response } from './depositsPostDepositsBankStatements200Response';
import { DepositsPostDepositsBankStatementsRequest } from './depositsPostDepositsBankStatementsRequest';
import { DeveloperApplication } from './developerApplication';
import { DeveloperGetDeveloperApiKeys200Response } from './developerGetDeveloperApiKeys200Response';
import { DeveloperGetDeveloperApps200Response } from './developerGetDeveloperApps200Response';
import { DeveloperGetDeveloperRequestLogs200Response } from './developerGetDeveloperRequestLogs200Response';
import { DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest } from './developerPatchDeveloperApiKeysByIdRestrictionsRequest';
import { DeveloperPatchDeveloperAppsByIdRequest } from './developerPatchDeveloperAppsByIdRequest';
import { DeveloperPostDeveloperApiKeys201Response } from './developerPostDeveloperApiKeys201Response';
import { DeveloperPostDeveloperApiKeysByIdRotate201Response } from './developerPostDeveloperApiKeysByIdRotate201Response';
import { DeveloperPostDeveloperApiKeysRequest } from './developerPostDeveloperApiKeysRequest';
import { DeveloperPostDeveloperAppsRequest } from './developerPostDeveloperAppsRequest';
import { HealthGetHealth200Response } from './healthGetHealth200Response';
import { JournalGetJournal200Response } from './journalGetJournal200Response';
import { JournalGetJournal200ResponseDataInner } from './journalGetJournal200ResponseDataInner';
import { JournalGetJournalById200Response } from './journalGetJournalById200Response';
import { JournalGetJournalById404Response } from './journalGetJournalById404Response';
import { JournalGetJournalById404ResponseError } from './journalGetJournalById404ResponseError';
import { JournalLine } from './journalLine';
import { MoMoDepositResult } from './moMoDepositResult';
import { MoMoWebhookPayload } from './moMoWebhookPayload';
import { PayoutCancellation } from './payoutCancellation';
import { PayoutRequest } from './payoutRequest';
import { PayoutSettlement } from './payoutSettlement';
import { PayoutsGetPayoutsCases200Response } from './payoutsGetPayoutsCases200Response';
import { PayoutsPostPayouts200Response } from './payoutsPostPayouts200Response';
import { PayoutsPostPayoutsByCaseIdApproveRequest } from './payoutsPostPayoutsByCaseIdApproveRequest';
import { PayoutsPostPayoutsByCaseIdRejectRequest } from './payoutsPostPayoutsByCaseIdRejectRequest';
import { SystemGetSystemOrganizations200Response } from './systemGetSystemOrganizations200Response';
import { SystemGetSystemOrganizations200ResponseDataInner } from './systemGetSystemOrganizations200ResponseDataInner';
import { SystemGetSystemOverview200Response } from './systemGetSystemOverview200Response';
import { SystemGetSystemOverview200ResponseOrganizationsInner } from './systemGetSystemOverview200ResponseOrganizationsInner';
import { SystemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner } from './systemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner';
import { SystemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner } from './systemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner';
import { SystemGetSystemOverview200ResponsePlatformTvlByCurrencyInner } from './systemGetSystemOverview200ResponsePlatformTvlByCurrencyInner';
import { SystemGetSystemTransactions200Response } from './systemGetSystemTransactions200Response';
import { SystemGetSystemTransactions200ResponseDataInner } from './systemGetSystemTransactions200ResponseDataInner';
import { SystemGetSystemTransactions200ResponseDataInnerLinesInner } from './systemGetSystemTransactions200ResponseDataInnerLinesInner';
import { SystemGetSystemWallets200Response } from './systemGetSystemWallets200Response';
import { SystemGetSystemWallets200ResponseDataInner } from './systemGetSystemWallets200ResponseDataInner';
import { SystemPostSystemOrganizations201Response } from './systemPostSystemOrganizations201Response';
import { SystemPostSystemOrganizations201ResponseAdminUser } from './systemPostSystemOrganizations201ResponseAdminUser';
import { SystemPostSystemOrganizations201ResponseInviteEmail } from './systemPostSystemOrganizations201ResponseInviteEmail';
import { SystemPostSystemOrganizations201ResponseInviteEmailOneOf } from './systemPostSystemOrganizations201ResponseInviteEmailOneOf';
import { SystemPostSystemOrganizations201ResponseInviteEmailOneOf1 } from './systemPostSystemOrganizations201ResponseInviteEmailOneOf1';
import { SystemPostSystemOrganizations201ResponseInviteEmailOneOf2 } from './systemPostSystemOrganizations201ResponseInviteEmailOneOf2';
import { SystemPostSystemOrganizationsRequest } from './systemPostSystemOrganizationsRequest';
import { SystemPostSystemOrganizationsRequestAdmin } from './systemPostSystemOrganizationsRequestAdmin';
import { TeamGetTeam200Response } from './teamGetTeam200Response';
import { TeamGetTeam200ResponseDataInner } from './teamGetTeam200ResponseDataInner';
import { TeamPostTeam201Response } from './teamPostTeam201Response';
import { TeamPostTeam201ResponseUser } from './teamPostTeam201ResponseUser';
import { TeamPostTeamRequest } from './teamPostTeamRequest';
import { TenantsPostTenants201Response } from './tenantsPostTenants201Response';
import { TenantsPostTenantsByIdApiKeys201Response } from './tenantsPostTenantsByIdApiKeys201Response';
import { TenantsPostTenantsByIdApiKeysRequest } from './tenantsPostTenantsByIdApiKeysRequest';
import { TenantsPostTenantsRequest } from './tenantsPostTenantsRequest';
import { TenantsPostTenantsRequestConfig } from './tenantsPostTenantsRequestConfig';
import { TransfersPostTransfers200Response } from './transfersPostTransfers200Response';
import { TransfersPostTransfersRequest } from './transfersPostTransfersRequest';
import { TransfersPostTransfersSimulateFee200Response } from './transfersPostTransfersSimulateFee200Response';
import { TransfersPostTransfersSimulateFee200ResponseFeeBreakdown } from './transfersPostTransfersSimulateFee200ResponseFeeBreakdown';
import { TransfersPostTransfersSimulateFeeRequest } from './transfersPostTransfersSimulateFeeRequest';
import { WalletsGetWallets200Response } from './walletsGetWallets200Response';
import { WalletsGetWallets200ResponseDataInner } from './walletsGetWallets200ResponseDataInner';
import { WalletsGetWallets200ResponseDataInnerBalance } from './walletsGetWallets200ResponseDataInnerBalance';
import { WalletsGetWalletsLookup200Response } from './walletsGetWalletsLookup200Response';
import { WalletsGetWalletsLookup200ResponseUser } from './walletsGetWalletsLookup200ResponseUser';
import { WalletsGetWalletsLookup200ResponseWallet } from './walletsGetWalletsLookup200ResponseWallet';
import { WalletsGetWalletsLookup404Response } from './walletsGetWalletsLookup404Response';
import { WalletsPostWalletsRequest } from './walletsPostWalletsRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ApiKeyMetadata.EnvironmentEnum": ApiKeyMetadata.EnvironmentEnum,
        "ApiKeyMetadata.StatusEnum": ApiKeyMetadata.StatusEnum,
        "ApiKeyMetadata.AuthModeEnum": ApiKeyMetadata.AuthModeEnum,
        "ApiKeyRestrictions.AllowedOwnerTypesEnum": ApiKeyRestrictions.AllowedOwnerTypesEnum,
        "ApiRequestLog.AuthModeEnum": ApiRequestLog.AuthModeEnum,
        "ApiRequestLog.EnvironmentEnum": ApiRequestLog.EnvironmentEnum,
        "ApprovalCase.StatusEnum": ApprovalCase.StatusEnum,
        "BankSlipResult.ResultEnum": BankSlipResult.ResultEnum,
        "DeveloperApplication.EnvironmentEnum": DeveloperApplication.EnvironmentEnum,
        "DeveloperApplication.StatusEnum": DeveloperApplication.StatusEnum,
        "DeveloperPatchDeveloperAppsByIdRequest.StatusEnum": DeveloperPatchDeveloperAppsByIdRequest.StatusEnum,
        "DeveloperPostDeveloperApiKeys201Response.EnvironmentEnum": DeveloperPostDeveloperApiKeys201Response.EnvironmentEnum,
        "DeveloperPostDeveloperApiKeys201Response.StatusEnum": DeveloperPostDeveloperApiKeys201Response.StatusEnum,
        "DeveloperPostDeveloperApiKeys201Response.AuthModeEnum": DeveloperPostDeveloperApiKeys201Response.AuthModeEnum,
        "DeveloperPostDeveloperApiKeysByIdRotate201Response.EnvironmentEnum": DeveloperPostDeveloperApiKeysByIdRotate201Response.EnvironmentEnum,
        "DeveloperPostDeveloperApiKeysByIdRotate201Response.StatusEnum": DeveloperPostDeveloperApiKeysByIdRotate201Response.StatusEnum,
        "DeveloperPostDeveloperApiKeysByIdRotate201Response.AuthModeEnum": DeveloperPostDeveloperApiKeysByIdRotate201Response.AuthModeEnum,
        "DeveloperPostDeveloperApiKeysRequest.EnvironmentEnum": DeveloperPostDeveloperApiKeysRequest.EnvironmentEnum,
        "DeveloperPostDeveloperApiKeysRequest.AuthModeEnum": DeveloperPostDeveloperApiKeysRequest.AuthModeEnum,
        "DeveloperPostDeveloperAppsRequest.EnvironmentEnum": DeveloperPostDeveloperAppsRequest.EnvironmentEnum,
        "JournalLine.DirectionEnum": JournalLine.DirectionEnum,
        "SystemPostSystemOrganizations201Response.InviteStatusEnum": SystemPostSystemOrganizations201Response.InviteStatusEnum,
        "SystemPostSystemOrganizations201ResponseAdminUser.OrgRoleEnum": SystemPostSystemOrganizations201ResponseAdminUser.OrgRoleEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmail.StatusEnum": SystemPostSystemOrganizations201ResponseInviteEmail.StatusEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmail.ProviderEnum": SystemPostSystemOrganizations201ResponseInviteEmail.ProviderEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmailOneOf.StatusEnum": SystemPostSystemOrganizations201ResponseInviteEmailOneOf.StatusEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmailOneOf.ProviderEnum": SystemPostSystemOrganizations201ResponseInviteEmailOneOf.ProviderEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmailOneOf1.StatusEnum": SystemPostSystemOrganizations201ResponseInviteEmailOneOf1.StatusEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmailOneOf1.ProviderEnum": SystemPostSystemOrganizations201ResponseInviteEmailOneOf1.ProviderEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmailOneOf2.StatusEnum": SystemPostSystemOrganizations201ResponseInviteEmailOneOf2.StatusEnum,
        "SystemPostSystemOrganizations201ResponseInviteEmailOneOf2.ProviderEnum": SystemPostSystemOrganizations201ResponseInviteEmailOneOf2.ProviderEnum,
        "TeamPostTeamRequest.OrgRoleEnum": TeamPostTeamRequest.OrgRoleEnum,
        "TenantsPostTenants201Response.StatusEnum": TenantsPostTenants201Response.StatusEnum,
        "TenantsPostTenantsByIdApiKeys201Response.EnvironmentEnum": TenantsPostTenantsByIdApiKeys201Response.EnvironmentEnum,
        "TenantsPostTenantsByIdApiKeysRequest.EnvironmentEnum": TenantsPostTenantsByIdApiKeysRequest.EnvironmentEnum,
        "TenantsPostTenantsRequestConfig.DefaultCurrencyEnum": TenantsPostTenantsRequestConfig.DefaultCurrencyEnum,
        "TenantsPostTenantsRequestConfig.AllowedCurrenciesEnum": TenantsPostTenantsRequestConfig.AllowedCurrenciesEnum,
        "TransfersPostTransfersRequest.CurrencyCodeEnum": TransfersPostTransfersRequest.CurrencyCodeEnum,
        "TransfersPostTransfersSimulateFeeRequest.CurrencyCodeEnum": TransfersPostTransfersSimulateFeeRequest.CurrencyCodeEnum,
        "WalletsGetWallets200ResponseDataInner.OwnerTypeEnum": WalletsGetWallets200ResponseDataInner.OwnerTypeEnum,
        "WalletsGetWallets200ResponseDataInner.StatusEnum": WalletsGetWallets200ResponseDataInner.StatusEnum,
        "WalletsPostWalletsRequest.OwnerTypeEnum": WalletsPostWalletsRequest.OwnerTypeEnum,
        "WalletsPostWalletsRequest.CurrencyCodeEnum": WalletsPostWalletsRequest.CurrencyCodeEnum,
}

let typeMap: {[index: string]: any} = {
    "AdminGetAdminDashboard200Response": AdminGetAdminDashboard200Response,
    "AdminGetAdminDashboard200ResponsePoolBalancesInner": AdminGetAdminDashboard200ResponsePoolBalancesInner,
    "AdminGetAdminDashboard200ResponseRevenueByurrencyInner": AdminGetAdminDashboard200ResponseRevenueByurrencyInner,
    "AdminGetAdminDashboard200ResponseTvlByCurrencyInner": AdminGetAdminDashboard200ResponseTvlByCurrencyInner,
    "AdminGetAdminFeeSchedules200Response": AdminGetAdminFeeSchedules200Response,
    "AdminGetAdminFeeSchedules200ResponseDataInner": AdminGetAdminFeeSchedules200ResponseDataInner,
    "AdminGetAdminFeeSchedules200ResponseDataInnerRulesInner": AdminGetAdminFeeSchedules200ResponseDataInnerRulesInner,
    "AdminPostAdminFeeSchedulesByIdRules201Response": AdminPostAdminFeeSchedulesByIdRules201Response,
    "AdminPostAdminFeeSchedulesByIdRulesRequest": AdminPostAdminFeeSchedulesByIdRulesRequest,
    "ApiKeyMetadata": ApiKeyMetadata,
    "ApiKeyRestrictions": ApiKeyRestrictions,
    "ApiRequestLog": ApiRequestLog,
    "ApiRequestLogPagination": ApiRequestLogPagination,
    "ApprovalCase": ApprovalCase,
    "AuthGetAuthMe200Response": AuthGetAuthMe200Response,
    "AuthGetAuthMe200ResponseUser": AuthGetAuthMe200ResponseUser,
    "BankSlipResult": BankSlipResult,
    "BankSlipVerifyRequest": BankSlipVerifyRequest,
    "BankStatementLine": BankStatementLine,
    "DepositsPostDepositsBankStatements200Response": DepositsPostDepositsBankStatements200Response,
    "DepositsPostDepositsBankStatementsRequest": DepositsPostDepositsBankStatementsRequest,
    "DeveloperApplication": DeveloperApplication,
    "DeveloperGetDeveloperApiKeys200Response": DeveloperGetDeveloperApiKeys200Response,
    "DeveloperGetDeveloperApps200Response": DeveloperGetDeveloperApps200Response,
    "DeveloperGetDeveloperRequestLogs200Response": DeveloperGetDeveloperRequestLogs200Response,
    "DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest": DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest,
    "DeveloperPatchDeveloperAppsByIdRequest": DeveloperPatchDeveloperAppsByIdRequest,
    "DeveloperPostDeveloperApiKeys201Response": DeveloperPostDeveloperApiKeys201Response,
    "DeveloperPostDeveloperApiKeysByIdRotate201Response": DeveloperPostDeveloperApiKeysByIdRotate201Response,
    "DeveloperPostDeveloperApiKeysRequest": DeveloperPostDeveloperApiKeysRequest,
    "DeveloperPostDeveloperAppsRequest": DeveloperPostDeveloperAppsRequest,
    "HealthGetHealth200Response": HealthGetHealth200Response,
    "JournalGetJournal200Response": JournalGetJournal200Response,
    "JournalGetJournal200ResponseDataInner": JournalGetJournal200ResponseDataInner,
    "JournalGetJournalById200Response": JournalGetJournalById200Response,
    "JournalGetJournalById404Response": JournalGetJournalById404Response,
    "JournalGetJournalById404ResponseError": JournalGetJournalById404ResponseError,
    "JournalLine": JournalLine,
    "MoMoDepositResult": MoMoDepositResult,
    "MoMoWebhookPayload": MoMoWebhookPayload,
    "PayoutCancellation": PayoutCancellation,
    "PayoutRequest": PayoutRequest,
    "PayoutSettlement": PayoutSettlement,
    "PayoutsGetPayoutsCases200Response": PayoutsGetPayoutsCases200Response,
    "PayoutsPostPayouts200Response": PayoutsPostPayouts200Response,
    "PayoutsPostPayoutsByCaseIdApproveRequest": PayoutsPostPayoutsByCaseIdApproveRequest,
    "PayoutsPostPayoutsByCaseIdRejectRequest": PayoutsPostPayoutsByCaseIdRejectRequest,
    "SystemGetSystemOrganizations200Response": SystemGetSystemOrganizations200Response,
    "SystemGetSystemOrganizations200ResponseDataInner": SystemGetSystemOrganizations200ResponseDataInner,
    "SystemGetSystemOverview200Response": SystemGetSystemOverview200Response,
    "SystemGetSystemOverview200ResponseOrganizationsInner": SystemGetSystemOverview200ResponseOrganizationsInner,
    "SystemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner": SystemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner,
    "SystemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner": SystemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner,
    "SystemGetSystemOverview200ResponsePlatformTvlByCurrencyInner": SystemGetSystemOverview200ResponsePlatformTvlByCurrencyInner,
    "SystemGetSystemTransactions200Response": SystemGetSystemTransactions200Response,
    "SystemGetSystemTransactions200ResponseDataInner": SystemGetSystemTransactions200ResponseDataInner,
    "SystemGetSystemTransactions200ResponseDataInnerLinesInner": SystemGetSystemTransactions200ResponseDataInnerLinesInner,
    "SystemGetSystemWallets200Response": SystemGetSystemWallets200Response,
    "SystemGetSystemWallets200ResponseDataInner": SystemGetSystemWallets200ResponseDataInner,
    "SystemPostSystemOrganizations201Response": SystemPostSystemOrganizations201Response,
    "SystemPostSystemOrganizations201ResponseAdminUser": SystemPostSystemOrganizations201ResponseAdminUser,
    "SystemPostSystemOrganizations201ResponseInviteEmail": SystemPostSystemOrganizations201ResponseInviteEmail,
    "SystemPostSystemOrganizations201ResponseInviteEmailOneOf": SystemPostSystemOrganizations201ResponseInviteEmailOneOf,
    "SystemPostSystemOrganizations201ResponseInviteEmailOneOf1": SystemPostSystemOrganizations201ResponseInviteEmailOneOf1,
    "SystemPostSystemOrganizations201ResponseInviteEmailOneOf2": SystemPostSystemOrganizations201ResponseInviteEmailOneOf2,
    "SystemPostSystemOrganizationsRequest": SystemPostSystemOrganizationsRequest,
    "SystemPostSystemOrganizationsRequestAdmin": SystemPostSystemOrganizationsRequestAdmin,
    "TeamGetTeam200Response": TeamGetTeam200Response,
    "TeamGetTeam200ResponseDataInner": TeamGetTeam200ResponseDataInner,
    "TeamPostTeam201Response": TeamPostTeam201Response,
    "TeamPostTeam201ResponseUser": TeamPostTeam201ResponseUser,
    "TeamPostTeamRequest": TeamPostTeamRequest,
    "TenantsPostTenants201Response": TenantsPostTenants201Response,
    "TenantsPostTenantsByIdApiKeys201Response": TenantsPostTenantsByIdApiKeys201Response,
    "TenantsPostTenantsByIdApiKeysRequest": TenantsPostTenantsByIdApiKeysRequest,
    "TenantsPostTenantsRequest": TenantsPostTenantsRequest,
    "TenantsPostTenantsRequestConfig": TenantsPostTenantsRequestConfig,
    "TransfersPostTransfers200Response": TransfersPostTransfers200Response,
    "TransfersPostTransfersRequest": TransfersPostTransfersRequest,
    "TransfersPostTransfersSimulateFee200Response": TransfersPostTransfersSimulateFee200Response,
    "TransfersPostTransfersSimulateFee200ResponseFeeBreakdown": TransfersPostTransfersSimulateFee200ResponseFeeBreakdown,
    "TransfersPostTransfersSimulateFeeRequest": TransfersPostTransfersSimulateFeeRequest,
    "WalletsGetWallets200Response": WalletsGetWallets200Response,
    "WalletsGetWallets200ResponseDataInner": WalletsGetWallets200ResponseDataInner,
    "WalletsGetWallets200ResponseDataInnerBalance": WalletsGetWallets200ResponseDataInnerBalance,
    "WalletsGetWalletsLookup200Response": WalletsGetWalletsLookup200Response,
    "WalletsGetWalletsLookup200ResponseUser": WalletsGetWalletsLookup200ResponseUser,
    "WalletsGetWalletsLookup200ResponseWallet": WalletsGetWalletsLookup200ResponseWallet,
    "WalletsGetWalletsLookup404Response": WalletsGetWalletsLookup404Response,
    "WalletsPostWalletsRequest": WalletsPostWalletsRequest,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
