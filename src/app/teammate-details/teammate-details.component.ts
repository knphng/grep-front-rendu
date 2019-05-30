import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Teammate} from '../_models/teammate';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TeammateService} from '../_services/teammate.service';
import {switchMap} from 'rxjs/internal/operators/switchMap';

@Component({
    selector: 'app-teammate-details',
    templateUrl: './teammate-details.component.html',
    styleUrls: ['./teammate-details.component.css']
})
export class TeammateDetailsComponent implements OnInit {
    @Input() teammate: Observable<Teammate>;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private teammateService: TeammateService,

    ) {}

    ngOnInit() {
        this.teammate = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.teammateService.get(params.get('uuid')))
        );
    }

}


