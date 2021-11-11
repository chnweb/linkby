<template>
  <div id="items">
    <h1>{{ items.name }}</h1>
    <div v-for="score in scores" :key="score.score" class="item">
      <h3>Items with Score {{ score.score }}</h3>
      <ul v-for="item in score.items" :key="item.id">
        <li v-bind:class="{ 'only-one': score.items.length === 1 }">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "MyComponent",
  props: {
    items: { type: Array, required: true },
  },
  computed: {
    scores() {
      let scores = [];
      let originalItems = this.items.items;
      for (let i = 0; i < originalItems.length; i++) {
        const group = scores.find((n) => n.score === originalItems[i].score);
        if (group) group.items.push(originalItems[i]);
        else
          scores.push({
            score: originalItems[i].score,
            items: [originalItems[i]],
          });
      }
      for (let i = 0; i < scores.length; i++) {
        scores[i].items.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      }
      return scores;
    },
  },
};
</script>
    
<style>
.only-one {
}
</style>