<template>
    <div class="card" style="height: 374px;">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Card'
    }
</script>

<style>
    .card {
        width: 250px;
        height: 374px;
        box-shadow: 0px 4px 68px 0px #0000001A;
    }
</style>