import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from "@/views/Accueil";
import Produits from "@/views/Produits";

Vue.use(VueRouter)

const routes = [
    //path = l'URL correspondant au composant
    //path: '/',
    //name = le nom de cette route pour l'étiquetage et le débogage
    //name: 'home',
    //component = le composant qui doit s'afficher lorsque le path est trouvé
    //component: HomeView
  {
    path: '/',
    name: 'Accueil-vue',
    component: Accueil
  },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits
  },
  {
    path: '/ajouter-produits',
    name: 'AjouterProduit',
    component: Accueil
  },
  {
    path: '/produits/:id',
    name: 'DetailsProduit',
    component: Accueil
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
