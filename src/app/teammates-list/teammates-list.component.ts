import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {TeammateService} from '../_services/teammate.service';
import {Teammate} from '../_models/teammate';

/**
 * @title Table with sorting
 */
@Component({
    selector: 'app-teammates-list',
    templateUrl: './teammates-list.component.html',
    styleUrls: ['./teammates-list.component.css']
})
export class TeammatesListComponent implements OnInit {
    isCollapsed: boolean;
    displayedColumns: string[] = ['index', 'name', 'editColumn', 'deleteColumn'];
    dataSource = new MatTableDataSource<Teammate>();

    teammates: Teammate[];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private teammateService: TeammateService
    ) {
        this.initTeammates();
        this.dataSource = new MatTableDataSource(this.teammates);
    }

    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.paginator = this.paginator;
    }


    // initializate function to getAll() from TeammateService
    initTeammates() {
        this.teammateService.getAll().subscribe(
            teammates => {
                this.teammates = teammates.map(teammate => Teammate.toTeammate(teammate));
                this.dataSource = new MatTableDataSource(this.teammates);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    onEditClicked(teammate) {
        this.isCollapsed = !this.isCollapsed;
    }
}
