<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <div class="q-pa-md">
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Breadcrumbs" />
          </q-breadcrumbs>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <template v-slot:mini>
        <q-scroll-area class="fit mini-slot cursor-pointer">
          <div class="q-py-lg">
            <div class="column items-center">
              <q-icon name="inbox" color="blue" class="mini-icon" />
              <q-icon name="star" color="orange" class="mini-icon" />
              <q-icon name="send" color="purple" class="mini-icon" />
              <q-icon name="drafts" color="teal" class="mini-icon" />
            </div>
          </div>
        </q-scroll-area>
      </template>

      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section>Inbox</q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section>Star</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Send</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Drafts</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
      -->
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn dense round unelevated color="accent" icon="chevron_left" @click="miniState = true" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="q-pa-md">
      <q-ajax-bar ref="bar" position="bottom" color="accent" size="5px" skip-hijack />
    </div>
  </q-layout>
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
