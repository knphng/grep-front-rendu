import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource, MatBottomSheet} from '@angular/material';
import {ReleaseService} from '../_services/release.service';
import {Release} from '../_models/release';
import {ReleaseEditComponent} from '../release-edit/release-edit.component';
import {HttpClient} from '@angular/common/http';
import {Project} from "../_models/project";
import {ProjectService} from "../_services/project.service";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Task} from "../_models/task";
import {TaskService} from "../_services/task.service";
import {Route} from "../route";


@Component({
    selector: 'app-release-list',
    templateUrl: './release-list.component.html',
    styleUrls: ['./release-list.component.css']
})
export class ReleaseListComponent implements OnInit {

    displayedColumns: string[] = ['index', 'name', 'projectName', 'actions'];
    dataSource = new MatTableDataSource<Release>();

    releases: Release[];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @Input() project: Observable<Project>;

    constructor(
        private route: ActivatedRoute,
        private bottomSheet: MatBottomSheet,
        private http: HttpClient,
        private releaseService: ReleaseService,
        private router: Router,
    ) {
        this.initRelease();
        this.dataSource = new MatTableDataSource(this.releases);
    }

    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.paginator = this.paginator;
    }

    // initializate function to getAll() from ReleaseService
    initRelease() {
        this.releaseService.getAll().subscribe(
            releases => {
                this.releases = releases.map(release => {
                    return Release.toRelease(release);
                });
                this.dataSource = new MatTableDataSource(this.releases);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    openBottomSheetCreate(): void {
        const bottomSheetRef = this.bottomSheet.open(ReleaseEditComponent, {
            data: {
                edit_mode: false,
                release: new Release,
            },
        });
        bottomSheetRef.afterDismissed().subscribe(res => {
            this.initRelease();
        });
    }

    navigateToReleaseDetails(uuid) {
        this.router.navigateByUrl('/' + Route.RELEASE_DETAILS.replace('<uuid>', uuid));
    }

    onEditClicked(release: Release): void {
        const bottomSheetRef = this.bottomSheet.open(ReleaseEditComponent, {
            data: {
                edit_mode: true,
                release: release,
            },
        });
        bottomSheetRef.afterDismissed().subscribe(res => {
            this.initRelease();
        });
    }

    onDeleteClicked(release) {
        this.releaseService.delete(release).subscribe();
        this.releases.splice(this.releases.indexOf(release), 1);
        this.dataSource = new MatTableDataSource(this.releases);
    }
}
