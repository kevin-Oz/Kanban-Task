<template>
 <div>
   <div class="container-tl">
     <p class="text-tl">Kanban Tasks</p>
   </div>
<add-task :editable="false"></add-task>
   <v-container class="grey lighten-5">
     <v-row no-gutters>
       <v-col
               v-for="n in 3"
               :key="n"
               cols="12"
               sm="4"
       >
         <v-card
                 class="pa-2"
                 outlined
                 tile
         >
           <h1 v-if="n===1"  style="text-shadow: -2px 5px white; background-color: #bc1734; text-align: center">TODO</h1>
           <h1 v-if="n===2" style="text-shadow: -2px 5px white; background-color: #504ebc; text-align: center" >PROCESS</h1>
           <h1 v-if="n===3" style="text-shadow: -2px 5px white; background-color: #18bc0e; text-align: center" >COMPLETE</h1>
           <collapse-data v-if="n===1" :datos='tasks' :estado="'T'"></collapse-data>
           <collapse-data v-if="n===2" :datos='tasks' :estado="'P'"></collapse-data>
           <collapse-data v-if="n===3" :datos='tasks' :estado="'C'"></collapse-data>
         </v-card>
       </v-col>
     </v-row>
   </v-container>



 </div>
</template>

<script>
  import TableData from "./CollapseData";
  import { mapGetters} from "vuex";
  import CollapseData from "./CollapseData";
  import AddTask from "./AddTask";
  export default {
    name: 'DashTasks',
    components: {AddTask, CollapseData, TableData},
    computed: {
      ...mapGetters(['tasks'])
    }
  }
</script>

<style scoped >

  .container-tl {
    width: 100%;
  }
  .text-tl {
    color: green;
    margin: 0 auto;
    text-align: center;
    font: italic bold 100px Georgia, Serif;
    text-shadow: -4px 3px 0 #0a0e27, -5px 5px 0 #bc1943;
  }
</style>