<script setup>
import { useMenuStore } from '../stores/menu.store';
import Loader from './Loader.vue';
import { useDevicesStore } from '../stores/devices.store';

const menuStore = useMenuStore();
const devicesStore = useDevicesStore();

</script>

<template>
    <div v-if="menuStore.settingsMenu" class="settings-wrapper">
        <div class="card-wrapper">

            <div class="settings-header">
                <span>Devices</span>
                <div class="settings-close" @click="menuStore.toggleSettingsMenu()">
                    <span class="material-symbols-outlined" style="font-size: 40px;">close</span>
                </div>
            </div>
            <div class="settings-card">
                <div :class="{'settings-body-inactive': menuStore.newDeviceMenu}" class="settings-body">
                    <div class="button btn-primary" @click="menuStore.openNewDeviceMenu(); devicesStore.loadDevices();">New Device</div>
                    <div class="devices">
                        <div class="devices-header">
                            <div class="header-el header-label">Label</div>
                            <div class="header-el header-name">VARIABLE_NAME</div>
                            <div class="header-el id">ISE_ID</div>
                        </div>
                        <div class="device-list">
                            <div class="device">
                                <div class="device-label device-element">Draußeinsaksj,ajhwtalwawlstkawtasfaafasflkn</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                            <div class="device">
                                <div class="device-label device-element">Draußen</div>
                                <div class="device-name device-element">DRAUSSEN</div>
                                <div class="device-id device-element">25012</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="{'new-device-active':menuStore.newDeviceMenu}" class="new-device">
                    <div class="new-device-body">
                        <!-- <div class="new-device-close" @click="menuStore.closeNewDeviceMenu();">
                            <span class="material-symbols-outlined">close</span>
                        </div> -->
                            <div class="loading" v-if="devicesStore.loading">
                                <Loader width="20" height="20" borderRadius="4px" /> 
                                <div class="">
                                    Loading available devices...
                                </div>
                            </div>
                            <div class="error-wrapper" v-if="devicesStore.error">
                                <div class="error" >
                                    <span class="material-symbols-outlined" style="font-size: 30px;">error</span>
                                    <div>
                                        {{ devicesStore.error }}
                                    </div>
                                </div>
                                <div>Couldn't load the devices-List from the API.</div>

                            </div>
                            <div class="device-selection" v-if="!devicesStore.loading">
                                <div v-if="!devicesStore.error">
                                    <span class="select-label">Select a device:</span>
                                    <select v-model="selectedDevice" class="device-select">
                                        <option disabled selected></option>
                                        <option v-for="device in devicesStore.devices" :value="device">{{ device.device_name }}</option>
                                    </select>
                                    <div class="device-select-attrs" v-if="this.selectedDevice">
                                        <span class="device-select-attr">
                                            <span class="select-label">Label</span>
                                            <input type="text" class="device-input" placeholder="New Device" :value="selectedDevice.label">
                                        </span>
                                        <span class="device-select-attr">
                                            <span class="select-label">Variable Name</span>
                                            <span>
                                               {{ this.selectedDevice.device_name }} 
                                            </span>
                                        </span>
                                        <span class="device-select-attr">
                                            <span class="select-label">Variable ISE_ID</span>
                                            <span>
                                               {{ this.selectedDevice.device_ise_id}} 
                                            </span>
                                        </span>
                                    </div>
                                    <span class="device-buttons">
                                        <div class="button btn-primary button2" @click="this.addDevice" v-if="this.selectedDevice">
                                            Add Device
                                        </div>
                                        <div class="button button2 btn-secondary" @click="menuStore.closeNewDeviceMenu()">
                                            Cancel
                                        </div>
                                    </span>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    </template>

