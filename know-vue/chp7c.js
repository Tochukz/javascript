var store = new Vuex.Store({
    state:{
       latestPerson:{
         name:'John',
         job:'Dev Opts',
         city:'Egypt'
       },
       people:[],
       cities:[]
    },
    getters:{
        teachersOnly(state, getters){
            const teacher = state.people.filter(person => {
               return person.job.toLowerCase() == 'teacher' || person.job.toLowerCase() == 'lecturer';
            });
            return teacher;
        },
        teachersCount(state, getters){
            return getters.teachersOnly.length;
        },
        latestPerson(state, getters){
            return state.latestPerson;
        },
        getPeople(state){
            return state.people;
        }
    },
    mutations:{
        addPerson(state, playload){
             state.people.push(playload);
        },
        removePerson(state, playload){
            var people = state.people;
            var removedPerson;
            for(var i=0; i<people.length; people++){
                if(people[i].name == playload.name){
                    removedPerson = state.people.splice(i, 1);
                    break;
                }
            }
            return removedPerson;
        },
        clearPeople(state, playload){
            state.people = [];
        },
        latestPerson(state, playload){
            state.latestPerson = playload;
        },
        setPeople(state, playload){
          state.people = playload;
        }
    },
    actions:{
        search(context, playload){
            axios.get(`/chp7c.php?search=${playload.search}`).then( response =>{
                if(response.status != 200){
                  console.log(response.status, response.statusText);
                  return false;
                }
                var people = response.data;
                people.forEach((person, index) => {
                    context.commit('latestPerson', person)
                    context.commit('addPerson', person); //call commit() on context to fire a mutation.
                    console.log(`${index+1}: ${person.name}`);
                });
                //var peps = context.getters.getPeople;
            });
            console.log(`Searching for ${playload.search}`);
            console.log('Found:');
        },
        getPeople(context, playload){
            var playload = {
                search:'people'
            }
            context.dispatch('search', playload);
        },
        getAnimals(context, playload){
            var playload = {
                search:'animals'
            }
            context.dispatch('search', playload);
        }

    }

});

var app1 = new Vue({
    el: "#app1",
    data: {
        store: store
    },
    methods:{
        showPeople(){
          this.store.dispatch('getPeople');
        },
        clearPeople(){
          this.store.commit('clearPeople');
        },
        teachersOnly(){
           let playload  = this.store.getters.teachersOnly;
           this.store.commit('setPeople', playload);
        }
    },
    computed:{
        people(){
            return this.store.getters.getPeople;
        },
        latestPerson(){
          return this.store.getters.latestPerson;
        }
    },
    template:'#temp1'
});
