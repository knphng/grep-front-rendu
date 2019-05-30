export const environment = {
    production: false,

    // API url
    API: {
        PROTOCOL: 'http://',
        URL: 'dev.grepapi.local:8000',
        ROOT: '/api/v1',
    },

    MESSAGE: {
        /** Duration of the msg visualization */
        DURATION: 5000,
    },

    // URL list
    URL: {
        LOGIN: {
            POST: '/api-token-auth/'
        },
        REGISTRATION: {
            POST: '/rest-auth/registration/'
        },
        ADDRESS: {
            GET: '/addresses/<uuid>/',
            GET_ALL: '/addresses/',
            POST: '/addresses/',
            DELETE: '/addresses/<uuid>/',
            PUT: '/addresses/<uuid>/',
        },
        CUSTOMER: {
            GET: '/customers/<uuid>/',
            GET_ALL: '/customers/',
            POST: '/customers/',
            DELETE: '/customers/<uuid>/',
            PUT: '/customers/<uuid>/',
        },
        RELEASE: {
            GET: '/releases/<uuid>/',
            GET_ALL: '/releases/',
            GET_TASKS: '/releases/<uuid>/tasks',
            POST: '/releases/',
            DELETE: '/releases/<uuid>/',
            PUT: '/releases/<uuid>/',
        },
        PROJECT: {
            GET: '/projects/<uuid>/',
            GET_ALL: '/projects/',
            GET_ALL_LIGHT: '/light-projects/',
            POST: '/projects/',
            DELETE: '/projects/<uuid>/',
            PUT: '/projects/<uuid>/',
        },
        TEAMMATE: {
            GET: '/teammates/<uuid>/',
            GET_ALL: '/teammates/',
            POST: '/teammates/',
            DELETE: '/teammates/<uuid>/',
            PUT: '/teammates/<uuid>/',
        },
        TASK: {
            GET: '/tasks/<uuid>/',
            GET_ALL: '/tasks/',
            POST: '/tasks/',
            DELETE: '/tasks/<uuid>/',
            PUT: '/tasks/<uuid>/',
        },
        WORKSPACE: {
            GET: '/workspaces/<uuid>/',
            GET_ALL: '/workspaces/',
            GET_LIGHT: '/light-workspaces/<uuid>/',
            GET_ALL_LIGHT: '/light-workspaces/',
            GET_ACTIVITIES: '/workspaces/<uuid>/activities/',
            GET_CUSTOMERS: '/workspaces/<uuid>/customers/',
            GET_PROJECTS: '/workspaces/<uuid>/projects/',
            GET_TEAMMATES: '/workspaces/<uuid>/teammates/',
            POST: '/workspaces/',
            DELETE: '/workspaces/<uuid>/',
            PUT: '/workspaces/<uuid>/',
        },
    },
};
