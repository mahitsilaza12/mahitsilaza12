<template>
    <div id="page1 row">
        <div class="col-md-6"></div>
        <div class="col-md-4" style="margin-left: 35%;">
            <div class="container-xl" id="page1_contain">
            <p><Page1Droite/></p>
        </div>
        </div>
        <div class="col-md-2"></div>

    </div>
</template>

<script>
import Page1Droite from '@/components/organics/Auth/Login/page1Droite.vue'

export default {
    name: 'login',
    components:{
        Page1Droite
    }
}
</script>

<style>
 #page1{
    height: 100%;
    width: 100%;
    display: flex;
    margin-left: 0%;
    margin-top: 0%;
    position: fixed;
 }
 #page1_side{
    width: 150%;
    border-right: solid 1px black;
    height: 100%;
    background: #5036CF;
 }
 #page1_contain{
    width: 100%;
    height: 100%;
    background-color: white;
    margin-right: 0%;
    padding-right: 30px;
    padding-left: 30px;
 }
</style>

