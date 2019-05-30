export class Address {

    /** universal unique idntifier */
    uuid: string;
    /** name of the street */
    street: string;
    /** number of the street */
    streetNumber: number;
    /** name of the city */
    city: string;
    /** number of the zip code */
    zipCode: number;
    /** name of the state */
    state: string;

    /** Transform any value to object Address*/
    public static toAddress(value: any) {
        const address = new Address();
        if (value) {
            address.uuid = value.uuid;
            address.street = value.street;
            address.streetNumber = value.streetNumber;
            address.city = value.city;
            address.zipCode = value.zipCode;
            address.state = value.state;
        }
        return address;
    }
}

