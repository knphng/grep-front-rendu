import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Project} from '../_models/project';
import {HttpClient} from '@angular/common/http';
import {ProjectService} from '../_services/project.service';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
    @Input() project: Observable<Project>;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private projectService: ProjectService,
    ) {
    }

    ngOnInit() {
        this.project = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.projectService.get(params.get('uuid')))
        );

    }
}
