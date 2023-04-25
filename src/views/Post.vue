<template>
  <div>
    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <hr class="my-8">
    <h2 class="text-lg font-bold mb-4">Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <h3 class="font-bold">{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
    <hr class="my-8">
    <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            @click="deletePost">Delete Post</button>
    <router-link class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-4"
                 :to="{ name: 'edit-post', params: { id: post.id } }">Edit Post</router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Post',
  setup({ route }) {
    const store = useStore()
    const post = computed(() => store.getters.getPostById(Number(route.params.id)))
    const comments = computed(() => store.getters.getCommentsByPostId(Number(route.params.id)))

    function deletePost() {
      store.dispatch('deletePost', post.value.id)
    }

    return {
      post,
      comments,
      deletePost,
    }
  },
}
</script>
