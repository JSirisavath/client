<template>
  <div class="navigation-links">
    <!-- Nav link for Home page -->
    <span class="nav-link">
      <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
    </span>

    <!-- Nav link for About page -->
    <span class="nav-link">
      <router-link v-bind:to="{ name: 'AboutSite' }"
        >About this site</router-link
      >
    </span>
  </div>

  <p>
    Header Image by
    <a href="https://unsplash.com/photos/duQ1ulzTJbM" target="_blank"
      >@Chris Lawton on Unsplash
    </a>
  </p>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style scoped>
.nav-link {
  margin: 1rem;
}
</style>
