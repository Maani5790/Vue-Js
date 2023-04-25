import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'my-app',
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      this.posts = data
    },
    async createPost(post) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      const data = await response.json()
      this.posts.push(data)
    },
    async editPost(post) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      const data = await response.json()
      const index = this.posts.findIndex(p => p.id === data.id)
      if (index !== -1) {
        this.posts.splice(index, 1, data)
      }
    },
    async deletePost(id) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      })
      if (response.status === 200) {
        const index = this.posts.findIndex(p => p.id === id)
        if (index !== -1) {
          this.posts.splice(index, 1)
        }
      }
    }
  }
})
