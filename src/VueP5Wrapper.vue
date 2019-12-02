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
    data() {
        return {
            canvas: null,
        }
    },
    mounted() {
        this.canvas = new p5(this.props.sketch, this.$refs.sketch)
    }
}
</script>

<style scoped>

</style>