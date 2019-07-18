<template>
  <div class="fixed-center text-center">
    <h1>Page 1</h1>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Home</q-btn>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/page2')"
    >Page 2</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Page 1'
}
</script>
