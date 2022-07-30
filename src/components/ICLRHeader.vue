<template>
  <div class="UpperTitle">
    <img alt="ICLR logo" src="../assets/ICLR_logo.png">
    <h1>Ricardo interface</h1>
  </div>
</template>

<script>
export default {
  name: "ICLRHeader"
}
</script>

<style scoped>
.UpperTitle
{
  /*text-align: center;*/
  /*vertical-align: center;*/
  padding: 30px;
  font-weight:bold;
}
.UpperTitle img { position: absolute; left: 30px; top: 30px; height: 110px}
.UpperTitle h1 { position: relative; top: 40px; height: 110px; line-height: 1}
</style>