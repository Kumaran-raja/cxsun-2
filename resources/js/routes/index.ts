import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:9
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:9
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:9
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:9
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:9
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:9
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:9
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:15
 * @route '/abouts'
 */
export const abouts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: abouts.url(options),
    method: 'get',
})

abouts.definition = {
    methods: ["get","head"],
    url: '/abouts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:15
 * @route '/abouts'
 */
abouts.url = (options?: RouteQueryOptions) => {
    return abouts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:15
 * @route '/abouts'
 */
abouts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: abouts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:15
 * @route '/abouts'
 */
abouts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: abouts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:15
 * @route '/abouts'
 */
    const aboutsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: abouts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:15
 * @route '/abouts'
 */
        aboutsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: abouts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:15
 * @route '/abouts'
 */
        aboutsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: abouts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    abouts.form = aboutsForm
/**
 * @see routes/web.php:21
 * @route '/services'
 */
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:21
 * @route '/services'
 */
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:21
 * @route '/services'
 */
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:21
 * @route '/services'
 */
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:21
 * @route '/services'
 */
    const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: services.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:21
 * @route '/services'
 */
        servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: services.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:21
 * @route '/services'
 */
        servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: services.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    services.form = servicesForm
/**
 * @see routes/web.php:27
 * @route '/web-contacts'
 */
export const webContacts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webContacts.url(options),
    method: 'get',
})

webContacts.definition = {
    methods: ["get","head"],
    url: '/web-contacts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:27
 * @route '/web-contacts'
 */
webContacts.url = (options?: RouteQueryOptions) => {
    return webContacts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:27
 * @route '/web-contacts'
 */
webContacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webContacts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:27
 * @route '/web-contacts'
 */
webContacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: webContacts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:27
 * @route '/web-contacts'
 */
    const webContactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: webContacts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:27
 * @route '/web-contacts'
 */
        webContactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webContacts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:27
 * @route '/web-contacts'
 */
        webContactsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webContacts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    webContacts.form = webContactsForm
/**
 * @see routes/web.php:33
 * @route '/accreditations'
 */
export const accreditations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accreditations.url(options),
    method: 'get',
})

accreditations.definition = {
    methods: ["get","head"],
    url: '/accreditations',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:33
 * @route '/accreditations'
 */
accreditations.url = (options?: RouteQueryOptions) => {
    return accreditations.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:33
 * @route '/accreditations'
 */
accreditations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accreditations.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:33
 * @route '/accreditations'
 */
accreditations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: accreditations.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:33
 * @route '/accreditations'
 */
    const accreditationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: accreditations.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:33
 * @route '/accreditations'
 */
        accreditationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: accreditations.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:33
 * @route '/accreditations'
 */
        accreditationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: accreditations.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    accreditations.form = accreditationsForm
/**
 * @see routes/web.php:39
 * @route '/blogs'
 */
export const blogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogs.url(options),
    method: 'get',
})

blogs.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:39
 * @route '/blogs'
 */
blogs.url = (options?: RouteQueryOptions) => {
    return blogs.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:39
 * @route '/blogs'
 */
blogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogs.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:39
 * @route '/blogs'
 */
blogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blogs.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:39
 * @route '/blogs'
 */
    const blogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blogs.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:39
 * @route '/blogs'
 */
        blogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogs.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:39
 * @route '/blogs'
 */
        blogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blogs.form = blogsForm
/**
 * @see routes/web.php:46
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:46
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:46
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:46
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:46
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:46
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:46
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
 * @see routes/web.php:59
 * @route '/pvr'
 */
export const pvrhome = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrhome.url(options),
    method: 'get',
})

