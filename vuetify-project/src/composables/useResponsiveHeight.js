import { computed } from "vue";
import { useDisplay } from "vuetify";

export function useResponsiveHeight() {
  const { name } = useDisplay();

  const height = computed(() => {
    switch (name.value) {
      case "xs":
        return "220px";
      case "sm":
        return "400px";
      case "md":
        return "500px";
      case "lg":
        return "600px";
      case "xl":
        return "800px";
      case "xxl":
        return "1200px";
      default:
        return "auto";
    }
  });

  return {
    height
  };
}
