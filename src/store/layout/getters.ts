import { GetterTree } from 'vuex'
import { RootState, LayoutState } from '../types'
import { config } from '../../utils/config'
import { $storage } from '../../utils/storage'

export const getters: GetterTree<LayoutState, RootState> = {
    collapsed: (state): boolean | null => {
        let collapsed = state.collapsed
        if (collapsed === null) collapsed = $storage.get(config.caches.storages.collapsed)
        return collapsed
    },

    opens: (state): any[] => {
		return state.opens;
    },
    
    active: (state): string | null => {
		return state.active;
	},
	
	drawer: (state): boolean => {
		return state.drawer;
    },
    
    routes: (state): {} => {
		let routes = state.routes;
		if (Object.keys(routes).length <= 0) {
			routes = JSON.parse($storage.get(config.caches.storages.routes) ?? '{}');
		}
		return routes;
	}
}