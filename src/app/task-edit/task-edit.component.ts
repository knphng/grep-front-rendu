import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {Task} from '../_models/task';
import {TaskService} from '../_services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

    @Input() edit_mode: boolean;
    @Input() task: Task;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private bottomSheetRef: MatBottomSheetRef<TaskEditComponent>,
        private taskService: TaskService,
    ) {
        if (this.data) {
            this.initData();
        }
    }

    initData() {
        this.edit_mode = this.data.edit_mode;
        this.task = this.data.task;

    }

    dismiss(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }

    ngOnInit() {
        if (this.edit_mode) {
            this.getTask();
        }
    }

    save() {
        if (this.edit_mode) {
            this.updateTask();
        } else {
            this.postTask();
        }
    }

    getTask() {
        this.taskService.get(this.task.uuid).subscribe(
            task => {
                this.task = Task.toTask(task);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }

    postTask() {
        this.taskService.post(this.task).subscribe(
            task => {
                this.task = Task.toTask(task);
                this.bottomSheetRef.dismiss(true);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }

    updateTask() {
        this.taskService.put(this.task).subscribe(
            task => {
                this.task = Task.toTask(task);
                this.bottomSheetRef.dismiss(true);
                // @todo show ok.
            },
            error1 => {
                // @todo show error.
            }
        );
    }
}
