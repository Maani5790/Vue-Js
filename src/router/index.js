import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Post from '@/views/Post.vue'
import CreatePost from '@/views/CreatePost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    props: true
  },
  {
    path: '/create-post',
    name: 'createPost',
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
