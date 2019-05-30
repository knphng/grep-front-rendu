import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {Project} from '../_models/project';
import {ProjectService} from '../_services/project.service';
import {ProjectEditComponent} from '../project-edit/project-edit.component';

export interface Cust {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.css']
})

export class ProjectsListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'uuid', 'actions'];
    dataSource: MatTableDataSource<Project>;

    selectedCustomer: string;

    projects: Project[];

    customers: Cust[] = [
        {value: 'abc-123', viewValue: 'Cust1'},
        {value: 'def-456', viewValue: 'Cust2'},
        {value: 'ghi-789', viewValue: 'Cust3'}
    ];

    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @Input() project: Project;

    constructor(
        public dialog: MatDialog,
        private projectService: ProjectService,
    ) {
        this.initProjects();
        this.dataSource = new MatTableDataSource(this.projects);
    }

    ngOnInit() {
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    initProjects() {
        this.projectService.getAll().subscribe(
            projects => {
                this.projects = projects.map(project => {
                    return Project.toProject(project);
                });
                this.dataSource = new MatTableDataSource(this.projects);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        );
        // Assign the data to the data source for the table to render
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(ProjectEditComponent, {
            data: {
                edit_mode: false,
                project: new Project,
            },
        });
    }

    openDialogUpdate(project: Project): void {
        console.log(project)
        const dialogRef = this.dialog.open(ProjectEditComponent, {
            data: {
                edit_mode: true,
                project: project,
            },
        });
    }

    updateProjectCustomer(lala: String): void {
        console.log(lala);
        /*this.projectService.put(this.project).subscribe(
            project => {
                this.project = Project.toProject(project);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );*/
    }

    deleteProject() {
        // @todo open confirmation modal. afterClosed do the DELETE
    }

}
