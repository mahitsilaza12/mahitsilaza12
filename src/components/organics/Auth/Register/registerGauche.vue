<template>
    <div id="page">
        <div>
            <ButtomSociaux />
        </div>
        <div>
            <imagePage2 
            />
        </div>
        <div id="page_text">
            <h1>
            <TextPage
                color="#FFFFFF"
                fontSize="35px"
                fontWeight="500px"
                lineHeight="24px"
            >BDA Command
            </TextPage>
            </h1>
        </div>
        <div id="page_textPage">
            <TextPage
                color="#FFFFFF"
                fontSize="14px"
                fontWeight="400"
                lineHeight="24px"
            >
                Impress Employers and Land Your Dream Job with a Polished CVUse Our CV Builder to Create a CV That Will Help You Stand Out During Your Job Interview]
            </TextPage>
        </div>
    </div>
</template>

<script>
    import ButtomSociaux from '@/components/molecules/buttomSociaux/ButtomSociax.vue'
    import imagePage2 from '@/components/atoms/image/imagePage2.vue'
    import TextPage from '@/components/atoms/textPage/TextPage.vue'
    export default {
        name:'page1Gauche',
        components:{
            ButtomSociaux, imagePage2, TextPage
    }
}
</script>

<style>
    #page_text {
        margin-left: 60px;
        color:white;
    }
    #page_textPage {
        margin-left: 60px;
        color:white;
        margin-bottom: 88px;
        font-size: 18px;
        margin-right: 70px;
    }
</style>