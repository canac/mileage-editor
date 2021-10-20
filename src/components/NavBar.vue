<template>
  <div v-if="!loading && isAuthenticated" class="nav-bar">
    <img class="avatar" :src="user.picture" alt="Avatar" />
    <span class="title"> Concur Mileage Editor </span>
    <i class="fas fa-power-off logout" @click="logout" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { AuthProvider } from '../auth/plugin';

export default defineComponent({
  setup() {
    const auth = inject(AuthProvider);
    if (!auth) {
      throw new Error('Auth0 is has not been provided');
    }

    const { loading, isAuthenticated, user } = auth;

    return {
      loading,
      isAuthenticated,
      user,
      logout() {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        auth.logout();
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  width: 100%;

  .title {
    flex: 1;
    text-align: center;
  }

  .avatar {
    width: 1em;
    height: 1em;
    border-radius: 0.25em;
  }

  .logout {
    width: 1em;
    height: 1em;
    color: gray;
    cursor: pointer;
  }
}
</style>
