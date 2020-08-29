<template>
    <v-row justify="center">
        <v-expansion-panels popout>
            <v-expansion-panel
                    v-for="t in datos"
                    :key="t.id"
                    v-if="t.doc.state===estado"
            >
                <v-expansion-panel-header>
                    <v-row>
                        <v-col  class="col-12 col-md-8">{{t.doc.codeTask}} {{t.doc.name}}</v-col>
                        <v-col class="col-6 col-md-4">

                            <div v-if="t.doc.state!=='C'">
                                <!--- cambiar a true para mostrar el botn de editar
                             <add-task :editable="true" ></add-task>
                              -->
                                <div class="my-2">
                                    <v-btn x-small @click="promover(t)" color="green" fab dark> <div id="next_icon"> > </div> </v-btn>
                                </div>
                            </div>
                            <div v-if="t.doc.state==='C'">
                                <div class="my-2">
                                    <v-btn x-small color="red" @click="deleteTask(t)" fab dark><v-icon dark>mdi-cancel</v-icon></v-btn>
                                </div>
                            </div>
                        </v-col>

                    </v-row>


                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{t.doc.dateLimit}} {{t.doc.description}}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>

<script>
    import {mapActions} from "vuex";
    import AddTask from "./AddTask";
    export default {
        name: "CollapseData",
        components: {AddTask},
        props:['datos', 'estado'],
        methods:{
            ...mapActions(['fetchTasks','updateTask','removeTask']),
         async  promover(task){
                if(task.doc.state==='T'){
                    task.doc.state='P'
                }else if(task.doc.state==='P'){
                    task.doc.state='C'
                }
               await this.updateTask(task);
                this.fetchTasks();
            },
           async deleteTask(task){
                await this.removeTask(task);
               await this.fetchTasks();
            }
        },
        data: () => ({

        }),
        created() {
            this.fetchTasks();
        }
    }
</script>

<style scoped>
#next_icon{
    color: black;
    font-weight: 900;
    font-size: large;
}
</style>