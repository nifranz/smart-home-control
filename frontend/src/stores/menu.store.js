import { defineStore } from "pinia";

export const useMenuStore = defineStore({
    id: 'menuStore',
    state: () => ({
        newDeviceMenu: false,
        settingsMenu: true,
    }),
    actions: {
        toggleNewDeviceMenu() {
            this.newDeviceMenu = !this.newDeviceMenu;
        },
        toggleSettingsMenu() {
            this.settingsMenu = !this.settingsMenu;
        },
        openNewDeviceMenu() {
            this.newDeviceMenu = true;
        },
        closeNewDeviceMenu() {
            this.newDeviceMenu = false;
        }
    }
})