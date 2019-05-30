import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Project} from '../_models/project';
import {Task} from '../_models/task';
import {Customer} from '../_models/customer';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProjectService} from '../_services/project.service';
import {TaskService} from '../_services/task.service';
import {CustomerService} from '../_services/customer.service';
import {WorkspaceService} from '../_services/workspace.service';
import {Route} from '../route';
import {Workspace} from '../_models/workspace';
import {Activity} from '../_models/activity';

@Component({
    selector: 'app-workspace-details',
    templateUrl: './workspace-details.component.html',
    styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit {
    displayedColumns: string[] = ['name', 'actions'];
    dataSourceProject: MatTableDataSource<Project>;
    dataSourceActivities: MatTableDataSource<Activity>;
    dataSourceCustomers: MatTableDataSource<Customer>;

    /* current workspace */
    workspace: Workspace;

    /** project list according to workspace */
    projects: Project[];

    /** customers according to workspace */
    customers: Customer[];

    /** activities according to workspace */
    activities: Activity[];

    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @Input() project: Observable<Project>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private http: HttpClient,
        private projectService: ProjectService,
        private taskService: TaskService,
        private customerService: CustomerService,
        private workspaceService: WorkspaceService,
        private router: Router,
    ) {

    }

    ngOnInit() {
        if (this.activatedRoute.snapshot.paramMap.get('uuid')) {
            const uuid = this.activatedRoute.snapshot.paramMap.get('uuid');
            this.workspace = new Workspace();
            this.workspace.uuid = uuid;
            this.initProjects();
            this.initActivities();
            this.initCustomers();
        }
    }

    applyFilterProject(filterValue: string) {
        this.dataSourceProject.filter = filterValue.trim().toLowerCase();

        if (this.dataSourceProject.paginator) {
            this.dataSourceProject.paginator.firstPage();
        }
    }

    applyFilterTask(filterValue: string) {
        this.dataSourceActivities.filter = filterValue.trim().toLowerCase();

        if (this.dataSourceActivities.paginator) {
            this.dataSourceActivities.paginator.firstPage();
        }
    }

    applyFilterCustomer(filterValue: string) {
        this.dataSourceCustomers.filter = filterValue.trim().toLowerCase();

        if (this.dataSourceCustomers.paginator) {
            this.dataSourceCustomers.paginator.firstPage();
        }
    }

    initProjects() {
        this.workspaceService.getProjects(this.workspace.uuid).subscribe(
            res => {
                this.projects = res.map(project => {
                    return Project.toProject(project);
                });
                this.dataSourceProject = new MatTableDataSource(this.projects);
                this.dataSourceProject.paginator = this.paginator;
                this.dataSourceProject.sort = this.sort;
            }
        );
        // Assign the data to the data source for the table to render
    }

    initCustomers() {
        this.workspaceService.getCustomers(this.workspace.uuid).subscribe(
            customers => {
                this.customers = customers.map(customer => {
                    return Customer.toCustomer(customer);
                });
                this.dataSourceCustomers = new MatTableDataSource(this.customers);
                this.dataSourceCustomers.paginator = this.paginator;
                this.dataSourceCustomers.sort = this.sort;
            }
        );
        // Assign the data to the data source for the table to render
    }

    initActivities() {
        this.workspaceService.getActivities(this.workspace.uuid).subscribe(
            res => {
                this.activities = res.map(activity => {
                    return Activity.toActivity(activity);
                });
                this.dataSourceCustomers = new MatTableDataSource(this.customers);
                this.dataSourceCustomers.paginator = this.paginator;
                this.dataSourceCustomers.sort = this.sort;
            }
        );
        // Assign the data to the data source for the table to render
    }

    visualizationProject(uuid) {
        this.router.navigateByUrl('/' + Route.PROJECT_DETAILS.replace('<uuid>', uuid));
    }

    visualizationTask() {
        // renvoyer sur le détails de la tâche
    }

    visualizationCustomer() {
        // renvoyer sur le détails du client
    }
}
