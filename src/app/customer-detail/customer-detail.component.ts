import {Component, OnInit, Input} from '@angular/core';
import {Customer} from '../_models/customer';
import {DataSource} from '@angular/cdk/table';
import {CustomerService} from '../_services/customer.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
    @Input() customer: Customer;

    constructor() {
    }

    ngOnInit() {
    }

}

