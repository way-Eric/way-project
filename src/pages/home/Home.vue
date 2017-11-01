<template>
    <div>
      <index-header />
      <index-banner />
      <index-entertain />
    </div>
</template>


<script>
    import header from "./header.vue";
    import banner from "./banner.vue";
    import entertain from "./entertain.vue";

    export default {
        components: {
            "index-header": header,
            "index-banner": banner,
            "index-entertain": entertain,
        }
    }
</script>


<style>

</style>
