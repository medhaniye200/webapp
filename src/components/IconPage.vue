<template>
  <div>
    <v-icon @click="handleIconClick"> mdi-account </v-icon>

    {{ output }}
  </div>
</template>

<script>
export default {
  methods: {
    handleIconClick() {
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>
