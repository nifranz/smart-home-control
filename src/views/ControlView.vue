<script setup>
import { useElementStore } from '../stores/element.store';

const elementStore = useElementStore();
const elements = elementStore.getElementsArray();
console.log(elements)
const leftElements = elements.filter((element, index) => {
    return index < elements.length / 2;
})
const rightElements = elements.filter((element, index) => {
    return index >= elements.length / 2;
})
</script>

<template>
    <main>
        <div class="panel-container">
            <div class="control-panel">            
                <div v-for="element in leftElements" class="element-group">
                    <div :class="{'led-red': element.state == 0, 'led-green': element.state == 1, 'led-yellow': element.state == 2}" class="led" @click="elementStore.cycleLed(element.id)"></div>
                    <div class="element-name">{{element.name}}</div>
                </div>
            </div>
            <div class="control-panel">
                <div v-for="element in rightElements" class="element-group eg-r">
                    <div :class="{'led-red': element.state == 0, 'led-green': element.state == 1, 'led-yellow': element.state == 2}" class="led" @click="elementStore.cycleLed(element.id)"></div>
                    <div class="element-name">{{element.name}}</div>
                </div>
            </div>

        </div>
    </main>
</template>

<style>
main {

}
.panel-container {
    margin-inline: auto;
    margin-top: 50px;
    display: flex;
    flex-wrap:wrap;
}
.control-panel {
    width:100%;
    padding:1rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.element-group {
    gap: 20px;
    display: flex;
    align-items: center;
}
.element-name {
    font-size: 1.5rem;
    color: aliceblue;
    text-shadow: 0px 0px 10px white;
}
.ml-auto {
    margin-left: auto;
}
.mx-auto {
    margin-inline: auto;
}
.led {
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 10px;  
    filter: blur(1px);
}
.led-red {
    background-color: rgb(255, 241, 241);
    
    box-shadow: 0px 0px 15px 3px rgb(255, 68, 68);  
}
.led-green {
    background-color: rgb(243, 255, 242);
    box-shadow: 0px 0px 20px 0px rgba(107, 255, 87, 0.9);  
}
.led-yellow {
    background-color: rgb(255, 232, 217);
    box-shadow: 0px 0px 20px 0px rgb(255, 177, 68);  
}

.eg-r {
    flex-direction: row;
}


@media (min-width:850px) {
    .eg-r {
        flex-direction: row-reverse;
    }
    .control-panel {
        width:50%;
    }
    .panel-container {
        width: 800px;
    }
}
@media (min-width: 1050px) {
    .panel-container {
        width: 1000px;
    }
}

</style>