<template>
  <div>
    <main class="container">
      <div class="row d-flex justify-content-center py-5">
          <div class="col-12 col-md-5">
              <div class="">
                
                <Title title="Vue Todo App"></Title>

                <ListCreate @create="addText"></ListCreate> 

                  <div class="d-flex justify-content-between align-items-center mb-2">
                      <p class="text-black-50 mb-0">To Do List{{lists.length>0 ? "s" : ""}}</p>

                      <p v-if="lists.length>0 && doneTotal==lists.length" class="badge badge-success badge-pill mb-0">
                          All Done <i class="fas fa-check"></i>
                      </p>

                      <p v-else class="badge badge-primary badge-pill mb-0">
                          Done 
                          <span>{{doneTotal}}</span>
                      </p>
                  </div>

                  <ul class="list-group">
                      <li v-if="lists.length === 0" class="text-center list-group-item">There is no job!!!</li>
                     
                    <List v-for="list in lists" :key="list.id" :list="list" @del="del"></List>
                  
                  </ul>

              </div>
          </div>
      </div>
  </main>
  </div>

</template>

<script>

import Title from "./components/Title.vue"
import List from "./components/List.vue"
import ListCreate from "./components/ListCreate.vue"

export default {
  name: 'App',
  components : {
    Title,
    List,
    ListCreate
  },
  data() {
    return {
             currentId: 0,
            lists: []
    }
  },
  computed: {
    doneTotal(){
        return this.lists.filter(el=> el.isDone === true).length
    }
  },
  methods : {
    addText(x){
        this.currentId++
        this.lists.push({
            id: this.currentId,
            message : x,
            isDone : false
        })
    },
    del(x){
      setTimeout(()=>this.lists = this.lists.filter(el=> el.id !== x), 500)
  }
  }
}
</script>

<style>
  .done{
      text-decoration: line-through;
      animation: shake 0.5s;
  }
  .createFadeInDown{
      animation: fadeInDown 0.5s;
  }
  .animationInDelete{
      animation: shake 0.5s;
  }
</style>
