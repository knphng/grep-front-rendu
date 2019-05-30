import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkspacesEditComponent} from './workspaces-edit.component';
import {MatSnackBarModule} from '@angular/material';

describe('WorkspacesEditComponent', () => {
    let component: WorkspacesEditComponent;
    let fixture: ComponentFixture<WorkspacesEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatSnackBarModule,
            ],
            declarations: [WorkspacesEditComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkspacesEditComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
