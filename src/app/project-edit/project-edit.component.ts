import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProjectService} from '../_services/project.service';
import {Project} from '../_models/project';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Customer} from '../_models/customer';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

    @Input() edit_mode: boolean;

    @Input() project: Project;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ProjectEditComponent>,
        private projectService: ProjectService,
    ) {
        if (this.data) {
            this.initData();
        }
    }

    dismiss(): void {
        this.dialogRef.close();
    }

    initData() {
        this.edit_mode = this.data.edit_mode;
        this.project = this.data.project;
    }


    ngOnInit() {
        if (this.edit_mode) {
            this.getProject();
        }
    }

    save() {
        if (this.edit_mode) {
            this.updateProject();
        } else {
            this.postProject();
        }
        this.initData();
        this.dialogRef.close();
    }

    getProject() {
        this.projectService.get(this.project.uuid).subscribe(
            project => {
                this.project = Project.toProject(project);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }

    postProject() {
        console.log('CREATE');
        // @todo clean customers
        const customer = new Customer();
        const customers = [];
        customers.push(customer);
        this.project.customers = [];
        this.projectService.post(this.project).subscribe(
          project => {
              this.project = Project.toProject(project);
              // @todo show ok.
          },
          error1 => {
              // @todo show error.
          }
        );
    }

    updateProject() {
        console.log('UPDATE');
        console.log(this.project);
        this.projectService.put(this.project).subscribe(
            project => {
                this.project = Project.toProject(project);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }
}
