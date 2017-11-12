<template>
    <div class="search">
        <searchheader/>
        <searchhotlist/>
    </div>
</template>

<script>
    import searchheader from './header.vue';
    import searchhotlist from './hotlist.vue';
    export default {
        name:'HelloWorld',
        data () {
            return {
            msg: ''
            }
        },
        components: {
            searchheader: searchheader,
            searchhotlist: searchhotlist
        }
    }
</script>

<style scoped>

</style>
