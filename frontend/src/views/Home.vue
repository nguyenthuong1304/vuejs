<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies">
      <h2
        class="uppercase tracking-wider text-orange-500 text-lg font-semibold"
      >
        Popular Movies
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <CardMovie v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_MOVIES } from "../store/actions.type";
import CardMovie from "../components/CardMovie.vue";

export default {
  name: "home",
  components: {
    CardMovie
  },
  mounted() {
    this.$store.dispatch(FETCH_MOVIES, "https://reqres.in/api/users");
  },
  computed: {
    ...mapGetters(["isAuthenticated", "items"])
  }
};
</script>
