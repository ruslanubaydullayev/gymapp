<template>
  <div>
    <div class="containter mx-auto px-4">
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <el-button type="primary" @click="routeBack"> Orqaga </el-button>
        </div>
        <h5 class="text-2xl mt-4 font-semibold text-center">Atlet qo'shish</h5>
        <el-input
          v-model="form.fullName"
          placeholder="To'liq ismni kiriting"
          class="mt-2"
        />

        <el-radio-group v-model="form.allDay">
          <el-radio value="true" size="large">Har kuni</el-radio>
          <el-radio value="false" size="large">Kun ora</el-radio>
        </el-radio-group>

        <el-radio-group v-model="form.coachRequired">
          <el-radio value="true" size="large">Trenerli</el-radio>
          <el-radio value="false" size="large">Trenersiz</el-radio>
        </el-radio-group>

        <el-input
          v-model="form.phoneNumber"
          type="number"
          placeholder="Telefon raqamni kiriting"
          class="mt-2"
        />

        <el-input
          v-model="form.telegramUsername"
          type="text"
          placeholder="Telegram username"
          class="mt-2"
        />


        <el-switch
          v-model="form.prePayment"
          class="my-2"
          active-text="Oldindan to'lov"
          inactive-text="Oldindan to'lovsiz"
        />

        <el-input
          v-if="form.prePayment"
          v-model="form.prePaymentAmount"
          type="number"
          placeholder="Miqdorni kiriting"
          class="mt-2"
        />

        <el-switch
          v-model="form.startLater"
          class="my-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #409eff"
          inactive-text="Bugundan boshlaydi"
          active-text="Keyinroq boshlaydi"
        />

        <el-date-picker
          v-if="form.startLater"
          v-model="form.startDate"
          type="date"
          size="default"
          placeholder="Kunni tanlang"
          class="!w-full"
        />

        <div class="flex items-center justify-center my-4">
          <el-button type="primary">Qo'shish</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = ref({
  fullName: '',
  coachRequired: '',
  phoneNumber: '',
  telegramUsername: '',
  allDay: '',
  prePayment: false,
  prePaymentAmount: '',
  startLater: false,
  startDate: '',
})

function routeBack() {
  router.back()
}
</script>
