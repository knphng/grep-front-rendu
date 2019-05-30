import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeammateEditComponent} from './teammate-edit.component';
import {MatCardModule, MatFormFieldModule, MatTableModule} from '@angular/material';
import {TeammatesListComponent} from '../teammates-list/teammates-list.component';

describe('TeammateEditComponent', () => {
    let component: TeammateEditComponent;
    let fixture: ComponentFixture<TeammateEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatCardModule,
                MatFormFieldModule,
                MatTableModule,
            ],
            declarations: [
                TeammateEditComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeammateEditComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
