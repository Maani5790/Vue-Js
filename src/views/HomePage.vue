<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">All Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          <h2 class="text-lg font-bold">{{ post.title }}</h2>
        </router-link>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Homepage',
  setup() {
    const store = useStore()
    const posts = computed(() => store.state.posts)

    store.dispatch('fetchPosts')

    return {
      posts,
    }
  },
}
</script>
