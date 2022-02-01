<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default { //Parte do javaScript
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>