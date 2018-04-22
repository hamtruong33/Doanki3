export class ListProduct {
    _id: string;
    product_name: string;
    product_pricestock: number;
    product_pricesale: number;
    product_manufact: string;
    id_shop: [{shop_name:string},{_id:string}];
    id_category:  [{cate_name:string},{_id:string}];
    product_datecreate: Date;
    product_quickken: string;
    product_description: string;
    status: boolean;
    status_sale: boolean;
    status_new: boolean;
    id_account: string;
}