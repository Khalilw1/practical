<template>
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    </nav>
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

