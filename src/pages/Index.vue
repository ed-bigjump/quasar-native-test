<template>
  <q-page class="flex flex-center">
    <div>
      <div>
        <img alt="Placeholder" src="https://edmoss87-public-images.s3.eu-west-2.amazonaws.com/thumb.png">
      </div>
      <div>
        <p>Extra line added</p>
        <p>And another</p>
      </div>
      <div>
      <q-uploader
        url="http://localhost:4444/upload"
        style="max-width: 300px"
      />
      </div>
      <div>
      <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/error')"
    >Go to error page</q-btn>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
