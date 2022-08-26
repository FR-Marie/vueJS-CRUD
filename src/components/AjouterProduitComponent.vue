<template>
    <div class="container mt-5">
        <div v-if="!valide" class="row">
            <div class="col-lg-6 col-sm-12 offset-3">


                <form>

                    <div class="text-start mb-3">
                        <label class="labelFormAjout form-label text-warning" for="categorie">Catégorie:</label>
                        <select class="inputFormAjout d-block p-2 rounded" name="categorie" v-model="produits.categorie" required>
                            <option>Livres</option>
                            <option>option 2........</option>
                            <option>option 3........</option>
                        </select>
                    </div>
                    <div class="text-start mb-3">
                        <label class="labelFormAjout form-label text-warning" for="genre">Genre:</label>
                        <input class="inputFormAjout input-group w-75 rounded" type="text" name="genre" v-model="produits.genre" required>
                    </div>
                    <div class="text-start mb-3">
                        <label class="labelFormAjout form-label text-warning" for="auteur">Auteur:</label>
                        <input class="inputFormAjout input-group w-75 rounded" type="text" name="auteur" v-model="produits.auteur" required>
                    </div>
                    <div class="text-start mb-3">
                        <label class="labelFormAjout form-label text-warning" for="nom">Nom:</label>
                        <input class="inputFormAjout input-group w-75 rounded" type="text" name="nom" v-model="produits.nom" required>
                    </div>
                    <div class="text-start mb-3">
                        <label class="labelFormAjout form-label text-warning" for="image">Image:</label>
                        <input class="inputFormAjout input-group w-75 rounded" type="text" name="image" v-model="produits.image" required>
                    </div>
                    <div class="text-start mb-3">
                        <label class="labelFormAjout form-label text-warning" for="description">Description:</label>
                        <textarea class="inputFormAjout input-group w-75 rounded" rows="10" type="text" name="description" v-model="produits.description" required></textarea>
                    </div>
                    <div class="row text-start mb-3 d-flex align-content-center">
                        <span class="col-lg-6 d-flex">
                            <label class="labelFormAjout form-label text-warning me-2" for="prix">Prix:</label>
                            <input class="inputFormAjout input-group w-50 rounded" type="number" name="prix" v-model="produits.prix" required>
                        </span>
                        <span class="col-lg-6">
                            <label class="labelFormAjout form-label text-warning me-2" for="stock">Stock:</label>
                            <input class="inputFormAjout rounded form-check-input" type="checkbox" name="auteur" v-model="produits.stock" required>
                        </span>
                    </div>

                        <div class="mt-5 d-flex">
                            <button @click.prevent="sauvegardeProduit" type="submit" class="btn btn-outline-success me-5">AJOUTER PRODUIT</button>
                            <button class="btn btn-outline-danger">ANNULER</button>
                        </div>

                </form>


            </div>
        </div>

        <div v-else class="row">
            <div>
                <p>Le produit a bien été crée</p>
                <button @click="reinitialiserFormulaire">Retour</button>
            </div>
        </div>

    </div>




</template>

<script>
    import ProduitsDatasServices from "../../services/ProduitsDatasServices";


    export default {
        name: "AjouterProduitComponent",

        data(){
            return {
                produits:
                    {
                        "id": "",
                        "categorie": "",
                        "genre": "",
                        "auteur": "",
                        "nom": "",
                        "image": "",
                        "description": "",
                        "prix": "",
                        "stock": "",
                        publier: false
                    },
                valide: false
            }
        },
        methods:{
            sauvegardeProduit(){
                let datas = {
                    categorie: this.produits.categorie,
                    genre: this.produits.genre,
                    auteur: this.produits.auteur,
                    nom: this.produits.nom,
                    image: this.produits.image,
                    description: this.produits.description,
                    prix: this.produits.prix,
                    stock: this.produits.stock
                };

                ProduitsDatasServices.ajouterProduit(datas)
                    .then(response =>{
                        this.produits.id = response.data.id
                        console.log("Le produit a bien été crée: " + response.data)
                        this.valide = true;
                    })
                .catch(error=>{
                    console.log("Erreur lors de l'ajout du produit " + error)
                })
            },

            reinitialiserFormulaire(){
                this.valide = false;
                this.produits = {};
            }
        },
        //testclick(){
        //alert('click ok')
        //}
    }
</script>

<style scoped>

</style>