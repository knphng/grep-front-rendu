import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';


import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {TeammatesListComponent} from './teammates-list/teammates-list.component';
import {MaterialModule} from './material.module';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectEditComponent} from './project-edit/project-edit.component';
import {
    MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
} from '@angular/material';
import { TeammateEditComponent } from './teammate-edit/teammate-edit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './_guards/auth.guard';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import { WorkspacesListComponent } from './workspaces-list/workspaces-list.component';
import { WorkspacesEditComponent } from './workspaces-edit/workspaces-edit.component';
import { TeammateDetailsComponent } from './teammate-details/teammate-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HomeComponent } from './home/home.component';
import { WorkspaceDetailsComponent } from './workspace-details/workspace-details.component';
import { TimerComponent } from './timer/timer.component';
import { ReleaseListComponent } from './release-list/release-list.component';
import { ReleaseEditComponent } from './release-edit/release-edit.component';
import { ReleaseDetailsComponent } from './release-details/release-details.component';
import {APP_BASE_HREF} from '@angular/common';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';


export function tokenGetter() {
    return localStorage.getItem('access_token');
}

@NgModule({
    declarations: [
        AppComponent,
        ConfirmationModalComponent,
        CustomerDetailComponent,
        CustomerEditComponent,
        CustomersListComponent,
        LoginComponent,
        HomeComponent,
        MenuComponent,
        ProjectDetailsComponent,
        ProjectEditComponent,
        ProjectsListComponent,
        RegistrationComponent,
        ReleaseDetailsComponent,
        ReleaseEditComponent,
        ReleaseListComponent,
        SidebarComponent,
        TaskEditComponent,
        TasksListComponent,
        TeammateDetailsComponent,
        TeammateEditComponent,
        TeammatesListComponent,
        TimerComponent,
        WorkspaceDetailsComponent,
        WorkspacesEditComponent,
        WorkspacesListComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LayoutModule,
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['example.com'],
                blacklistedRoutes: ['example.com/examplebadroute/']
            }
        })
    ],
    providers: [
        HttpClientModule,
        AuthGuard,
        JwtHelperService,
        {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        ProjectEditComponent, CustomerEditComponent, TaskEditComponent, ReleaseEditComponent
    ],
})
export class AppModule {
}
