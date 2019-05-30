import {Component, OnInit} from '@angular/core';
import {Customer} from '../_models/customer';
import {CustomerService} from '../_services/customer.service';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'phoneNumber', 'type', 'edit', 'delete'];
    dataSource: MatTableDataSource<Customer>;

    customers: Customer[];


    constructor(private customerService: CustomerService, private dialog: MatDialog, private http: HttpClient, ) {
        this.customerService.getAll().subscribe(

            customers => {
                this.customers = customers.map(customer => Customer.toCustomer(customer));
                this.dataSource = new MatTableDataSource(this.customers);
            }

        );

    }

    selectedCustomer: Customer;

    onSelect(customer: Customer): void {
        this.selectedCustomer = customer;
    }

    ngOnInit() {
    }



    openCustomerEdit(): void {
        const dialogRef = this.dialog.open(CustomerEditComponent, {
            data: {
                customer: new Customer,
            },
        });
        // le customer passe en paramètres
        dialogRef.afterClosed().subscribe((customer) => {
            this.dataSource.data.push(Customer.toCustomer(customer));
            this.dataSource = new MatTableDataSource(this.customers);
        });
    }
}




