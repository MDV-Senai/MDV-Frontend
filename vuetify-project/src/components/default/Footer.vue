<template>
  <v-main class="mt-15">
    <v-footer
      class="d-flex flex-column mt-5 position-absolute bottom-0 w-100"
      color="grey-lighten-3"
    >
      <div
        class="px-4 py-2 d-flex flex-column justify-space-between text-center w-100"
      >
        <p>Maternidade Darcy Vargas &copy;</p>
        <div id="button-team">
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn density="compact" icon="mdi-account-group-outline" class="mb-1" color="grey-darken-4" v-bind="props"></v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>
                  <a
                    class="text-black"
                    target="blank"
                    :href="item.href"
                    v-if="item.href"
                    >{{ item.title }}</a
                  >
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-footer>
  </v-main>
</template>

<script>
</script>

<style scoped>
a {
  color: white;
  font-weight: bold;
}
#button-team {
  position: absolute;
  bottom: 8px;
  right: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Maria Antonia",
          href: "https://www.linkedin.com/in/maria-antonia-rosa-71502a244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Lucas Demori",
          href: "https://www.linkedin.com/in/lucas-demori21/",
        },
        {
          title: "Matheus Trindade",
          href: "https://www.linkedin.com/in/matheus-willian-schmoeller-2688b9248/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=br",
        },
        {
          title: "Matheus Vicenzi",
          href: "https://www.linkedin.com/in/matheus-vicenzi/",
        },
        {
          title: "José Henrique",
          href: "https://www.linkedin.com/in/jose-patrocinio/",
        },
      ],
    };
  },
};
</script>
