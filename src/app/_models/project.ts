import {Customer} from './customer';

/**
 * Class Project
 */
export class Project {

    /** universal unique idntifier */
    uuid: string;

    /** name of the project */
    name: string;

    /** overall budget of the project */
    budget: number;

    /** list of custumers */
    customers: Customer[];

    /**
     * Transform any given value into Project object
     * @param value
     */
    public static toProject(value: any) {
        const project = new Project();
        if (value) {
            project.uuid = value.uuid;
            project.name = value.name;
            project.budget = value.budget;
            if (value.customers) {
                project.customers = value.customers.map(customer => {
                    return Customer.toCustomer(customer);
                });
            }
        }
        return project;
    }
}
