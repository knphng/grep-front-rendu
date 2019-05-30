import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarComponent} from './sidebar.component';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MenuComponent} from '../menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                HttpClientModule,
                MatIconModule,
                MatSidenavModule,
                MatToolbarModule,
                MatListModule,
                RouterTestingModule,
            ],
            declarations: [
                MenuComponent,
                SidebarComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
