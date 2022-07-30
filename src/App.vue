<template>
  <ICLRHeader/>
  <div class="container">
    <div class="fixed"></div>
    <div class="Group">
      <APIButton name="Button 1" command="Command 1"/>
      <APIButton name="Button 2" command="Command 2"/>
      <APIButton name="Button 3" command="Command 3"/>
      <br>
      <APIButton name="Button 4" command="Command 4"/>
      <APIButton name="Button 5" command="Command 5"/>
      <APIButton name="Button 6" command="Command 6"/>
    </div>
    <div class="flex-item" style="border:solid">
      <APIConsole/>
      <APITextBox/>
    </div>
  </div>
</template>

<script>
import ICLRHeader from "@/components/ICLRHeader";
import APIButton from "@/components/APIButton";
import APIConsole from "@/components/APIConsole";
import APITextBox from "@/components/APITextBox";

import {store} from '@/store'

export default {
  name: 'App',
  components: {
    ICLRHeader,
    APIButton,
    APIConsole,
    APITextBox,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Group {
  flex-grow: 1;
  text-align: center;
  padding: 5px;
  border-style: solid;
  border-width: thin;
  border-color: #FFFFFF;
}

.container {
  display: flex;
}

.fixed {
  width: 10%;
}

.flex-item {
  flex-grow: 1;
}
</style>