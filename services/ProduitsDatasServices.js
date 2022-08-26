//CE FICHIER EST LA PASSERELLE ENTRE LE BACK ET FRONT
//IL REGROUPE DONC TOUTES LES METHODES (REQUETES HTTP) NECESSAIRES AU PROJET
//(afficher/afficher détails/ ajouter un produit / mettre à jour un produit / supprimer un produit)

//Créer les 6 méthodes qui retourne toutes une route définie dans votre
// dossier router/index.js

//import du fichier de configuration AXIOS et des requêtes HTTP (post/get/put-patch/delete)


import http from '../http-config';

//Création d'une classe réutilisable
class ProduitsDatasServices {

    //récupérer et afficher tous les produits
    afficherTousLesProduits(){
        return http.get('/produits');
    }

    //récupérer et afficher un seul produit
    afficherDetails(id){
        return http.get(`/produits/${id}`);
    }

    //Créer un produit
    ajouterProduit(data){
        return http.post('/produits', data);
    }

    //Mettre à jour un produit
    updateProduit(id){
        return http.patch(`/produits/${id}`);
    }

    //Supprimer un produit
    supprimerProduit(id){
        return http.delete(`/produits/${id}`);
    }

    //Rechercher un produit par nom
    recherProduitParNom(nom){
        return http.get(`/produits?title=${nom}`);
    }
}

export default new ProduitsDatasServices();