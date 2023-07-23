<template>
    <div class="col d-flex">
        <div class="col-12">
            <Slide/>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="#" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="#" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="#" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="#" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
</template>

<script>
    import Slide from '@/components/organics/Page/Slide.vue';
    // import ClientList from '@/components/organics/Page/ClientList.vue';

    export default {
        name:'Dashboard',
        components: {
            Slide,
            // ClientList
        }   
    }
</script>
<style scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html,
    body {
    height: 100%;
    }

    .parent {
    height: 100vh;
    }

    .col {
    height: 100%;
    }
</style>