import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeammatesListComponent} from './teammates-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TeammateEditComponent} from '../teammate-edit/teammate-edit.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatPaginatorModule, MatSnackBarModule, MatTableModule} from '@angular/material';

describe('TeammatesListComponent', () => {
    let component: TeammatesListComponent;
    let fixture: ComponentFixture<TeammatesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MatCardModule,
                MatFormFieldModule,
                MatIconModule,
                MatPaginatorModule,
                MatTableModule,
                MatSnackBarModule,
            ],
            declarations: [
                TeammateEditComponent,
                TeammatesListComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeammatesListComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
