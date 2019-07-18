<template>
  <div class="fixed-center text-center">
    <h1>Page 2</h1>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Home</q-btn>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/page1')"
    >Page 1</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Page2'
}
</script>
