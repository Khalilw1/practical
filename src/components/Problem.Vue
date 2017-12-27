<template>
<div class="box">
    <div class="columns">
        <div class="column has-text-centered">{{ problem.name }}</div>
        <div class="column has-text-centered"><strong>{{ problem.points }}</strong></div>
        <div class="column has-text-centered">{{ problem.tags[0] }}</div>
        <div class="column has-text-centered">
            <div class="field">
                <input class="is-checkradio has-background-color is-success" :id="problem.name" type="radio" :name="problem.name">
                <label :for="problem.name">solved</label>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ['problem']
}
</script>

