<template>
    <div class="container">
        <h2 class="shadow-lg text-success mt-2 mb-5">PRODUITS</h2>

        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <ul>
                        <li
                                class="text-info p-1 border-bottom border-start border-white mb-3"
                                v-bind:class="{active: index === produitIndex}"
                                v-for="(produit, index) in produits" v-bind:key="index"
                        >
                            <span class=""> <span class="text-warning">Catégorie:</span> {{produit.categorie}} </span>
                            <span class=""> <span class="text-warning">Nom:</span> {{produit.nom}} </span>
                            <span><a @click.prevent="afficherDetails(produit, index)" class="btn btn-sm btn-outline-light ms-3"><i class="fa-solid fa-plus"></i></a></span>
                        </li>
                    </ul>
                </div>

                <div v-if="produitClic" class="col-lg-4 col-sm-12">
                            <div class="card ">
                                <div class="card-header bg-secondary">
                                    <h3 class="card-title text-warning">{{produitClic.nom}}</h3>
                                    <div class="card-title">(Catégorie: {{produitClic.categorie}})</div>
                                </div>

                                <div class="card-body text-start">
                                    <div class="card-img-top"><img v-bind:src="require('../assets/livres/' + produitClic.image)"></div>
                                    <div class="card-text"><span class=""> <span class="text-warning"><strong>Genre:</strong></span> {{produitClic.genre}} </span></div>
                                    <div class="card-text"><span class=""> <span class="text-warning"><strong>Auteur:</strong></span> {{produitClic.auteur}} </span></div>
                                    <div class="card-text"><span class=""> <span class="text-warning"><strong>Description:</strong></span>{{produitClic.description}} </span></div>
                                    <div class="card-text"><span class=""> <span class="text-warning"><strong>Prix:</strong></span> {{produitClic.prix}}€ </span></div>
                                </div>

                                <div class="card-footer bg-secondary">
                                    <div><button class="btn btn-close-white">ACHETER</button></div>
                                </div>
                            </div>

                </div>




            </div>
        </div>

    </div>
</template>

<script>



    import ProduitsDatasServices from "../../services/ProduitsDatasServices";

    export default {
        name: "ProduitsComponent",

        data(){
            return {
                //tableau vide des produits rempli grâce au getter et sau setter
                produits: [],
                //produit affiché au clic (aucun par défaut)
                produitClic: null,
                //Index du tableau [0,2...] qui commence toujours à 0
                produitIndex: -1,
                //recherche d'un produit par nom
                rechercher: "",

            }
        },
        methods:{
            //La fonction est appelée quand le compsant est monté (mounted() -> le cycle de vie)
            afficherTousLesProduits(){
                //appel de la méthode (getAll) de la classe de service (Requête HTTP methode GET)
                ProduitsDatasServices.afficherTousLesProduits()
                .then(response=>{
                    this.produits = response.data
                    //console.log(response.data);
                })
                //Sinon erreur déclenchée
                .catch(error=>{
                    console.log("Aucun résultat trouvé" + error);
                })
            },
            afficherDetails(produit, index){
                //ProduitsDatasServices.afficherDetails(id)
                this.produitClic = produit;
                this.produitIndex = index
            },
            //testclick(){
               // alert('click ok')
            //}
        },
        mounted() {
            this.afficherTousLesProduits();

        }
    }
</script>

<style scoped>

</style>