import {Component, OnInit, Inject, Input, ɵdefaultIterableDiffers} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Customer} from '../_models/customer';
import {CustomerService} from '../_services/customer.service';


@Component
({
    selector: 'app-customer-edit',
    templateUrl: './customer-edit.component.html',
    styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

    @Input() customer: Customer;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CustomerEditComponent>,
        private customerService: CustomerService,
        ) {
        if (this.data) {
            this.initData();
        }
    }

    initData() {

        this.customer = this.data.customer;

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    save() {
        this.postCustomer();
    }

    ngOnInit() {
    }

    postCustomer() {
        this.customerService.post(this.customer).subscribe(
            customer => {
                this.dialogRef.close(customer);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }
}
