import { defineStore } from "pinia";
import getVariableValueFromId from "../helpers/getVariable";

const elements = {
    1: {
        name: 'Licht oben',
        state: await getVariableValueFromId(1)
    },
    2: {
        name: 'Licht unten',
        state: 0
    }, 
    3: {
        name: 'Licht Keller',
        state: 1
    },
    4: {
        name: 'Drucker Büro',
        state: 1
    },  
    5: {
        name: 'Garagentor',
        state: 1,
    },
    6: {
        name: 'Gartenpumpe',
        state: 0
    },
    7: {
        name: 'Eingangstür',
        state: 1
    },
    8: {
        name: 'Hintereingang',
        state: 1
    },
    9: {
        name: 'Garagentor 2',
        state: 1
    },
    10: {
        name: 'Fenster oben',
        state: 2
    },
    11: {
        name: 'Fenster unten',
        state: 2
    },
    12: {
        name: 'Bewegung oben',
        state: 1
    },
    13: {
        name: 'Bewegung unten',
        state: 0
    },
    14: {
        name: 'Bewegung Garage',
        state: 1
    },
    15: {
        name: 'Alarm intern scharf',
        state: 1
    },
    16: {
        name: 'Alarm extern scharf',
        state: 1
    },

}

export const useElementStore = defineStore({
    id: 'store',
    state: () => ({
        elements: elements
    }),
    actions: {
        getElementsArray() {
            let elementsArray = [];
            for (let key of Object.keys(this.elements)) {
                let led = this.elements[key];
                led.id = key;
                elementsArray.push(this.elements[key])
            }
            return elementsArray;
        },
        cycleLed(id) {
            let led = this.elements[id]
            led.state = (led.state + 1) % 3; // cycle through led states 0 - 2
        }
    }
})