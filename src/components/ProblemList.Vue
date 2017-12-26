<template>
    <div>
        <problem v-for="problem in problems" :key="problem.id" :problem.sync="problem"></problem>
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
            //TODO(khalil): add logic for codeforces API fetching.
            problems: [
                {
                    id: 1,
                    name: 'Vanya and Cakes',
                    points: 1500,
                    tags: ["graph traversal"]   
                },
                {
                    id: 2,
                    name: 'Saitama needs noodels',
                    points: 2000,
                    tags: ["greedy"]
                },
                {
                    id: 4,
                    name: 'Plus',
                    points: 500,
                    tags: ["simple"]
                },
            ]
        }
    }
}
</script>
