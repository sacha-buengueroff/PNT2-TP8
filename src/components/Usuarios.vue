<template>
  <div class="jumbotron">
    <h2>Usuarios</h2>
    <hr />
    <hr />
    <br />
    <table class="table table-dark" v-if="mostrarUsers.length != 0">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in mostrarUsers" :key="index">
          <td>{{ user.nombre }}</td>
          <td>{{ user.edad }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-warning" role="alert" v-else>
      No hay usuarios disponibles
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-usuarios",
  props: [],
  async beforeCreate() {
    await this.$store.dispatch("buscarUsuarios")
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {}
};
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
