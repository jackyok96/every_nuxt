<script setup lang="ts">
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
  <!-- 大廳區 -->
  <div class="lobby wrapper">
    <div class="container-fluid">
      <div class="row">
        <!-- 側邊欄 -->
        <div class="col-md-2 aside">
          <div class="img-group text-center">
            <!-- logo 圖 -->
            <a href="/lobby">
              <img class="img-fluid m-auto aside__logo" alt="Bootstrap Image Preview" src="/assets/images/logo.png" />
            </a>
            <!-- 人像圖 -->
            <div class="user-img">
              <img class="img-fluid m-auto aside__user" src="/assets/images/people_pic01.png" alt="" />
            </div>
          </div>
          <!-- 登入區 -->
          <div class="row">
            <div class="col-md-12">
              <div class="form-group aside__member">
                <label for="userName" class="aside__member-label">
                  <a href="#">
                    <img src="/assets/images/icon_name.png" alt="">
                  </a>
                  <input type="text" class="form-control userName" id="userName" placeholder="NAGUWAZ" />
                </label>
                <label for="userMoney" class="aside__member-label">
                  <a href="#">
                    <img src="/assets/images/icon_reload.png" alt="">
                  </a>
                  <input type="number" class="form-control userMoney" id="userMoney" placeholder="1,000,000.00 " />
                </label>
                <div class="aside__member-btn">
                  <button type="button" class="form-control btn aside__member-btn-classic"
                    onclick="location.href='/game_chat'">
                    經典廳
                  </button>
                  <button type="button" class="form-control btn aside__member-btn-multiple">
                    多桌廳
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="rank d-none d-md-block">
                <!-- 排行榜 -->
                <div class="rank__image d-flex justify-content-center pb-4">
                  <img alt="Bootstrap Image Preview" src="/assets/images/cup.png" />
                </div>
                <!-- Nav tabs -->
                <div class="rank__body">
                  <ul class="nav d-flex flex-nowrap rank__body-tabs" id="myTab" role="tablist">
                    <li class="flex-grow-1 nav-item" role="presentation">
                      <button class="w-100 nav-link rank__body-tabs-btn active" id="home-tab" data-bs-toggle="tab"
                        data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        玩家榜
                      </button>
                    </li>
                    <li class="flex-grow-1 nav-item" role="presentation">
                      <button class="w-100 nav-link rank__body-tabs-btn" id="profile-tab" data-bs-toggle="tab"
                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                        aria-selected="false">
                        荷官榜
                      </button>
                    </li>
                    <li class="flex-grow-1 nav-item" role="presentation">
                      <button class="w-100 nav-link rank__body-tabs-btn" id="messages-tab" data-bs-toggle="tab"
                        data-bs-target="#messages" type="button" role="tab" aria-controls="messages"
                        aria-selected="false">
                        打賞榜
                      </button>
                    </li>
                  </ul>
                  <div class="d-flex justify-content-around rank__body-badge">
                    <button class="btn badge rounded-pill bg-danger p-2 w-25 rank__body-badge__red">日榜</button>
                    <button class="btn badge rounded-pill bg-warning p-2 w-25 rank__body-badge__yellow">周榜</button>
                  </div>

                  <!-- Tab panes -->
                  <div class="tab-content d-flex justify-content-center rank__body-contents">
                    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <ul class="scrollbar">
                        <li>
                          <div class="rank__body-contents__numb">1</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup01.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">2</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup02.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">3</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup03.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">4</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">5</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">6</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <ul class="scrollbar">
                        <li>
                          <div class="rank__body-contents__numb">1</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup01.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">2</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup02.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">3</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup03.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">4</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">5</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">6</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                      <ul class="scrollbar">
                        <li>
                          <div class="rank__body-contents__numb">1</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup01.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">2</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup02.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">3</div>
                          <div class="rank__body-contents__cup">
                            <img src="/assets/images/cup03.png" alt="">
                          </div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">4</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">5</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                        <li>
                          <div class="rank__body-contents__numb">6</div>
                          <div class="rank__body-contents__info">
                            <div class="rank__body-contents__info-name">***Aarry </div>
                            <div class="rank__body-contents__info-money">
                              1,000,000,000,000.00</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 主選單 -->
        <div class="col-md-10 main">
          <div class="row">
            <div class="col-md-12">
              <div class="row main__header">
                <div class="col-md-12 d-flex justify-content-end main__header-screen-btn">
                  <a class="d-block" href="#" onclick="toggleFullScreen(document.body)">
                    <img src="/assets/images/fullscreen_btn.png" alt="">
                  </a>
                </div>
                <div class="col-md-12 main__header-marquee">
                  <!-- <a class="main__header-marquee-checkbox" href="#">
                                        <img class="img-fluids" src="/assets/images/check_btn.png" alt="">
                                    </a> -->
                  <div class="marquee-switch">
                    <label class="marquee-switch__label">
                      <input type="checkbox" name="" id="" class="marquee-switch__label-checkbox">
                      <span class="marquee-switch__label-btn-box">
                        <span class="btn"></span>
                      </span>
                      <span class="marquee-switch__label-text">
                        <p>桌次</p>
                        <p>好路</p>
                      </span>
                    </label>
                  </div>

                  <div class="main__header-marquee-music d-flex">
                    <!-- 聲音 -->
                    <img class=" main__header-music-voice" src="/assets/images/marquee_icon.png" alt="">
                    <!-- 跑馬燈 -->
                    <marquee behavior="scroll" direction="right">
                      歡迎光臨 / 歡迎光臨 / 歡迎光臨 / 歡迎光臨 / 歡迎光臨 /歡迎光臨 /歡迎光臨 /沒事不要進來，進來請下注才可進來歡迎光臨 /
                      歡迎光臨 /
                      歡迎光臨事不要進來，進來請下
                    </marquee>
                  </div>
                </div>

              </div>
              <div class="row my-3 main__contents">
                <!-- 路珠圖清單 -->
                <div class="col-md-10 history scrollbar">
                  <div class="row row-cols-1 row-cols-lg-2 g-2">
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                    <div class="col">
                      <img class="img-fluid w-100" alt="Bootstrap Image Preview" src="/assets/images/face_pepole.png" />
                    </div>
                  </div>
                </div>
                <!-- 菜單按鈕 -->
                <div class="col-md-2 d-none d-md-block">
                  <ol class="menu">
                    <li class="list-item">
                      <a href="#"><img src="/assets/images/roadsw_btn.png" alt="">
                        <p>切換路圖</p>
                      </a>
                    </li>
                    <li class="list-item">
                      <a href="#"><img src="/assets/images/icon_paper.png" alt="">遊戲報表</a>
                    </li>
                    <li class="list-item">
                      <a href="#"><img src="/assets/images/sound_btn.png" alt="">音量設置</a>
                    </li>
                    <li class="list-item">
                      <a href="#"><img src="/assets/images/languge_btn.png" alt="">語言設置</a>
                    </li>
                    <li class="list-item">
                      <a href="#"><img src="/assets/images/bell_btn.png" alt="">系統公告</a>
                    </li>
                    <li class="list-item">
                      <a href="#"><img src="/assets/images/game_btn.png" alt="">遊戲規則</a>
                    </li>
                    <li class="list-item">
                      <a href="/"><img src="/assets/images/logout_icon.png" alt="">登出</a>
                    </li>
                  </ol>
                  <!-- 聊天室 -->
                  <div class="main__contents-chat-room">
                    <div class="main__contents-chat-room-title d-flex pl-5">
                      <img src="/assets/images/chat.png" class="img-fluid" alt="" />聊天室
                    </div>
                    <div class="main__contents-chat-room-text">
                      <dl class="main__contents-chat-room-text-dl scrollbar">
                        <dt class="d-flex justify-content-between main__contents-chat-room-text-dl-dt">
                          <div class="main__contents-chat-room-text-dl-dt-user">**mamamia：
                          </div>
                          <div class="main__contents-chat-room-text-dl-dt-numb">A01</div>
                        </dt>
                        <dd class="main__contents-chat-room-text-dl-dd-section">
                          Mario say... ?
                        </dd>
                        <dt class="d-flex justify-content-between">
                          <div class="main__contents-chat-room-text-dl-dt-user">**mamamia：
                          </div>
                          <div class="main__contents-chat-room-text-dl-dt-numb">A01</div>
                        </dt>
                        <dd class="main__contents-chat-room-text-dl-dd-section">
                          Mario say... ?
                        </dd>
                        <dt class="d-flex justify-content-between">
                          <div class="main__contents-chat-room-text-dl-dt-user">**mamamia：
                          </div>
                          <div class="main__contents-chat-room-text-dl-dt-numb">A01</div>
                        </dt>
                        <dd class="main__contents-chat-room-text-dl-dd-section">
                          Mario say... ?
                        </dd>
                        <dt class="d-flex justify-content-between">
                          <div class="main__contents-chat-room-text-dl-dt-user">**mamamia：
                          </div>
                          <div class="main__contents-chat-room-text-dl-dt-numb">A01</div>
                        </dt>
                        <dd class="main__contents-chat-room-text-dl-dd-section">
                          Mario say... ?
                        </dd>
                        <dt class="d-flex justify-content-between">
                          <div class="main__contents-chat-room-text-dl-dt-user">**mamamia：
                          </div>
                          <div class="main__contents-chat-room-text-dl-dt-numb">A01</div>
                        </dt>
                        <dd class="main__contents-chat-room-text-dl-dd-section">
                          Mario say... ?
                        </dd>
                      </dl>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
