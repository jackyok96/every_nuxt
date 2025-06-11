<script setup lang="ts">
useHead({
  title: "百家樂",
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css",
    },
  ],
  script: [
    {
      type: "text/javascript",
      src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.bundle.min.js",
    },
    {
      type: "text/javascript",
      src: "/js/my_fun.js",
    },
  ],
});

onMounted(() => {
  const loginSelectCustom = document.querySelector(".login__select-custom");
  const selected = loginSelectCustom.querySelector(".selected");
  const options = loginSelectCustom.querySelector(".options");
  const hiddenInput = loginSelectCustom.querySelector(".sumbit_value");
  const password_eye = document.querySelector('.login__member-password-eye');
  const password_code = document.querySelector('.login__member-password-code');

  // 切換下拉選單顯示/隱藏
  selected.addEventListener("click", function (e) {
    e.stopPropagation();
    options.classList.toggle("active");
  });

  // 點選選項，更新畫面與隱藏欄位
  const optionItems = options.querySelectorAll("li");
  optionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const img = item.querySelector("img").src;
      const text = item.textContent.trim();
      const value = item.dataset.value;

      selected.querySelector("img").src = img;
      selected.querySelector("span").textContent = text;
      hiddenInput.value = value;

      options.classList.remove("active");
    });
  });

  // 點擊外部時關閉選單
  document.addEventListener("click", function () {
    options.classList.remove("active");
  });

  //點擊圖片換圖
  password_eye.onclick = () => {
    let mySrc = password_eye.getAttribute('src');
    if (mySrc == "/assets/images/eye_op.png") {
      password_eye.setAttribute('src', '/assets/images/eye_ed.png');
      password_code.setAttribute('type', 'password');
    } else {
      password_eye.setAttribute('src', '/assets/images/eye_op.png');
      password_code.setAttribute('type', 'text');
    }
  }
});
</script>

<template>
  <div class="wrapper">
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
              <button class="btn login__member-btn" onclick="javascript:location.href='lobby.html'">登入</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
