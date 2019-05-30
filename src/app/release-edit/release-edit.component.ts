import {Component, Inject, Input, OnInit} from '@angular/core';
import {Task} from '../_models/task';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {TaskService} from '../_services/task.service';
import {Release} from '../_models/release';
import {ReleaseService} from '../_services/release.service';
import {Project} from '../_models/project';
import {ProjectService} from '../_services/project.service';

@Component({
    selector: 'app-release-edit',
    templateUrl: './release-edit.component.html',
    styleUrls: ['./release-edit.component.css']
})
export class ReleaseEditComponent implements OnInit {

    @Input() edit_mode: boolean;
    @Input() release: Release;

    projects: Project[];

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private bottomSheetRef: MatBottomSheetRef<ReleaseEditComponent>,
        private releaseService: ReleaseService,
        private projectService: ProjectService,
    ) {
        if (this.data) {
            this.initData();
        }
    }

    initData() {
        this.edit_mode = this.data.edit_mode;
        this.release = this.data.release;
    }

    ngOnInit() {
        if (this.edit_mode) {
            this.getRelease();
        }
        this.getPorjects();
    }

    getPorjects() {
        this.projectService.getAllLight().subscribe(
            projects => {
                this.projects = projects.map(project => {
                    return Project.toProject(project);
                });
            }
        );
    }


    dismiss(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }


    save() {
        if (this.edit_mode) {
            this.updateRelease();
        } else {
            this.postRelease();
        }
    }

    getRelease() {
        this.releaseService.get(this.release.uuid).subscribe(
            release => {
                this.release = Release.toRelease(release);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }

    postRelease() {
        this.releaseService.post(this.release).subscribe(
            release => {
                this.release = Release.toRelease(release);
                this.bottomSheetRef.dismiss(true);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }

    updateRelease() {
        this.releaseService.put(this.release).subscribe(
            release => {
                this.release = Release.toRelease(release);
                this.bottomSheetRef.dismiss(true);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }

}