<script>
export default {
    name: 'settings',
    data() {
        return {
            loading: false,
            selectedDevice: undefined,
        }
    },
    methods: {
        loadDevices() {
            this.selectedDevice = undefined;
            console.log('oading')
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        addDevice() {
            if (this.selectedDevice) {
                console.log(`adding new device ${this.selectedDevice}`)
            }
            else {
                console.log("No device selected");
            }
        }
    }
}


</script>

<style>
    .device-buttons {
        margin-top: 10px;
        display: flex;
        gap: 10px;;
    }
    .btn-secondary {
        background-color: grey;
    }
    .device-select-attrs {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .device-select-attr {
        font-size: 18px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .select-label {
        width: 100%;
        font-weight: bold;
        font-size: 13px;
    }
    .attr-label {
        font-weight: bold;
    }
    .device-selection {
    }
    .device-select {
        all: unset;
        width: 100%;
        border: 1px solid rgb(220, 220, 220);
        border-radius: 5px;
        padding: 5px;
    }
    .device-input {
        all: unset;
        border-bottom: 1px solid rgb(220, 220, 220);
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .loading {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 10px;
    }
    .error-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        gap: 10px;
        font-weight: bold;
    }
    .error {
        color: rgb(209, 29, 29);
        flex-direction: row;;
        display: flex;
        align-items: center;
        gap: 10px;

    }
    .button:active {
        transform: translateY(1px);
    }
    .new-device-close {
        width: 25px;
        height: 25px;
        position: absolute;
        cursor: pointer;
        top: 0%;
        left: 100%;
        transform: translate(-150%,50%);
    }
    .new-device-body {
        position: relative;
        padding: 20px;
        height: 100%;
    }
    .settings-body {
        padding: 20px;
        transition: .4s ease-in;
        filter: none;
        overflow: scroll;
        height: 100%;
    }
    .settings-body-inactive {
        filter: blur(3px);
    }
    .new-device {
        display: block;
        border-left: 1px solid rgb(235, 235, 235);
        background-color: white;
        position: absolute;
        width: 400px;
        height: 100%;
        top:0%;
        left: 100%;
        transform: translateX(0%);
        transition: .4s ease-out;
        margin-left: auto;
    }
    .new-device-active {
        transform: translateX(-100%);
    }
    .btn-primary {
        background-color: rgb(56, 129, 255);
    }
    .button {
        user-select: none;
        transform: none;
        transition: .1s;
        display: inline-block;
        cursor: pointer;
        padding: 10px;
        border-radius: 7px;
        color: white;
        margin-bottom: 10px;
        box-shadow: 0px 2px 10px 0px rgba(56, 129, 255, 0.2);
    }
    .device-list {
        height: 100%;
        overflow: scroll;
    }
    .devices {
        height: 80%;
        border: 1px solid rgb(215, 215, 215);
        --table-label-width: 40%;
        --table-name-width: 40%;

        border-radius: 10px;
        overflow: hidden;
    }
    ul, li {
        all: unset;
        list-style-type: none;
        list-style: none;
        padding: 0;
    }
    .devices-header {
        display: flex;
        flex-direction: row;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: rgb(252, 252, 255);
        border-bottom: 1px solid rgb(181, 181, 181);
    }
    .header-label {
        width: var(--table-label-width)
    }
    .header-name {
        width: var(--table-name-width)
    }
    .device-element {
        padding: 10px;
        overflow: hidden;
    }
    .device-label {
        width: var(--table-label-width);
    }
    .device-name {
        width: var(--table-name-width);
    }
    .header-el {
        font-weight: bold;
        font-size: 17px;
        padding-inline: 10px;
    }
    .device {
        border-top: 1px solid rgb(224, 224, 224);;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        background-color: white;
    }
    .label {
        background-color: rgb(214, 214, 214);   
    }
    .settings-wrapper {
        position: fixed;
        top: 0%;
        height: 100vh;
        width: 100vw;
        background-color: rgba(255, 255, 255, 0.308);
        backdrop-filter: blur(30px);
    }
    .settings-card {
        overflow: hidden;
        position: relative;
        /* padding: 20px; */
        height: 400px;
        width: 100%;
        background-color: rgb(255,255,255);
        border-radius: 20px;
        box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.053);
    }
    .card-wrapper {
        position: relative;
        margin: auto;
        margin-top: 200px;
        width: 800px;
    }
    .settings-header {
        display: flex;
        color: white;
        font-size: 35px;
        margin-bottom: 5px;
        /* font-weight: bold; */
        align-items: center;
    }
    .settings-close {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        top: 0%;
        left: 100%;
        transform: translate(-100%,15px);
        margin-left: auto;
    }
</style>