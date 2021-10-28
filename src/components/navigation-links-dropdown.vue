<template>
  <nav class="navigation-links-dropdown-nav" v-bind:class="rootClassName">
    <div class="navigation-links-dropdown-container">
      <router-link to="/mint" class="navigation-links-dropdown-navlink">
        {{ text }}
      </router-link>
    </div>
    <div class="navigation-links-dropdown-container1">
      <router-link to="/mint" class="navigation-links-dropdown-navlink1">
        {{ text3 }}
      </router-link>
    </div>
    <div class="navigation-links-dropdown-container2">
      <router-link to="/mint" class="navigation-links-dropdown-navlink2">
        {{ text31 }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinksDropdown',
  props: {
    text3: {
      type: String,
      default: 'Mint',
    },
    text31: {
      type: String,
      default: 'Mint',
    },
    text: {
      type: String,
      default: 'Mint',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.navigation-links-dropdown-nav {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.navigation-links-dropdown-container {
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.navigation-links-dropdown-navlink {
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.navigation-links-dropdown-container1 {
  width: auto;
  display: flex;
  padding-top: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
}
.navigation-links-dropdown-navlink1 {
  text-decoration: none;
}
.navigation-links-dropdown-container2 {
  width: auto;
  display: flex;
  padding-top: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
}
.navigation-links-dropdown-navlink2 {
  text-decoration: none;
}
@media(max-width: 767px) {
  .navigation-links-dropdown-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-dropdown-navlink {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-dropdown-navlink1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-dropdown-navlink2 {
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
