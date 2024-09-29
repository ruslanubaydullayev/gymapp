<template>
  <div>
    <div class="containter mx-auto px-4">
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <el-button type="primary" @click="routeBack"> Orqaga </el-button>
          <router-link to="/athletes/add">
            <el-button type="success"> Atlet qo'shish </el-button>
          </router-link>
        </div>
        <h5 class="text-2xl mt-4 font-semibold text-center">Barcha atletlar</h5>

        <div class="flex items-center flex-wrap gap-2 mt-3">
          <el-input v-model="form.name" placeholder="Ismni yozing" />

<!--          <el-select-->
<!--            v-model="form.gender"-->
<!--            placeholder="Jinsi"-->
<!--            size="default"-->
<!--            style="width: 240px"-->
<!--            class="!w-full"-->
<!--          >-->
<!--            <el-option-->
<!--              v-for="item in gender"-->
<!--              :key="item.value"-->
<!--              :value="item.name"-->
<!--            />-->
<!--          </el-select>-->

          <el-checkbox
            v-model="form.lend"
            label="Qarzdorligi bor"
            value="Value 1"
          />
        </div>

        <el-table
          class="!mt-3"
          :data="athletesTable"
          stripe
          style="width: 100%"
        >
          <el-table-column width="80" prop="price" label="Amallar">
            <template #default="scope">
              <span @click.prevent="handleEdit(scope.$index)">
                <el-icon><View /></el-icon>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Ismi" width="200" />

          <el-table-column prop="coachAvailable" label="Trener+" width="100">
            <template #default="scope">
              <el-tag
                :type="scope.row.coachAvailable === true ? 'primary' : 'danger'"
                disable-transitions
                ><span v-if="scope.row.coachAvailable">Trenerli</span>
                <span v-else>O'zi</span></el-tag
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="phoneNumber"
            label="Telefon raqam"
            sortable
            width="160"
          >
            <template #default="scope">
              <a
                v-if="scope.row.phoneNumber"
                target="_blank"
                :href="`tel:${scope.row.phoneNumber}`"
                >{{ scope.row.phoneNumber }}</a
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="telegramUsername"
            label="Tg akkount"
            sortable
            width="130"
          >
            <template #default="scope">
              <a
                v-if="scope.row.telegramUsername"
                target="_blank"
                :href="`https://t.me/${scope.row.telegramUsername}`"
                ><el-icon size="large" color="#409EFF"><Promotion /></el-icon
              ></a>
            </template>
          </el-table-column>
          <el-table-column
            prop="balance"
            label="Balansi"
            sortable
            width="110"
          />
        </el-table>

        <div class="flex items-center justify-center my-4">
          <el-button type="primary">Yana yuklash</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = ref({
  name: '',
  gender: '',
  lend: false,
})

function routeBack() {
  router.push('/')
}

const handleEdit = (index: number) => {
  router.push('/athletes/' + index)
}

const gender = [
  {
    name: 'Erkaklar',
    value: 1,
  },
  {
    name: 'Ayollar',
    value: 2,
  },
]

const athletesTable = [
  {
    id: 1,
    name: 'Aziz Rahimov',
    telegramUsername: 'arahimov',
    phoneNumber: '+998903209751',
    coachAvailable: true,
    balance: 150000,
  },
  {
    id: 2,
    name: 'Laziz Rahimov',
    telegramUsername: 'lazizrahimov',
    phoneNumber: '+998997068992',
    coachAvailable: false,
    balance: -200000,
  },
]
</script>
