import { Base } from '../typings';

export type UserLogin = {
  phone?: string;
  account?: string;
  password?: string;
  verifyCode?: number;
};

type TokenData = {
  token: string;
};

export interface Token extends Base {
  data: TokenData;
}
