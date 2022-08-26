<template>
    <div>
        <!------Appel du composant sous forme de balise HTML (!!doit TOUJOURS être enfermé dans une DIV!!)------>
        <ProduitsComponent></ProduitsComponent>

    </div>

</template>

<script>
    import ProduitsComponent from "@/components/ProduitsComponent";

    export default {
        name: "Accueil-vue",
        components: {ProduitsComponent},

    }
</script>

<style scoped>

</style>