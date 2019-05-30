import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Project} from '../_models/project';
import {Task} from '../_models/task';
import {Customer} from '../_models/customer';
import {ProjectService} from '../_services/project.service';
import {HttpClient} from '@angular/common/http';
import {TaskService} from '../_services/task.service';
import {CustomerService} from '../_services/customer.service';
import {environment} from '../../environments/environment';
import {WorkspaceService} from '../_services/workspace.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Routes} from '@angular/router';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Route} from '../route';
import {Workspace} from '../_models/workspace';

@Component({
  selector: 'app-workspaces-list',
  templateUrl: './workspaces-list.component.html',
  styleUrls: ['./workspaces-list.component.css']
})
export class WorkspacesListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'actions'];
    dataSourceWorkspace: MatTableDataSource<Workspace>;

    workspaces: Workspace[];

    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @Input() project: Observable<Project>;

    constructor(
        private http: HttpClient,
        private workspaceService: WorkspaceService,
        private router: Router,

    ) {
      this.initWorkspace();
      this.dataSourceWorkspace = new MatTableDataSource(this.workspaces);
    }

    ngOnInit() {
    }

    applyFilterProject(filterValue: string) {
        this.dataSourceWorkspace.filter = filterValue.trim().toLowerCase();

        if (this.dataSourceWorkspace.paginator) {
            this.dataSourceWorkspace.paginator.firstPage();
        }
    }

    initWorkspace() {
        this.workspaceService.getAll().subscribe(
            res => {
                this.workspaces = res.map(workspace => {
                    return Workspace.toWorkspace(workspace);
                });
                this.dataSourceWorkspace = new MatTableDataSource(this.workspaces);
                this.dataSourceWorkspace.paginator = this.paginator;
                this.dataSourceWorkspace.sort = this.sort;
            }
        );
        // Assign the data to the data source for the table to render
    }

    navigateToWorkspaceDetails(uuid) {
        this.router.navigateByUrl('/' + Route.WORKSPACES_DETAILS.replace('<uuid>', uuid));
    }

}
