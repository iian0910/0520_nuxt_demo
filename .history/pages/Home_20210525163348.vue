<template>
  <div class="home">
    <UserForm text="送出" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Home',
  components: {
    UserForm
  }
}
</script>
