<template>
  <div id="app">
    <h1>Welcome To The Practical Profiler</h1>
    <ProblemList />
  </div>
</template>

<script>
import ProblemList from './components/ProblemList'
export default {
    name: 'app',
    components: {
        ProblemList,
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

h1 {
    font-family: 'Lato';
    color: steelblue;
    text-align: center;
}
</style>
