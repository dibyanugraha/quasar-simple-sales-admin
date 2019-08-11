<template lang="pug">
  .div.q-pa-md
    .div(style="max-width: 600px")
      .q-tabs.q-mb-lg(
        v-model="tab"
        align="justify"
        narrow-indicator)
        .q-tab.text-purple(name="mails" label="Mails")
        .q-tab.text-orange(name="alarms" label="Alarms")

      .div.q-gutter-y-sm
        .q-tab-panels.bg-purple.text-white.text-center(
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="bg-purple text-white text-center")
          .q-tab-panel(name="mails")
            .div.text-h6 Mails
            .p Lorem ipsum dolor sit amet consectetur adipisicing elit.

          .q-tab-panel(name="alarms")
            .div.text-h6 Alarms
            .p Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.

        .q-tab-panels.bg-orange.text-white.text-center(
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade")
          
          .q-tab-panel(name="mails")
            .div.text-h6 Mails
            .p Lorem ipsum dolor sit amet consectetur adipisicing elit.

          .q-tab-panel(name="alarms")
            .div.text-h6 Alarms
            .p Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.

        .q-tab-panels.bg-teal.text-white.text-center(
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down")
          
          .q-tab-panel(name="mails")
            .div.text-h6 Mails
            .p Lorem ipsum dolor sit amet consectetur adipisicing elit.

          .q-tab-panel(name="alarms")
            .div.text-h6 Alarms
            .p Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
</template>
