import request from '@/utils/request';
import { UserLogin, Token } from './typings';

export const accountLogin = (data: UserLogin) => request.post<Token>('/api/v1/admin/user/login', data);
