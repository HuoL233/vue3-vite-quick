import { IRootStateTypes } from './IRootStateTypes';
import { IUserStateTypes } from './IUserStateTypes';

export interface IStateTypes extends IRootStateTypes {
    UserModule: IUserStateTypes
}
