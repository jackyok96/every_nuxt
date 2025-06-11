<script setup lang="ts">
import { ref } from 'vue'

// 定義型別
interface Language {
  value: string
  text: string
  img: string
}

// 反應式狀態
const isPasswordVisible = ref(false)
const isOptionsActive = ref(false)
const selectedLanguage = ref<Language>({
  value: 'zh',
  text: '繁體中文',
  img: '/assets/images/flag_TW.png'
})

// 表單資料
const formData = ref({
  account: '',
  password: '',
  authCode: '',
  rememberMe: true
})

// 語言選項
const languages: Language[] = [
  {
    value: 'zh',
    text: '繁體中文',
    img: '/assets/images/flag_TW.png'
  },
  {
    value: 'en',
    text: 'English',
    img: '/assets/images/flag_USA.png'
  },
  {
    value: 'jp',
    text: '日本語',
    img: '/assets/images/flag_JP.png'
  }
]

// 方法
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const toggleLanguageOptions = (event: Event) => {
  event.stopPropagation()
  isOptionsActive.value = !isOptionsActive.value
}

const selectLanguage = (lang: Language) => {
  selectedLanguage.value = lang
  isOptionsActive.value = false
}

const handleLogin = () => {
  // 處理登入邏輯
  navigateTo('/lobby')
}

// 監聽外部點擊以關閉下拉選單
onMounted(() => {
  document.addEventListener('click', () => {
    isOptionsActive.value = false
  })
})

// 頁面設定
useHead({
  title: "百家樂",
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css",
    }
  ]
})
</script>

<template>
  <div class="login wrapper">
    <div class="container login">
      <div class="row justify-content-center align-items-center">
        <div class="col col-sm-10 col-md-10 col-lg-6 col-xl-5">
          <div class="login__logo d-flex justify-content-center">
            <img src="/assets/images/logo.png" alt="">
          </div>
          <div class="login__select d-flex justify-content-center">
            <div class="login__select-custom">
              <div class="selected">
                <img src="/assets/images/flag_TW.png" alt="繁中" />
                <span>繁體中文</span>
              </div>
              <ul class="options">
                <li data-value="zh">
                  <img src="/assets/images/flag_TW.png" alt="繁中" />
                  繁體中文
                </li>
                <li data-value="en">
                  <img src="/assets/images/flag_USA.png" alt="EN" />
                  English
                </li>
                <li data-value="jp">
                  <img src="/assets/images/flag_JP.png" alt="日文" />
                  日本語
                </li>
              </ul>
              <!-- 隱藏欄位：實際送出語言值 -->
              <input style="color: #000;" class="sumbit_value" type="hidden" name="lang" value="zh" />
            </div>
          </div>
          <div class="login__member">
            <div class="login__member-account">
              <input type="text" class="form-control login__member-account-code" placeholder="請輸入會員帳號">
              <p class="login__member-account-warning">帳號為必填</p>
            </div>
            <div class="login__member-password">
              <img class="login__member-password-eye" src="/assets/images/eye_ed.png" alt="">
              <input type="password" class="form-control login__member-password-code" placeholder="請輸入密碼">
              <p class="login__member-password-warning">密碼為必填</p>
            </div>
            <div class="login__member-auth">
              <span class="login__member-auth-bg">12345</span>
              <input type="number" class="form-control login__member-auth-code" placeholder="請輸入驗証碼">
              <p class="login__member-auth-warning">驗証碼為必填</p>
            </div>
            <div class="d-flex justify-content-between login__member-password-section">
              <div class="login__member-password_section-rem">
                <label for="remeber" class="text-white">
                  <input type="checkbox" id="remeber" checked>
                  <span>記住密碼</span>
                </label>
              </div>
              <a href="#forgetModalToggle" class="text-decoration-none text-white" data-bs-toggle="modal">忘記密碼</a>
            </div>
            <div class="d-grid">
              <button class="btn login__member-btn" onclick="javascript:location.href='/lobby'">登入</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
