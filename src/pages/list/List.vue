<template>
  <div class="home">
    <list-header ></list-header>
    <list-menu ></list-menu>
    <list-con :listInfo="listInfo"></list-con>
  </div>
</template>

<script>
import listHeader from './listHeader.vue'
import listMenu from './listMenu.vue'
import listCon from './listCon.vue'
import axios from 'axios'
export default {
  components: {
    'list-header' :listHeader ,
    'list-menu' : listMenu,
    'list-con' :listCon
  },
  
  data(){
    return{
     listInfo:[],
    }
  },

  mounted() {
   this.getListData();
  },

  methods: {
    getListData(){
      axios.get('/static/list.json')
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErro.bind(this))
    },

    handleGetDataSucc(respones){
      //console.log(respones.data.data.listInfo)
      this.listInfo = respones.data.data.listInfo
    },

    handleGetDataErro(Erro){
      return("状态码错误")
    }
  }
}
</script>

