import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { ReleaseListComponent } from './release-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {
    MAT_BOTTOM_SHEET_DATA,
    MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
    MAT_DIALOG_DATA,
    MatBottomSheetModule, MatBottomSheetRef,
    MatCardModule, MatDialogRef,
    MatFormFieldModule,
    MatTableModule
} from "@angular/material";
import {MaterialModule} from "../material.module";

describe('ReleaseListComponent', () => {
  let component: ReleaseListComponent;
  let fixture: ComponentFixture<ReleaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpClientModule,
            MatBottomSheetModule,
            MatCardModule,
            MaterialModule,
            MatFormFieldModule,
            MatTableModule,
            RouterModule.forRoot([]),
        ],
      declarations: [ ReleaseListComponent ],
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: {} },
            { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {}},
            { provide: MAT_BOTTOM_SHEET_DATA, useValue: {}},
            { provide: MatBottomSheetRef, useValue: {}},
            {provide: MatDialogRef, useValue: {}},
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
