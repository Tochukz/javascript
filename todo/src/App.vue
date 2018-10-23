<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2">
      {{name}}'s To Do List
    </h4>
    <div class="container-fluid p-4">
        <div class="row" v-if="filteredTasks.length == 0">
           <div class="col text-center">No task to show</div>
        </div>
        <template v-else>
          <div class="row">
              <div class="col font-weight-bold">Task</div>
              <div class="col-2 font-weight-bold">Done</div>
          </div>
          <div class="row" v-for="t in filteredTasks" v-bind:key="t.action">
            <div class="col">{{t.action}}</div>
            <div class="col-2">
              <input type="checkbox" v-model="t.done" class="form-check-input" /> {{t.done}}
            </div>          
          </div>  
        </template>
        <div class="col bg-secondary text-white">
          <h5 class="text-center">
            <label>
                  Remove Done <input type="checkbox" v-model="removeDone" />
            </label>
          </h5>
        </div>
        <div class="col text-center">
            <button class="btn btn-sm btn-warning" v-on:click="deleteDone">Delete Done</button>
        </div>
        <div class="col">
            <label>Add Task <input type="text" v-on:change="addTask" v-model="newTask" /></label>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      name:'Tochukwu',
      tasks:[],    
      removeDone:false,
      newTask:'',
    }
  },
  watch:{
    // tasks(){
    //   var tasks = this.tasks
    //   tasks.sort((ts1, ts2) => {
    //         return ts1.action.localeCompare(ts2.action);
    //   });
    //   this.tasks = tasks;
    // }
  },
  computed:{
    filteredTasks(){
      return this.removeDone? this.tasks.filter(ts => !ts.done) : this.tasks;
    }
  },
  methods:{
    addTask(){
      this.tasks.push({action:this.newTask, done:false });
      this.storeData();
      this.newTask = '';
      
    },
    storeData(){
        localStorage.setItem('todos', JSON.stringify(this.tasks));
    },
    deleteDone(){
      this.tasks = this.tasks.filter(ts => !ts.done);
      this.storeData();
    }
  },
  created(){
    var data = localStorage.getItem('todos');
    if(data != null){
        this.tasks = JSON.parse(data);
    }    
  }
  
}
</script>

<style>
#app {

}
</style>
