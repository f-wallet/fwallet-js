export * from './adminApi';
import { AdminApi } from './adminApi';
export * from './authApi';
import { AuthApi } from './authApi';
export * from './depositsApi';
import { DepositsApi } from './depositsApi';
export * from './developerApi';
import { DeveloperApi } from './developerApi';
export * from './healthApi';
import { HealthApi } from './healthApi';
export * from './journalApi';
import { JournalApi } from './journalApi';
export * from './payoutsApi';
import { PayoutsApi } from './payoutsApi';
export * from './systemApi';
import { SystemApi } from './systemApi';
export * from './teamApi';
import { TeamApi } from './teamApi';
export * from './tenantsApi';
import { TenantsApi } from './tenantsApi';
export * from './transfersApi';
import { TransfersApi } from './transfersApi';
export * from './walletsApi';
import { WalletsApi } from './walletsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AdminApi, AuthApi, DepositsApi, DeveloperApi, HealthApi, JournalApi, PayoutsApi, SystemApi, TeamApi, TenantsApi, TransfersApi, WalletsApi];
