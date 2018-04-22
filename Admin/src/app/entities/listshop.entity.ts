export class ListShop {
    _id: string;
    shop_name: string;
    shop_address: string;
    shop_logo: string;
    shop_hotline: string;
    shop_title: string;
    id_user:[{user_lastname:string},{_id:string}];
    shop_datecreate: Date;
    shop_dateusing: Date;
    id_account: [{acc_lastname:string},{_id:string}];
    shop_active: boolean;
    status: boolean;
    shop_maincate: string;
}