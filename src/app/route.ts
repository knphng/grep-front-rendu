export class Route {
    public static ROOT = '';

    /**
     * LOGIN AND REGISTRATION RELATED ROUTE
     */
    public static LOGIN = 'login';
    public static REGISTRATION = 'registration';

    /**
     * PROJECT RELATED ROUTE
     */
    public static PROJECTS_LIST = 'projects';
    public static PROJECT_DETAILS = 'projects/<uuid>/details';
    public static PROJECT_EDIT = 'projects/<uuid>/edit';

    /**
     * TEAMMATE RELATED ROUTE
     */
    public static TEAMMATES_LIST = 'teammates';
    public static TEAMMATES_DETAILS = 'teammates/<uuid>/details';

    /**
     * CUSTOMER RELATED ROUTE
     */
    public static CUSTOMERS_LIST = 'customers';
    public static CUSTOMER_DETAILS = 'customers/<uuid>/details';

    /**
     * TASK RELATED ROUTE
     */
    public static TASKS_LIST = 'tasks';
    public static TASK_DETAILS = 'tasks/<uuid>/details';
    public static TASK_EDIT = 'tasks/<uuid>/edit';

    /**
     * RELEASE RELATED ROUTE
     */
    public static RELEASE_LIST = 'releases';
    public static RELEASE_DETAILS = 'releases/<uuid>/details';
    public static RELEASE_EDIT = 'releases/<uuid>/edit';

    /**
     * WORKSPACE RELATED ROUTE
     */
    public static WORKSPACES_LIST = 'workspaces';
    public static WORKSPACES_DETAILS = 'workspaces/<uuid>/details';
    public static WORKSPACES_EDIT = 'workspaces/<uuid>/edit';

    /**
     * HOME RELATED ROUTE
     */
    public static HOME = '';


}
