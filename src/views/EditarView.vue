<template>
    <div>
      <h2>Editar Producto</h2>
  
      <form v-on:submit.prevent="actualizarProducto">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" v-model="editarProducto.nombre" required />
        </div>
  
        <div>
          <label for="descripcion">Descripción:</label>
          <textarea v-model="editarProducto.descripcion" required></textarea>
        </div>
  
        <div>
          <label for="nombre">Talla:</label>
          <select v-model="editarProducto.talla" required>
            <option
              v-for="talla in tallasDisponibles"
              :key="talla"
              :value="talla"
            >
              {{ talla }}
            </option>
          </select>
        </div>
  
        <div>
          <label for="nombre">Estilo:</label>
          <input type="text" v-model="editarProducto.estilo" required />
        </div>
  
        <div>
          <label for="nombre">Imagen:</label>
          <select v-model="editarProducto.f_img" required>
            <option v-for="opcion in opcionesFImg" :key="opcion" :value="opcion">
              {{ opcion }}
            </option>
          </select>
        </div>
  
        <div>
          <label for="nombre">Categoría:</label>
          <select v-model="editarProducto.f_cat" required>
            <option
              v-for="opcion in opcionesFCat"
              :key="opcion.value"
              :value="opcion.value"
            >
              {{ opcion.label }}
            </option>
          </select>
        </div>
  
        <div>
            <button class="btn btn-success" type="submit">Actualizar Producto</button>
          <router-link to="/listar">Cancelar</router-link>
        </div>
      </form>
    </div>
  </template>


<script>
export default {
  data() {
    return {
      editarProducto: {},
      tallasDisponibles: ["S", "M", "L", "XL", "XXL"], // Cambia según tus necesidades
      opcionesFImg: [1, 2, 3], // Cambia según tus necesidades
      opcionesFCat: [
        { label: "Categoria A", value: 1 },
        { label: "Categoria B", value: 2 },
        { label: "Categoria C", value: 3 },
      ],
    };
  },
  created:function(){
    this.obtenerProductoID();
  },
  methods: {
    obtenerProductoID() {
        fetch('http://localhost/tienda01/?consultar_producto='+this.$route.params.id)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                this.editarProducto = datosRespuesta[0];
            })
            .catch(error => console.log(error));
        },
        actualizarProducto(){
            var datosEnviar = {
                id: this.$route.params.id,
                nombre: this.editarProducto.nombre,
                descripcion: this.editarProducto.descripcion,
                talla: this.editarProducto.talla,
                estilo: this.editarProducto.estilo,
                f_img: this.editarProducto.f_img,
                f_cat: this.editarProducto.f_cat,
            }

            fetch('http://localhost/tienda01/?actualizar_producto='+this.$route.params.id,{
                method: 'POST',
                body: JSON.stringify(datosEnviar),
            })
            .then(respuesta => respuesta.json())
            .then(datosRespuesta => {
                console.log(datosRespuesta)
                window.location.href = "../listar"
                // alert(datosRespuesta.mensaje)
                // this.empleado = {}
            })
        }
  },
};
</script>


<style>


</style>