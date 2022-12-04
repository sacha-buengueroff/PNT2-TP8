<template>

    <div class="jumbotron">
      <h2>Ingrese un usuario</h2>
      <hr>
      <hr>
      <br>
      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- ----------------------------------- -->
        <!--            CAMPO NOMBRE             -->
        <!-- ----------------------------------- -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre"
            name="nombre" 
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
          > <!-- Se le pone name igual al del field-messages para que queden relacionados -->
      
          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">Este campo debe poseer al menos {{ nombreMinLength }} caracteres</div>
          </field-messages>
        </validate>     

        <br>

        <!-- ----------------------------------- -->
        <!--            CAMPO EDAD               -->
        <!-- ----------------------------------- -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.edad"
            name="edad" 
            required
            :min="edadMinima"
            :max="edadMaxima"
          > <!-- Se le pone name igual al del field-messages para que queden relacionados -->
      
          <!-- Mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">La edad minima es de {{ edadMinima }}</div>
            <div slot="max" class="alert alert-danger mt-1">La edad maxima es de {{ edadMaxima }}</div>
          </field-messages>
        </validate>    

        <br>

        <!-- ----------------------------------- -->
        <!--            CAMPO EMAIL              -->
        <!-- ----------------------------------- -->
        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.email"
            name="email" 
            required
          > <!-- Se le pone name igual al del field-messages para que queden relacionados -->
      
          <!-- Mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>    

        <br>

        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>
      </vue-form>

      <hr>
    </div>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInitialData(),
        nombreMinLength: 3,
        nombreMaxLength: 15,
        edadMinima: 18,
        edadMaxima: 120
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre: null,
          edad: null,
          email: null
        }
      },
      async enviar() {
        try {
          await this.$store.dispatch("enviarUsuario", this.formData)
          this.formData = this.getInitialData()
          this.formState._reset()
        }
        catch (error) {
          console.log(error);
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: teal;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
