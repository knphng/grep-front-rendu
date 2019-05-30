import {Address} from './address';

export class Customer {

    /** universal unique idntifier */
    uuid: string;
    /** name of the customer */
    name: string;
    /** phone number of the customer */
    phoneNumber: string;
    /** address of the customer - type Address*/
    address: Address;
    /** company name of the customer - if exists */
    companyName: string;
    /** telephone department of the customer - if exists */
    telephoneDepartment: string;

    /** Transform any value to object Customer*/
    public static toCustomer(value: any) {
        const customer = new Customer();
        if (value) {
            customer.uuid = value.uuid;
            customer.name = value.name;
            customer.phoneNumber = value.phoneNumber;
            if (value.address) {
                customer.address = Address.toAddress(value.address);
            }
            customer.companyName = value.companyName;
            customer.telephoneDepartment = value.telephoneDepartment;
        }
        return customer;
    }
}
