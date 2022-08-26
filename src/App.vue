<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/produits">Produits</router-link> |
      <router-link to="/ajouter-produits">Ajouter Produits</router-link>
    </nav>
    <router-view/>
  </div>
</template>