pvrhome.definition = {
    methods: ["get","head"],
    url: '/pvr',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:59
 * @route '/pvr'
 */
pvrhome.url = (options?: RouteQueryOptions) => {
    return pvrhome.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:59
 * @route '/pvr'
 */
pvrhome.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrhome.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:59
 * @route '/pvr'
 */
pvrhome.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pvrhome.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:59
 * @route '/pvr'
 */
    const pvrhomeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pvrhome.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:59
 * @route '/pvr'
 */
        pvrhomeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrhome.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:59
 * @route '/pvr'
 */
        pvrhomeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrhome.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pvrhome.form = pvrhomeForm
/**
 * @see routes/web.php:65
 * @route '/pvrabouts'
 */
export const pvrabouts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrabouts.url(options),
    method: 'get',
})

pvrabouts.definition = {
    methods: ["get","head"],
    url: '/pvrabouts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:65
 * @route '/pvrabouts'
 */
pvrabouts.url = (options?: RouteQueryOptions) => {
    return pvrabouts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:65
 * @route '/pvrabouts'
 */
pvrabouts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrabouts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:65
 * @route '/pvrabouts'
 */
pvrabouts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pvrabouts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:65
 * @route '/pvrabouts'
 */
    const pvraboutsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pvrabouts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:65
 * @route '/pvrabouts'
 */
        pvraboutsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrabouts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:65
 * @route '/pvrabouts'
 */
        pvraboutsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrabouts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pvrabouts.form = pvraboutsForm
/**
 * @see routes/web.php:71
 * @route '/pvrproducts'
 */
export const pvrproducts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrproducts.url(options),
    method: 'get',
})

pvrproducts.definition = {
    methods: ["get","head"],
    url: '/pvrproducts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:71
 * @route '/pvrproducts'
 */
pvrproducts.url = (options?: RouteQueryOptions) => {
    return pvrproducts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:71
 * @route '/pvrproducts'
 */
pvrproducts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrproducts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:71
 * @route '/pvrproducts'
 */
pvrproducts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pvrproducts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:71
 * @route '/pvrproducts'
 */
    const pvrproductsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pvrproducts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:71
 * @route '/pvrproducts'
 */
        pvrproductsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrproducts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:71
 * @route '/pvrproducts'
 */
        pvrproductsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrproducts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pvrproducts.form = pvrproductsForm
/**
 * @see routes/web.php:77
 * @route '/pvrweb-contacts'
 */
export const pvrwebContacts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrwebContacts.url(options),
    method: 'get',
})

pvrwebContacts.definition = {
    methods: ["get","head"],
    url: '/pvrweb-contacts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:77
 * @route '/pvrweb-contacts'
 */
pvrwebContacts.url = (options?: RouteQueryOptions) => {
    return pvrwebContacts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:77
 * @route '/pvrweb-contacts'
 */
pvrwebContacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrwebContacts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:77
 * @route '/pvrweb-contacts'
 */
pvrwebContacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pvrwebContacts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:77
 * @route '/pvrweb-contacts'
 */
    const pvrwebContactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pvrwebContacts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:77
 * @route '/pvrweb-contacts'
 */
        pvrwebContactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrwebContacts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:77
 * @route '/pvrweb-contacts'
 */
        pvrwebContactsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrwebContacts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pvrwebContacts.form = pvrwebContactsForm
/**
 * @see routes/web.php:83
 * @route '/pvrmanufacture'
 */
export const pvrmanufacture = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrmanufacture.url(options),
    method: 'get',
})

pvrmanufacture.definition = {
    methods: ["get","head"],
    url: '/pvrmanufacture',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:83
 * @route '/pvrmanufacture'
 */
pvrmanufacture.url = (options?: RouteQueryOptions) => {
    return pvrmanufacture.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:83
 * @route '/pvrmanufacture'
 */
pvrmanufacture.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pvrmanufacture.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:83
 * @route '/pvrmanufacture'
 */
pvrmanufacture.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pvrmanufacture.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:83
 * @route '/pvrmanufacture'
 */
    const pvrmanufactureForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pvrmanufacture.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:83
 * @route '/pvrmanufacture'
 */
        pvrmanufactureForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrmanufacture.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:83
 * @route '/pvrmanufacture'
 */
        pvrmanufactureForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pvrmanufacture.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pvrmanufacture.form = pvrmanufactureForm