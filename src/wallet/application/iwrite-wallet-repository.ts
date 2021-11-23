import { Wallet } from '../domain/wallet';

export interface IWriteWalletRepository {
	create(wallet: Wallet): Promise<any>;
	remove(id?:number,name?:string): Promise<any>;
	update(id:number,name?:string,balance?:number,icon?:string): Promise<any>;
}


