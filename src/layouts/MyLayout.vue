<template lang="pug">
  q-layout(view="hHh Lpr lff")
    q-header
      q-toolbar
        q-btn.q-mr-xs(flat @click="drawer = !drawer" dense round icon="menu")
        q-separator(dark vertical spaced)
        div.q-pa-md
          q-breadcrumbs(active-color="white" style="font-size: 16px")
            template(v-slot:separator)
              q-icon(size="1.5em" name="chevron_right" color="white")
            q-breadcrumbs-el(
              label="Home"
              icon="home"
              to="/"
              exact-active-class="text-weight-bolder")
            q-breadcrumbs-el(label="Sales" to="/document" exact-active-class="text-weight-bolder")
            q-breadcrumbs-el(label="Sales Order" exact-active-class="text-weight-bolder")

    q-drawer(
      v-model="drawer"
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
      show-if-above
      bordered
      content-class="bg-grey-3")
      q-scroll-area.fit
        q-list(padding)
          q-item(clickable v-ripple to="/" exact)
            q-item-section(avatar)
              q-icon(color="blue" name="inbox")
            q-item-section List
          q-item(clickable v-ripple to="/document" exact)
            q-item-section(avatar)
              q-icon(color="orange" name="star")
            q-item-section Document
          q-item(clickable v-ripple to="/setup" exact)
            q-item-section(avatar)
              q-icon(color="purple" name="send")
            q-item-section Setup
          q-item(clickable v-ripple to="/auth" exact)
            q-item-section(avatar)
              q-icon(color="teal" name="drafts")
            q-item-section Authentication

          q-item(clickable v-ripple to="/wizard" exact)
            q-item-section(avatar)
              q-icon(color="red" name="home")
            q-item-section Wizard
      div.q-mini-drawer-hide.absolute(style="top: 15px; right: -17px")
        q-btn(dense round unelevated color="accent" icon="chevron_left" @click="miniState = true")

    q-page-container
      router-view
    div.q-pa-md
      q-ajax-bar(ref="bar" position="bottom" color="accent" size="5px" skip-hijack)
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      drawer: true,
      miniState: true,
      leftDrawerOpen: false,
      locale: this.$q.lang.isoName
    };
  },
  methods: {
    openURL,
    trigger() {
      const bar = this.$refs.bar;

      bar.start();

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop();
        }
      }, Math.random() * 3000 + 1000);
    },
    drawerClick(e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false;

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.mini-slot {
  transition: background-color 0.28s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.mini-icon {
  font-size: 1.718em;

  & + & {
    margin-top: 18px;
  }
}
</style>
