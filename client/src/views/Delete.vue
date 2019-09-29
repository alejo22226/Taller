<template>
  <div class="delete">
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
          <th scope="col">Eliminar</th>
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
          <td><button v-on:click='formDelete(tarea.id_cliente)' type="button" class="btn btn-danger">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'delete',
  components: {
    
  },
  data(){
    return{
      tareas:[]
    }
  },
  methods:{
    getTareas: function(){
      axios.get('http://localhost:3000').then( response=>{
        this.tareas = response.data
      })
    },
    formDelete(ced){
      axios.delete('http://localhost:3000' ,{
        data : {ced}
      })
      

      
    }
  },
  mounted: function(){
    this.getTareas ()
  }
}
</script>


<style>
.delete{
    padding: 30px;
}
</style>