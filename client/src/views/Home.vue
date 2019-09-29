<template>
  <div class="home">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Cedula</label>
        <input v-model="ced" type="text" class="form-control" id="id_tarea" placeholder="">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Nombre</label>
        <input v-model="nom" type="text" class="form-control" id="id_tarea" placeholder="">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Apellidos</label>
        <input v-model="ape" type="text" class="form-control" id="id_tarea" placeholder="">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Telefono fijo</label>
        <input v-model="tel" type="text" class="form-control" id="id_tarea" placeholder="">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Correo</label>
        <input v-model="cor" type="text" class="form-control" id="id_tarea" placeholder="">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Direccion</label>
        <input v-model="dir" type="text" class="form-control" id="id_tarea" placeholder="">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Celuar</label>
        <input v-model="cel" type="text" class="form-control" id="id_tarea" placeholder="">
      </div>                                                                                                                       
      <div class="form-group row">
        <div class="col-sm-10">
          <button v-on:click="crear(ced,nom,ape,tel,cor,dir,cel)" type="submit" class="btn  btn-outline-success">Crear</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
      ced: "",
      nomb:"",
      ape:"",
      tel:"",
      cor:"",
      dir:"",
      cel:""
    }
  },
  methods:{
    getTareas: function(){
      axios.get('http://localhost:3000').then( response=>{
        this.tareas = response.data
        console.log(response.data)
      })
    
    },
    crear(ced,nom,ape,tel,cor,dir,cel){
      axios.post('http://localhost:3000',{
        ced,nom,ape,tel,cor,dir,cel
      })
    }
    
  },
  mounted: function(){
    this.getTareas ()
  }
}
</script>

<style>
.home{
 max-width: 400px;
 border: 1px solid #42b983;
 border-radius: 10px;
 padding: 7px;
 margin: 0 auto;
 text-align: center;
 margin-bottom: 20px;
}


</style>