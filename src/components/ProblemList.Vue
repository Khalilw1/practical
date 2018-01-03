<template>
    <div class="section is-medium">
        <div class="container is-fluid">
            <a class="button is-link" v-on:click="fetch_problems()">refersh</a>
            <problem v-for="(problem, id) in problems" :key="id" :problem.sync="problem"></problem>
        </div>
    </div>
</template>

<script>
import Problem from './Problem'

export default {
    components: {
        Problem,
    },
    data() {
        return {
            problems: []
        }
    },
    methods: {
        fetch_problems: function() {
            const codeforces_api_url = 'http://codeforces.com/api/'
            fetch(codeforces_api_url + 'problemset.problems')
            .then(data => { return data.json() })
            .then(data => {
                this.problems = data.result.problems
            });
        }
    }
}
</script>
