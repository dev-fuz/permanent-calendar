<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      location="bottom"
      temporary
  >
  
  <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :title="item.title"
      >

      </v-list-item>
  </v-list>
 
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Doa',
          value: 'doa',
          to: '/doa',
        },
        {
          title: 'Hadith',
          value: 'hadith',
          to: '/hadith',
        },
        // {
        //   title: 'About',
        //   value: 'about',
        //   to: '/about',
        // },
        // {
        //   title: 'Contact',
        //   value: 'contact',
        //   to: '/contact',
        // },
        // {
        //   title: 'Settings',
        //   value: 'settings',
        //   to: '/settings',
        // },
      ],
    }),

    watch: {
      group() {
        this.drawer = false
      },
    },
}
</script>
