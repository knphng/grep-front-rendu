import {Component, Input, OnInit} from '@angular/core';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ReleaseService} from "../_services/release.service";
import {Observable, ObservedValueOf} from "rxjs";
import {Release} from "../_models/release";
import {Task} from "../_models/task";
import {MatTableDataSource} from "@angular/material";
import {TaskService} from "../_services/task.service";

@Component({
    selector: 'app-release-details',
    templateUrl: './release-details.component.html',
    styleUrls: ['./release-details.component.css']
})
export class ReleaseDetailsComponent implements OnInit {
    @Input() release: Observable<Release>;
    tasks: Task[];

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private releaseService: ReleaseService,
        private taskService: TaskService,
    ) {
    }

    ngOnInit() {
        this.release = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.releaseService.get(params.get('uuid')))
        );

        /* this.releaseService.getTasks("coucou").subscribe(
            tasks => {
                this.tasks = tasks.map(task => {
                    return Task.toTask(task);
                });
                console.log(tasks);
            }
        ); */
        this.taskService.getAll().subscribe(
            tasks => {
                this.tasks = tasks.map(task => {
                    return Task.toTaskRelease(task);
                });
            }
        );
    }



}
