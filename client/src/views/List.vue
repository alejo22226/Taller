<template>
  <div class="list">
  
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Cedula</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Fijo</th>
          <th scope="col">Correo</th>
          <th scope="col">Direccion</th>
          <th scope="col">Celular</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarea in tareas" v-bind:key="tarea">
          <th scope="row">{{tarea.id_cliente}}</th>
          <td>{{tarea.Nombre}}</td>
          <td>{{tarea.Apellidos}}</td>
          <td>{{tarea.Tel_fijo}}</td>
          <td>{{tarea.Correo}}</td>
          <td>{{tarea.Direccion}}</td>
          <td>{{tarea.Celular}}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'list',
  components: {
    
  },
  data(){
    return{
      tareas:[],
      realizada:[]
    }
  },
  methods:{
    getTareas: function(){
      axios.get('http://localhost:3000').then( response=>{
        this.tareas = response.data
        
      })
    }
  },
  mounted: function(){
    this.getTareas ();
  }
}
</script>


<style>
.list{
  padding: 30px;
}
</style>