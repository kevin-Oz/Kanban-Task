<template>
    <div>

        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            v-if="editable===false"
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                    >
                        New Task
                    </v-btn>
                    <div v-if="editable===true" class="my-2">
                        <v-btn x-small color="primary"
                               fab dark  v-bind="attrs"
                               v-on="on"
                        >
                            <v-icon dark>mdi-pencil</v-icon>
                        </v-btn>
                    </div>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Task</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field  v-model="task.codeTask" label="Code Task*" required hint="Identification to task"></v-text-field>
                                </v-col>
                                <v-col cols="6" sm="2" md="4">

                                    <label for="meeting-time">Date Limit</label>
                                    <input v-model="task.dateLimit" type="date" id="meeting-time" name="meeting-time">
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="task.name" label="Name*" required></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-select
                                            v-model="task.state"
                                            :items="['T', 'P', 'C']"
                                            label="Status*"
                                            required
                                    ></v-select>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field label="Description" hint="brief definition to the task" v-model="task.description" ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="task.observation" hint="Technical specifications" label="Observation"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>* required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeForm">Close</v-btn>
                        <v-btn v-if="editable===false" color="blue darken-1" text @click="createTask">Save <v-icon dark right>mdi-checkbox-marked-circle</v-icon></v-btn>
                        <v-btn v-if="editable===true" color="blue darken-1" text @click="putTask(task)">Save$</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>


    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "AddTask",
        props: ['editable'],
        data: ()=> ({
            dialog: false,
            task:{
                codeTask: "",
                name: "",
                state: "T",
                description: "",
                dateLimit: "",
                observation: ""
            }
        }),
        methods: {
            ...mapActions(['addTask','fetchTasks','updateTask']),
            async createTask(){
             await this.addTask(this.task);

             this.clearFrom();
            },
            closeForm(){
                this.clearFrom();
            },
            clearFrom(){
                this.dialog = false;
                this.task = {}
                this.fetchTasks();
            },
            async putTask(task){
                await this.updateTask(task);
                this.clearFrom();
            }
        }
    }
</script>

<style scoped>

</style>