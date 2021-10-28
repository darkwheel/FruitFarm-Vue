<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <router-link to="/mint" class="navigation-links-navlink">
      {{ text }}
    </router-link>
    <router-link to="/stake" class="navigation-links-navlink1">
      {{ text1 }}
    </router-link>
    <span class="navigation-links-text">{{ text2 }}</span>
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
.navigation-links-navlink {
  text-decoration: none;
}
.navigation-links-navlink1 {
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.navigation-links-text {
  margin-left: var(--dl-space-space-twounits);
}







@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-navlink {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-navlink1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .rootClassName1 {
    margin-left: var(--dl-space-space-threeunits);
    margin-right: var(--dl-space-space-threeunits);
  }
}
</style>
