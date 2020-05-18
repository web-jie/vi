<template>
  <vi-container class="component-page">
    <vi-aside class="component-page__aside">
      <div style="color: #000">
        <h2 class="title">开发指南</h2>
        <vi-menu v-model="menu">
          <vi-menu-item v-for="(route, index) in guideList" :key="index"
                        :name="route.name" :to="route">{{route.meta.name}}</vi-menu-item>
        </vi-menu>
      </div>

      <div style="color: #000">
        <h2 class="title">组件</h2>
        <vi-menu v-model="menu">
          <vi-menu-group v-for="(item, index) in groupList" :key="index" :title="item.title">
            <vi-menu-item :name="c.name" v-for="(c, i) in item.children" :key="i" :to="c">
              {{c.meta.name}}
            </vi-menu-item>
          </vi-menu-group>
        </vi-menu>
      </div>

      <div style="color: #000">
        <h2 class="title">Prototype</h2>
        <vi-menu v-model="menu">
          <vi-menu-item v-for="(route, index) in prototypeList" :key="index"
                        :name="route.name" :to="route">{{route.meta.name}}</vi-menu-item>
        </vi-menu>
      </div>

      <div style="color: #000">
        <h2 class="title">plugins</h2>
        <vi-menu v-model="menu">
          <vi-menu-item v-for="(route, index) in pluginsList" :key="index"
                        :name="route.name" :to="route">{{route.meta.name}}</vi-menu-item>
        </vi-menu>
      </div>

    </vi-aside>
    <vi-main class="component-page__body" ref="page-body">
      <router-view></router-view>
    </vi-main>
  </vi-container>
</template>

<script>
import { groupList, guideList, prototypeList, pluginsList } from '@/router'
export default {
  name: 'component-page',
  components: {
  },
  data () {
    return {
      menu: this.$route.name,
      guideList,
      groupList,
      prototypeList,
      pluginsList
    }
  },
  watch: {
    '$route'() {
      this.$refs['page-body'].$el.scrollTop = 0
    }
  },
  methods: {
    toggleRouter () {
      this.router = !this.router
    }
  }
}
</script>

<style lang="scss">
.component-page {
  height: 100%;
  overflow-x: auto;
  color: #a6a9ad;
  &::-webkit-scrollbar {
    height: 14px;
  }
  &__aside {
    overflow: auto;
    padding: 50px 15px 90px 0;
    box-sizing: border-box;
    min-width: 230px;
    color: rgba(0, 0, 0, 0);
    transition: all .3s;
    &:hover {
      color: rgba(0, 0, 0, 0.2);
    }
    .title {
      padding: 15px 20px;
      font-weight: bold;
    }
  }
  &__body {
    position: relative;
    flex: 1;
    padding: 50px 30px 90px 40px;
    box-sizing: border-box;
    overflow-y: auto;
    color: rgba(0, 0, 0, 0);
    transition: all .3s;
    min-width: 890px;
    &::-webkit-scrollbar {
      width: 7px;
      height: 4px;
    }
    &:hover {
      color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
