<template>
  <div>
    <div class="containter mx-auto px-4">
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <el-button type="primary" @click="routeBack"> Orqaga </el-button>
        </div>
        <h5 class="text-2xl mt-4 font-semibold text-center">Asosiy Menu</h5>

        <el-progress type="dashboard" :percentage="80" class="mt-5">
          <template #default>
            <span class="percentage-value">140 ta</span>
            <span class="percentage-label">Atletlar</span>
          </template>
        </el-progress>

        <div class="mt-4 flex flex-col gap-3 items-center justify-center">
          <el-statistic title="Oylik daromad (so'm)" :value="monthlySource" />
          <el-statistic title="Kunlik daromad (so'm)" :value="dailySource" />
        </div>
      </div>

      <h4 class="mt-3">Qolgan bildirishnomalar...</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTransition } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function routeBack() {
  router.back()
}

const ms = ref(0)
const monthlySource = useTransition(ms, {
  duration: 1500,
})
ms.value = 17200000

const ds = ref(0)
const dailySource = useTransition(ds, {
  duration: 1500,
})
ds.value = 510000
</script>

<style>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}

:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic__number {
  color: dodgerblue !important;
}
</style>
