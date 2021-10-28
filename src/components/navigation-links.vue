<template>
  <nav class="navigation-links-nav">
    <span class="navigation-links-text">{{ text }}</span>
    <span class="navigation-links-text1">{{ text1 }}</span>
    <span class="navigation-links-text2">{{ text2 }}</span>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    text: {
      type: String,
      default: 'Mint',
    },
    text2: {
      type: String,
      default: 'Docs',
    },
    rootClassName: String,
    text1: {
      type: String,
      default: 'Stake',
    },
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-text1 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text2 {
  margin-left: var(--dl-space-space-twounits);
}
@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
