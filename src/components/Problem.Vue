<template>
  <div class="box">
      <div class="columns">
          <div class="column">{{ problem.name }}</div>
          <div class="column">{{ problem.points }}</div>
          <div class="column">{{ problem.tags[0] }}</div>
      </div>
  </div>
</template>
<script>
export default {
    props: ['problem']
}
</script>

