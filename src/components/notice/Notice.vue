<template>
  <div :class="['notification', { opacity: layout.isMobile }]">
    <div class="notification-inner">
      <div class="notification-icon">
        <span class="icon-inner">
          <span style="vertical-align: inherit">
            <span style="vertical-align: inherit">🎉</span>
          </span>
        </span>
      </div>
      <span class="notification-title"
        ><span>
          <span
            >🎉Parabéns
            <span class="name">
              {{ `${grandPrize?.username}` }}
            </span>
            🎉
          </span>
        </span>
      </span>
      <span class="notification-subtitle"
        ><span>
          <span
            >{{ `Ganhou o grande prêmio em${grandPrize?.gameName}` }}
            <money :value="grandPrize?.winAmount"></money>
            {{
              `${
                grandPrize
                  ? webConfig.currencyMap[grandPrize.currenyId]?.name
                  : ''
              }`
            }}
          </span>
        </span>
      </span>
    </div>
    <button class="btn-close" @click="myClick()">
      <span style="vertical-align: inherit">
        <span style="vertical-align: inherit">×</span>
      </span>
    </button>
  </div>
</template>
<script lang="ts">
import dataCenter from '@/dataCenter';
import { GrandPrize } from '@/dataCenter/protocol';
import { defineComponent } from 'vue';
import Money from '../Money.vue';

export default defineComponent({
  data() {
    return {
      layout: dataCenter.layout,
      webConfig: dataCenter.webConfig,
    };
  },
  methods: {
    myClick() {
      if (this.close) {
        this.close();
      }
    },
  },
  components: { Money },
  props: {
    close: {
      type: Function,
      require: true,
    },
    grandPrize: {
      type: Object as () => GrandPrize,
    },
  },
});
</script>

<style scoped>
.notification {
  background-color: #212d3f;
  border-radius: 14px;
  box-shadow: 0 8px 16px #0d131ca3;
  overflow: hidden;
  transition: background-color 0.3s;
  width: 100%;
}
.opacity {
  opacity: 0.8;
}
.notification:hover {
  background-color: #253246;
}
.notification:hover:before {
  transform: translate(0);
}
.notification:before {
  background: linear-gradient(
    90deg,
    #161f2c00 -9.17%,
    #0a58c63d 22.38%,
    #161f2c00 108.29%
  );
  bottom: 0;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-100%);
  transition: transform 0.3s;
  width: 100%;
}
.notification {
  cursor: pointer;
}
.notification-inner {
  display: grid;
  grid-template-columns: 56px 1fr;
  grid-column-gap: 15px;
  margin-right: 45px;
  padding: 10px 0 10px 10px;
  text-decoration: none;
}
.notification-icon {
  align-items: center;
  align-self: center;
  display: flex;
  grid-column: 1/2;
  grid-row: 1/3;
  height: 56px;
  justify-content: center;
  justify-self: center;
  position: relative;
  width: 56px;
}
.icon-inner {
  background-color: #0d131c;
  border: none;
  border-radius: 50%;
  display: block;
  font-size: 24px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: 44px;
}
.notification-subtitle,
.notification-title {
  align-self: center;
  font-weight: 500;
  grid-column: 2/3;
  margin: 0;
}
.notification-title {
  color: #2283f6;
  font-size: 14px;
  grid-row: 1/2;
}
.notification-subtitle {
  color: #838fac;
  font-size: 11px;
  grid-row: 2/3;
}

.btn-close {
  background-color: transparent;
  border: none;
  color: #788aa8;
  font-size: 30px;
  font-weight: 500;
  height: 45px;
  line-height: 45px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 15px;
  transition: color 0.3s;
  width: 45px;
}
.btn-close:hover {
  color: #fff;
}
.name {
  color: #ffc51c;
  font-weight: 800;
}
</style>
