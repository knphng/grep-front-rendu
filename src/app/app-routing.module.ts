import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {Route} from './route';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {TeammatesListComponent} from './teammates-list/teammates-list.component';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {ProjectEditComponent} from './project-edit/project-edit.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './_guards/auth.guard';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {WorkspacesListComponent} from './workspaces-list/workspaces-list.component';
import {TeammateDetailsComponent} from './teammate-details/teammate-details.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ReleaseListComponent} from "./release-list/release-list.component";
import {HomeComponent} from './home/home.component';
import {WorkspaceDetailsComponent} from './workspace-details/workspace-details.component';
import {ReleaseDetailsComponent} from "./release-details/release-details.component";

const routes: Routes  = [
    /**
     * DEFAULT ROUTES
     */
    // {path: '', redirectTo: '/' + Route.ROOT, pathMatch: 'full', canActivate: [AuthGuard]},

    /**
     * LOGIN/REGISTATION RELATED ROUTES
     */
    {path: Route.LOGIN, component: LoginComponent},
    {path: Route.REGISTRATION, component: RegistrationComponent},

    /**
     * PROJECTS RELATED ROUTES
     */
    {path: Route.PROJECTS_LIST, component: ProjectsListComponent, canActivate: [AuthGuard]},
    {path: Route.PROJECT_DETAILS.replace('<uuid>', ':uuid'), component: ProjectDetailsComponent, canActivate: [AuthGuard] },
    {path: Route.PROJECT_EDIT.replace('<uuid>', ':uuid'), component: ProjectEditComponent, canActivate: [AuthGuard]},

    /**
     * CUSTOMER RELATED ROUTES
     */
    {path: Route.CUSTOMERS_LIST, component: CustomersListComponent, canActivate: [AuthGuard]},
    {path: Route.CUSTOMER_DETAILS.replace('<id>', ':id'), component: CustomersListComponent, canActivate: [AuthGuard]},

    /**
     * TEAMMATES RELATED ROUTES
     */
    {path: Route.TEAMMATES_LIST, component: TeammatesListComponent, canActivate: [AuthGuard]},
    {path: Route.TEAMMATES_DETAILS.replace('<uuid>', ':uuid'), component: TeammateDetailsComponent, canActivate: [AuthGuard] },

    /**
     * TASKS RELATED ROUTES
     */
    {path: Route.TASKS_LIST, component: TasksListComponent, canActivate: [AuthGuard]},
    {path: Route.TASK_DETAILS.replace('<uuid>', ':uuid'), component: TasksListComponent, canActivate: [AuthGuard] },
    {path: Route.TASK_EDIT.replace('<uuid>', ':uuid'), component: TasksListComponent, canActivate: [AuthGuard]},

    /**
     * RELEASES RELATED ROUTES
     */
    {path: Route.RELEASE_LIST, component: ReleaseListComponent, canActivate: [AuthGuard]},
    {path: Route.RELEASE_DETAILS.replace('<uuid>', ':uuid'), component: ReleaseDetailsComponent, canActivate: [AuthGuard] },
    {path: Route.RELEASE_EDIT.replace('<uuid>', ':uuid'), component: ReleaseListComponent, canActivate: [AuthGuard]},


    /**
     * WORKSPACE RELATED ROUTES
     */
    {path: Route.WORKSPACES_LIST, component: WorkspacesListComponent, canActivate: [AuthGuard]},
    {path: Route.WORKSPACES_DETAILS.replace('<uuid>', ':uuid'), component: WorkspaceDetailsComponent, canActivate: [AuthGuard] },
    {path: Route.WORKSPACES_EDIT.replace('<uuid>', ':uuid'), component: WorkspacesListComponent, canActivate: [AuthGuard]},

    /**
     * HOME RELATED ROUTE
     */
    {path: Route.HOME, component: HomeComponent}

];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes),
    ]
})

export class AppRoutingModule {

}
