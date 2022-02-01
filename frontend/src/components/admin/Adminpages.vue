<template>
    <div class="admin-pages">
        <pageTitle icon="fa fa-cogs" main="Adminstração do Sistema"
            sub="Cadastros & Cia" />
    </div>
</template>

<script>
import pageTitle from '../template/pageTitle.vue'

export default {
    name: 'AdminPages',
    components: { pageTitle} //Registrando o pageTitle para template
}
</script>

<style>

</style>