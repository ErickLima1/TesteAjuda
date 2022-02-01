<template>
    <div class="home">
        <pageTitle icon="fa fa-home" main="Dashboard"
            sub="Base De Conhecimento"/>
        <div class="stats">
            <Stat title="Categorias" :value="stat.categories"
                icon="fa fa-folder" color="#d54d50" />
            <Stat title="Artigos" :value="stat.articles"
                icon="fa fa-file" color="#3bc480" />
            <Stat title="Usuários"  :value="stat.users"
                icon="fa fa-user" color="#3282cd" />
        </div>  
    </div>
</template>

<script>
import pageTitle from '../template/pageTitle.vue'
import Stat from './Stat.vue'
import axios from 'axios'
import  { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { pageTitle, Stat }, //registrando o pageTitle e Stat para usa no templata
    data: function() {
        return {
            stat: {} //inicia com um objeto vazio no momento que eu fizer uma requisição e voltar essa statistica sera  setada quantidade de usuario e artigo, categorias
        }
    },
    methods: {
        getStats() { //Fazendo a requisição para backend
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>

</style>