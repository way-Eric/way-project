<template>
    <div class="hello">
        <tourheader/>
        <tourlist/>
        <ticket :tourlistInfo="tourlistInfo"/>
        <dock/>
    </div>
</template>

<script>

    import tourheader from './components/header.vue';
    import tourlist from './components/tourlist.vue';
    import ticket from './components/ticket.vue';
    import dock from './components/dock.vue';
    import axios from 'axios';
    export default {
        name:'HelloWorld',
        data () {
            return {
                tourlistInfo: []
            }
        },
        components: {
            tourheader: tourheader,
            tourlist: tourlist,
            ticket: ticket,
            dock: dock
        },
        mounted() {
            this.getIndexData();
        },
        methods: {
            getIndexData() {
                axios.get('/static/Tourism.json')
                    .then(this.handleGetIndexDataSucc.bind(this))
                    .catch(this.handleGetIndexDataErr.bind(this));
            },
            handleGetIndexDataSucc(response) {
                const data = response.data.data;
                this.tourlistInfo = data.detailList;
            },
            handleGetIndexDataErr(err) {
                console.log(err)
            }
        }
    }
</script>

<style scoped>

</style>
