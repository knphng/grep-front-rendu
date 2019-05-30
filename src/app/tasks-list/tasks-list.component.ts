import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource, MatBottomSheet} from '@angular/material';
import {TaskService} from '../_services/task.service';
import {Task} from '../_models/task';
import {TaskEditComponent} from '../task-edit/task-edit.component';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
    // displayedColumns: string[] = ['position', 'name', 'prior', 'description'];
    // dataSource = TASK;
    // tasksList = TASK;
    // selectedTask: Task;
    // isCollapsed: boolean;
    displayedColumns: string[] = ['index', 'name', 'editColumn', 'deleteColumn'];
    dataSource = new MatTableDataSource<Task>();

    tasks: Task[];

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private bottomSheet: MatBottomSheet,
        private http: HttpClient,
        private taskService: TaskService
    ) {
        this.initTasks();
        this.dataSource = new MatTableDataSource(this.tasks);
        // this.tasksList = TASK;
    }

    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.paginator = this.paginator;
    }

    // initializate function to getAll() from TaskService
    initTasks() {
        this.taskService.getAll().subscribe(
            tasks => {
                this.tasks = tasks.map(task => {
                    return Task.toTask(task);
                });
                this.dataSource = new MatTableDataSource(this.tasks);
                // this.tasksList = TASK;
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    openBottomSheetCreate(): void {
        const bottomSheetRef = this.bottomSheet.open(TaskEditComponent, {
            data: {
                edit_mode: false,
                task: new Task,
            },
        });
        bottomSheetRef.afterDismissed().subscribe(res => {
            this.initTasks();
        });
    }

    onEditClicked(task: Task): void {
        const bottomSheetRef = this.bottomSheet.open(TaskEditComponent, {
            data: {
                edit_mode: true,
                task: task,
            },
        });
        bottomSheetRef.afterDismissed().subscribe(res => {
            this.initTasks();
        });
    }

    onDeleteClicked(task) {
        this.taskService.delete(task).subscribe();
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.dataSource = new MatTableDataSource(this.tasks);
    }
}
