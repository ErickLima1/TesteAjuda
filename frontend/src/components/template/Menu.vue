<template>
    <aside class="menu" v-show="isMenuVisible" ></aside>

</template>

<script>
import { mapState } from 'vuex' // responsavel para mapear um atributo da store  dentro do components

export default { //Parte do javaScript
    name: 'Menu',
    computed: mapState(['isMenuVisible']) // Com o mapState posso pegar o atributo que eu quero mapear  para dentro do components

}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>