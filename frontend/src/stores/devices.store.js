import { defineStore} from "pinia";
import get from "../helpers/axiosWrapper";

export const useDevicesStore = defineStore({
    id: 'devices',
    state: () => ({
        devices: [],
        loading: false,
        error: false,
    }),
    actions: {
        async loadDevices() {
            this.loading = true;
            try {
                this.devices = (await get('/devices')).data;
            } catch (e) {
                this.error = e;
            }
            console.log(this.devices)
            setTimeout(() => {
                this.loading = false;
            }, 1000)
        }
    }
})