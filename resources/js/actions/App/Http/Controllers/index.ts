import ServiceController from './ServiceController'
import BlogController from './BlogController'
import Settings from './Settings'
const Controllers = {
    ServiceController: Object.assign(ServiceController, ServiceController),
BlogController: Object.assign(BlogController, BlogController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers