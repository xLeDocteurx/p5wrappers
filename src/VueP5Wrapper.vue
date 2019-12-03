<template>
    <div ref="sketch"></div>
</template>

<script>
import p5 from 'p5'

export default {
    name: 'P5Wrapper',
    components: {

    },
    computed: {

    },
    props: {
        data: {
            type: Object,
            required: false
        },
    },
    data() {
        return {
            canvas: null,
        }
    },
    mounted() {
        this.canvas = new p5(this.props.sketch, this.$refs.sketch)
        this.doesComponentReceivedDatas()
    },
    updated() {
        this.doesComponentReceivedDatas()
    },
    methods: {
        doesComponentReceivedDatas() {
            // this.canvas.datas = this.props.datas ? this.props.datas : null
            if(this.props.datas) {
                this.canvas.datas = this.props.datas
            } else {
                this.canvas.datas = null
            }
        },
    }
}
</script>

<style scoped>

</style>