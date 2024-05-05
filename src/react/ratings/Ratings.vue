<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'RatingsComponent',
  props: {
    rating: {
      type: Number,
      required: true,
    },
    maxRating: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const fullStars = computed(() => Math.floor(props.rating));   
    const emptyStars = computed(() => props.maxRating - fullStars.value);

    return {
      fullStars,
      emptyStars,
    };
  },
});
</script>

<template>
  <div class="ratings__container" aria-label="rating">
    <template v-for="index in fullStars" :key="'full-' + index">
      <span class="ratings__rating" data-qa="full-star" role="img" aria-label="full star">★</span>
    </template>

    <template v-for="index in emptyStars" :key="'empty-' + index">
      <span class="ratings__rating" data-qa="empty-star" role="img" aria-label="empty star">☆</span>
    </template>
    <span> ({{ rating }}) </span>
  </div>
</template>


<style lang="scss">
.ratings {
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 8px;
  }
  &__rating {
    font-size: 16px;
    color: #f1c40f;
  }
}
</style>