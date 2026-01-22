import {create} from 'zustand';

const useuiStore = create((set) => ({
    sidebarOpen: true,
    theme: 'light',

    toggleSidebar: () => set((state) => ({
        sidebarOpen: !state.sidebarOpen
    })),
    setTheme: (theme) => set({theme})
}))
export default useuiStore;
