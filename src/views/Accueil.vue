<template>
    <div>
        <!------Appel du composant sous forme de balise HTML (!!doit TOUJOURS être enfermé dans une DIV!!)------>
        <AccueilComponent></AccueilComponent>
    </div>

</template>

<script>
    import AccueilComponent from "@/components/AccueilComponent";
    export default {
        name: "Accueil-vue",
        components: {AccueilComponent}
    }
</script>

<style scoped>

</style>