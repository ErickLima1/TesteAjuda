<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>  <!-- fa fa-lg e da font awesome  --> 
        </a>
        <h1 class="title">
            <router-link to="/">{{ title }}</router-link> <!--Fazendo a navegação do title para home-->
        </h1>
        <userDropdown v-if="!hideUserDropdown"/>
    </header>
</template>

<script>
import userDropdown from './userDropdown.vue'

export default { //Parte do javaScript
    name: 'Header',
    components: { userDropdown }, //Registrando o userDropdown   
    props: { //Props tem 2 propriedades  paramentos  pro componentes 
        title: String,
        hideToggle: Boolean, // Vai ser pra esconder o menu 
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return  this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down" //Alternando o icone da aplicação
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu') //Esta chamando a função dentro da store 
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-content: center;
    }
    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #fff;
        text-decoration: none;
    }

    .title a:hover {
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle { /*Alinhando e colocando cor no toggle*/
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover { /*Quando o mouse passa a cor do toggle vai mudar */
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>