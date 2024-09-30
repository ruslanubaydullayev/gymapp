<template>
  <div>
    <div class="containter mx-auto px-4">
      <div class="flex flex-col gap-3 mt-4">
        <div class="flex items-center justify-between">
          <el-button type="primary" @click="routeBack"> Orqaga </el-button>
        </div>
        <h5 class="text-xl mt-4 font-semibold text-center">
          {{ athlete.fullName }} sahifasi
        </h5>

        <div class="flex items-center justify-between">
          <h4 class="font-semibold text-base text-blue-800">Ismi</h4>
          <el-tag size="default">{{ athlete.fullName }}</el-tag>
        </div>

        <div class="flex items-center justify-between">
          <h4 class="font-semibold text-base text-blue-800">
            A'zo bo'lgan sanasi
          </h4>
          <el-tag size="default">{{ athlete.registeredDate }}</el-tag>
        </div>
        <div class="flex items-center justify-between">
          <h4 class="font-semibold text-base text-blue-800">Trener</h4>
          <el-tag v-if="athlete.coachRequired" type="success" size="default"
            >Trenerli</el-tag
          >
          <el-tag v-else type="danger" size="default">Trenersiz</el-tag>
        </div>
        <div class="flex items-center justify-between">
          <h4 class="font-semibold text-base text-blue-800">Telefon raqam</h4>
          <el-tag size="default"
            ><a :href="`tel:${athlete.phoneNumber}`">{{
              athlete.phoneNumber
            }}</a></el-tag
          >
        </div>

        <div class="flex items-center justify-between">
          <h4 class="font-semibold text-base text-blue-800">
            Shu haftada ishtirok
          </h4>
          <el-tag size="default">{{ athlete.inWeek }}</el-tag>
        </div>

        <div class="flex items-center justify-between">
          <h4 class="font-semibold text-base text-blue-800">
            Shu oyda ishtirok
          </h4>
          <el-tag size="default">{{ athlete.inMonth }}</el-tag>
        </div>

        <div class="flex items-center justify-between">
          <h4 class="font-semibold text-base text-blue-800">Telegram</h4>
          <el-tag size="default"
            ><a target="_blank" :href="`https://t.me/${athlete.tgUsername}`"
              >t.me/{{ athlete.tgUsername }}</a
            ></el-tag
          >
        </div>

        <div class="flex items-center justify-between mt-4">
          <h4 class="font-semibold text-center text-base text-blue-800">
            Zaldan qarzi
          </h4>
          <el-button @click="dialogLendVisible = true" size="small" type="warning"
            >Qo'shish</el-button
          >
        </div>

        <el-dialog
          v-model="dialogLendVisible"
          title="Qarz qo'shish"
          width="350"
        >
          <el-input
            v-model="form.name"
            placeholder="Mahsulotni kiriting"
            class="mt-2"
          />
          <el-input
            v-model="form.amount"
            placeholder="Summani kiriting"
            class="mt-2"
            type="number"
          />
<!--          <el-input-->
<!--            v-model="form.comment"-->
<!--            placeholder="Izoh"-->
<!--            class="mt-2"-->
<!--          />-->
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="dialogLendVisible = false">Bekor qilish</el-button>
              <el-button type="primary" @click="dialogLendVisible = false">
                Tasdiqlash
              </el-button>
            </div>
          </template>
        </el-dialog>

        <div
          v-for="(item, i) in athlete.expenses"
          :key="i"
          class="flex items-center justify-between"
        >
          <div class="flex items-center justify-start gap-2">
            <el-tag size="small">{{ item.price }} -> {{ item.name }}</el-tag>
            <el-tag size="small">{{ item.createdAt }}</el-tag>
          </div>
          <!--          <el-button plain type="success" size="small">To'ladi</el-button>-->
          <el-button type="success" :icon="Check" circle />
        </div>

        <div class="flex items-center justify-center">
          <h4 class="font-semibold text-center text-base text-blue-800">
            Balans tarixi
          </h4>
        </div>

        <el-collapse v-model="activePaymentItem">
          <el-collapse-item
            v-for="(item, i) in athlete.balanceHistory"
            :key="i"
            :title="`${item.amount} so'm`"
            :name="item.id"
          >
            <div class="flex items-center justify-between gap-3">
              <el-tag type="success">{{ item.createdAt }}</el-tag>
              <el-tag type="warning" size="default">{{ item.comment }}</el-tag>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const form = ref({
  name: '',
  amount: '',
  comment: ''
})

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const dialogLendVisible = ref(false)

import { Check } from '@element-plus/icons-vue'

const router = useRouter()
function routeBack() {
  router.back()
}

const activePaymentItem = ref(['1'])

const athlete = {
  fullName: 'Aziz Rahimov',
  registeredDate: '10.05.2024',
  coachRequired: true,
  phoneNumber: '+998903209751',
  tgUsername: 'arahimov',
  inWeek: 3,
  inMonth: 20,
  expenses: [
    {
      name: 'Bezgaz 1.5L',
      price: 6000,
      createdAt: '10.10.24 12:10',
    },
    {
      name: 'Moxito',
      price: 12000,
      createdAt: '10.10.24 12:10',
    },
    {
      name: 'Bezgaz 0.5L',
      price: 3000,
      createdAt: '10.10.24 12:10',
    },
  ],
  balanceHistory: [
    {
      id: 1,
      amount: 120000,
      createdAt: '15.05.2024, 21:00',
      comment: 'Sentabr oyi uchun',
    },
    {
      id: 2,
      amount: 1000000,
      createdAt: '05.06.2024, 10:13',
      comment: '5 oy uchun',
    },
  ],
}
</script>

<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}

.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
