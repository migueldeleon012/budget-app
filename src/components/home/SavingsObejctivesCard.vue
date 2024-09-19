<script lang="ts">
import WrappedCard from '../ui/WrappedCard.vue';
import TextWithProgress from '../ui/TextWithProgress.vue';

export default {
  components: { WrappedCard, TextWithProgress },
  props: ['title', 'data', 'actions', 'className'],
};
</script>

<template>
  <wrapped-card :title="title" :className="className">
    <template #content>
      <v-card-text class="flex-1-1-0 overflow-auto">
        <div
          v-for="{ title, costPerMonth, contribution } in data"
          :key="title"
          class="mb-6"
        >
          <text-with-progress
            :title="title"
            :partial="contribution"
            :total="costPerMonth"
          >
            <slot
              name="textWithProgress"
              :partial="contribution"
              :total="costPerMonth"
            ></slot>
          </text-with-progress>
        </div>
      </v-card-text>
    </template>
    <template #actions>
      <div class="d-flex justify-end w-100">
        <router-link :to="actions.path">
          <v-btn
            variant="outlined"
            color="pink-lighten-1"
            appendIcon="mdi-chevron-right"
          >
            {{ actions.title }}
          </v-btn>
        </router-link>
      </div>
    </template>
  </wrapped-card>
</template>
