<template>
  <div>
    <h1>Hi There!</h1>
    <p class="subheading">Here are some guides to some things</p>
    <guideList />
  </div>
</template>

<script>
import guideList from "@/components/guides/guideList";
export default {
  components: {
    guideList,
  },
};
</script>
