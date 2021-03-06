import { App } from 'vue'
import MiLayout from './index.vue'
import MiLayoutSider from './sider.vue'
import MiLayoutSiderLogo from '../sider/logo.vue'
import MiLayoutSiderMenu from '../sider/menu.vue'
import MiLayoutSiderMenuItem from '../sider/item.vue'
import MiLayoutSiderDrawer from '../sider/drawer.vue'
import MiLayoutHeader from './header.vue'
import MiLayoutHeaderDropdown from '../header/dropdown.vue'
import MiLayoutContent from './content.vue'
import MiLayoutFooter from './footer.vue'

const components = {
    MiLayout, MiLayoutSider, MiLayoutSiderLogo, MiLayoutSiderMenu,
    MiLayoutSiderDrawer, MiLayoutSiderMenuItem, MiLayoutHeader,
    MiLayoutHeaderDropdown, MiLayoutContent, MiLayoutFooter
} as any

const Layout = {
    install: (app: App) => {
        Object.keys(components).forEach(name => {
            app.component(name, components[name])
        })
    }
}
export default Layout