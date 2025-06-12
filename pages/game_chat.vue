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
});
</script>

<template>
    <div class="game-chat wrapper">
        <div class="container-fluid">
            <div class="row">
                <!-- 側邊欄 -->
                <div class="col-md-2 aside">
                    <div class="img-group text-center">
                        <!-- logo 圖 -->
                        <a href="/lobby">
                            <img class="img-fluid m-auto aside__logo" alt="Bootstrap Image Preview"
                                src="/assets/images/logo.png" />
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
                                    <input type="text" class="form-control userName" id="userName"
                                        placeholder="NAGUWAZ" />
                                </label>
                                <label for="userMoney" class="aside__member-label">
                                    <a href="#">
                                        <img src="/assets/images/icon_reload.png" alt="">
                                    </a>
                                    <input type="number" class="form-control userMoney" id="userMoney"
                                        placeholder="1,000,000.00 " />
                                </label>
                                <div class="aside__member-btn">
                                    <button type="button" class="form-control btn aside__member-btn-classic">
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
                                    <ul class="nav d-flex flex-nowrap rank__body-tabs" id="rankingTab" role="tablist">
                                        <li class="flex-grow-1 nav-item" role="presentation">
                                            <button class="w-100 nav-link rank__body-tabs-btn active" id="player-tab"
                                                data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"
                                                aria-controls="home" aria-selected="true">
                                                玩家榜
                                            </button>
                                        </li>
                                        <li class="flex-grow-1 nav-item" role="presentation">
                                            <button class="w-100 nav-link rank__body-tabs-btn" id="women-tab"
                                                data-bs-toggle="tab" data-bs-target="#women" type="button" role="tab"
                                                aria-controls="women" aria-selected="false">
                                                荷官榜
                                            </button>
                                        </li>
                                        <li class="flex-grow-1 nav-item" role="presentation">
                                            <button class="w-100 nav-link rank__body-tabs-btn" id="reward-tab"
                                                data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab"
                                                aria-controls="messages" aria-selected="false">
                                                打賞榜
                                            </button>
                                        </li>
                                    </ul>
                                    <div class="d-flex justify-content-around rank__body-badge">
                                        <button
                                            class="btn badge rounded-pill bg-danger p-2 w-25 rank__body-badge__red">日榜</button>
                                        <button
                                            class="btn badge rounded-pill bg-warning p-2 w-25 rank__body-badge__yellow">周榜</button>
                                    </div>

                                    <!-- Tab panes -->
                                    <div class="tab-content d-flex justify-content-center rank__body-contents">
                                        <div class="tab-pane active" id="home" role="tabpanel"
                                            aria-labelledby="player-tab">
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
                                        <div class="tab-pane" id="women" role="tabpanel" aria-labelledby="women-tab">
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
                                        <div class="tab-pane" id="messages" role="tabpanel"
                                            aria-labelledby="reward-tab">
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
                            <div class="d-flex main__header justify-content-between align-items-center">

                                <div class="main__header-toggle">
                                    <a class="main__header-toggle-btn" href="/">
                                        <img src="/assets/images/back_btn.png" alt="" class="img-fluid">
                                    </a>
                                    <p class="main__header-toggle-user">
                                        荷官：LISA
                                    </p>
                                </div>
                                <div class="col-md-4 marquee">
                                    <div class="d-flex marquee-music">
                                        <!-- 聲音 -->
                                        <img class="d-block main__header-music-voice" src="/assets/images/marquee_icon.png"
                                            alt="">
                                        <!-- 跑馬燈 -->
                                        <marquee behavior="scroll" direction="right">
                                            歡迎光臨 / 歡迎光臨 / 歡迎光臨 / 歡迎光臨 / 歡迎光臨 /歡迎光臨 /歡迎光臨 /沒事不要進來，進來請下注才可進來歡迎光臨 /
                                            歡迎光臨 /
                                            歡迎光臨事不要進來，進來請下
                                        </marquee>
                                    </div>
                                </div>
                                <div class="group-btn">
                                    <ul class="d-flex">
                                        <li><a href="#"><img src="/assets/images/life_icon.png" alt=""></a></li>
                                        <li><a href="#"><img src="/assets/images/online_btn.png" alt=""></a></li>
                                        <li><a href="#reportModalToggle" data-bs-toggle="modal"><img
                                                    src="/assets/images/icon_paper.png" alt=""></a></li>
                                        <li><a href="#"><img src="/assets/images/sound_btn.png" alt=""></a></li>
                                        <li><a href="#"><img src="/assets/images/rule_btn.png" alt=""></a></li>
                                        <li><a href="#"><img src="/assets/images/bell_btn.png" alt=""></a></li>
                                        <li><a href="#" onclick="toggleFullScreen(document.body)"><img
                                                    src="/assets/images/screen_btn.png" alt=""></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 main__bet">
                            <div class="main__bet-section">
                                <div class="main__bet-section-video">
                                    <video id="videoPlayer" class="video-js" controls preload="auto" width="100%"
                                        height="100%" muted="muted" poster="/assets/images/video_img_2.png" data-setup="{}">
                                        <source src="https://live.crazyball.net/app/testaa.flv" type="video/mp4" />
                                        <p class="vjs-no-js">
                                            To view this video please enable JavaScript, and consider upgrading to a
                                            web browser that
                                            <a href="https://videojs.com/html5-video-support/" target="_blank">supports
                                                HTML5 video</a>
                                        </p>
                                    </video>
                                </div>
                                <div class="main__bet-section-info">
                                    <ul>
                                        <li>
                                            <p class="bet-section-info-title">百家樂A01</p>
                                            <p class="bet-section-info-numb"></p>
                                        </li>
                                        <li>
                                            <p class="bet-section-info-title">局號</p>
                                            <p class="bet-section-info-numb">1234567890</p>
                                        </li>
                                        <li>
                                            <p class="bet-section-info-title">餘額</p>
                                            <p class="bet-section-info-numb">1,000,765.00</p>
                                        </li>
                                        <li>
                                            <p class="bet-section-info-title">下注總額</p>
                                            <p class="bet-section-info-numb">1,765.00</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="main__bet-section-total bet-total">
                                    <div class="dropdown position-relative">
                                        <img class="bet-total-img" src="/assets/images/2_arrow.png" alt="">
                                        <button class="btn bet-total-btn dropdown-toggle" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            100K~250K
                                            <div class="icon-section">
                                                <i class="bi bi-chevron-up"></i>
                                            </div>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <div class="bet-total-title">
                                                <p>閒</p>
                                                <p>莊</p>
                                            </div>
                                            <div class="bet-total-numb">
                                                <p>3345123/456 </p>
                                                <p>3345123/456 </p>
                                            </div>
                                            <div class="bet-total-binfo">
                                                <dl>
                                                    <dt>和</dt>
                                                    <dd>120890/120</dd>
                                                    <dt>閒對</dt>
                                                    <dd>2890/120</dd>
                                                    <dt>小</dt>
                                                    <dd>0/0</dd>
                                                    <dt>閒龍寶</dt>
                                                    <dd>590/4</dd>
                                                    <dt>任意對子</dt>
                                                    <dd>48/1</dd>
                                                </dl>
                                                <dl>
                                                    <dt>幸運6</dt>
                                                    <dd>13890/100</dd>
                                                    <dt>莊對</dt>
                                                    <dd>10335/58</dd>
                                                    <dt>大</dt>
                                                    <dd>0/0</dd>
                                                    <dt>莊龍寶</dt>
                                                    <dd>995/9</dd>
                                                    <dt>完美對子</dt>
                                                    <dd>768/4</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__bet-section-result play-result">
                                    <h3>VS</h3>
                                    <div class="play-result-info">
                                        閒家贏
                                    </div>
                                    <div class="play-result-content">
                                        <dl>
                                            <dt>
                                                <p>閒</p>
                                                <p>6</p>
                                            </dt>
                                            <dd>
                                                <div class="Poker"><img src="/assets/images/a_13.png" alt=""></div>
                                                <div class="Poker"><img src="/assets/images/a_12.png" alt=""></div>
                                                <div class="Poker"><img src="/assets/images/a_11.png" alt=""></div>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <p>莊</p>
                                                <p>1</p>
                                            </dt>
                                            <dd>
                                                <div class="Poker"><img src="/assets/images/a_01.png" alt=""></div>
                                                <div class="Poker"><img src="/assets/images/b_01.png" alt=""></div>
                                                <div class="Poker"><img src="/assets/images/c_01.png" alt=""></div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="main__bet-section-pageLoading play-pageLoading">
                                    <img src="/assets/images/play_poker.png" alt="">
                                </div>
                                <div class="main__bet-section-pageLoading play-pageLoading2">
                                    <img src="/assets/images/play_bet.png" alt="">
                                </div>
                                <div class="main__bet-section-pageLoading play-counter">
                                    <img src="/assets/images/time_bg.png" alt="">
                                    <p class="play-numb">15</p>
                                </div>
                                <div class="col-md-12 main__panel">
                                    <div class="main__panel-switch">
                                        <div class="switch">
                                            <div class="switch-section">
                                                <p>免傭</p>
                                                <input type="checkbox" id="switch" />
                                                <label for="switch"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main__panel-btns">
                                        <div class="h-100 d-flex justify-content-center align-items-center">
                                            <div class="btn rounded-pill" @onClick="dispalyResult('.play-pageLoading2');">
                                                <i class="fa-solid fa-xmark"></i>
                                            </div>
                                            <div class="btn rounded-pill" @onClick="dispalyResult('.play-pageLoading');">
                                                <i class="fa-solid fa-xmark"></i>2
                                            </div>
                                            <div class="btn rounded-pill" @onClick="dispalyResult('.play-result');">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main__panel-chips">
                                        <div class="chips">
                                            <ul>
                                                <li class="chips-bet">
                                                    <a href="#" alt="200">200</a>
                                                </li>
                                                <li class="chips-bet">
                                                    <a href="#" alt="300">300</a>
                                                </li>
                                                <li class="chips-bet">
                                                    <a href="#" alt="500">500</a>
                                                </li>
                                                <li class="chips-bet">
                                                    <a href="#" alt="1000">1K</a>
                                                </li>
                                                <li class="chips-bet">
                                                    <a href="#" alt="2000">2K</a>
                                                </li>
                                                <li class="chips_setting">
                                                    <a href="#">+</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="main__panel-road--1">
                                        <div class="bet-container">
                                            <ul class="box">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="options">
                                        <div class="bet-section options--blue-1">
                                            <p class="big-text">閒</p>
                                            <div class="proportion">1:1</div>
                                            <div class="info">6點贏一半</div>
                                            <div class="numb-Denominator">10000/50</div>
                                        </div>
                                        <div class="bet-section options--blue-2">
                                            <p class="normal-text">閒對</p>
                                            <div class="proportion">1:5</div>
                                            <div class="info d-none">6點贏一半</div>
                                        </div>
                                        <div class="bet-section options--blue-3">
                                            <p class="normal-text">任意對子</p>
                                            <div class="proportion">1:5</div>
                                            <div class="info d-none">6點贏一半</div>
                                        </div>
                                        <div class="bet-section options--green-1">
                                            <p class="big-text">和</p>
                                            <div class="proportion">1:1</div>
                                            <div class="info">6點贏一半</div>
                                            <div class="numb-Denominator">10000/50</div>
                                        </div>
                                        <div class="bet-section options--yellow-1">
                                            <p class="normal-text">幸運6</p>
                                            <div class="proportion">1:12/1:18</div>
                                            <div class="info d-none">6點贏一半</div>
                                        </div>
                                        <div class="bet-section options--red-1">
                                            <p class="big-text">莊</p>
                                            <div class="proportion">1:1</div>
                                            <div class="info">6點贏一半</div>
                                            <div class="numb-Denominator">10000/50</div>
                                        </div>
                                        <div class="bet-section options--red-2">
                                            <p class="normal-text">完美對子</p>
                                            <div class="proportion">1:25</div>
                                            <div class="info d-none">6點贏一半</div>
                                        </div>
                                        <div class="bet-section options--red-3">
                                            <p class="normal-text">莊對</p>
                                            <div class="proportion">1:5</div>
                                            <div class="info d-none">6點贏一半</div>
                                        </div>

                                    </div>
                                    <div class="main__panel-road--2">
                                        <div class="bet-container">
                                            <ul class="box2">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="main__panel-chat">
                                        <div class="chatBar">
                                            <ul>
                                                <li>
                                                    <a href=""><img src="/assets/images/chat_btn.png" alt=""
                                                            class="img-fluid"></a>
                                                </li>
                                                <li>
                                                    <a href=""><img src="/assets/images/gift.png" alt="" class="img-fluid"></a>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon_hash.png" alt=""
                                                        class="img-fluid"><span>0</span>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon_green_o.png" alt=""
                                                        class="img-fluid"><span>0</span>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon_red_o.png" alt=""
                                                        class="img-fluid"><span>0</span>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon_blue_o.png" alt=""
                                                        class="img-fluid"><span>0</span>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon_red_s.png" alt=""
                                                        class="img-fluid"><span>0</span>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon_blue_s.png" alt=""
                                                        class="img-fluid"><span>0</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="main__panel-binfo">
                                        <div class="binfo">
                                            <ul>
                                                <li><a href="">莊</a></li>
                                                <li><a href=""><img src="/assets/images/btn_bloueooo.png" alt=""
                                                            class="img-fluid"></a></li>
                                                <li><a href=""><img src="/assets/images/btn_redlcircle.png" alt=""
                                                            class="img-fluid"></a>
                                                </li>
                                                <li><a href=""><img src="/assets/images/btn_red_line.png" alt=""
                                                            class="img-fluid"></a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="">閒</a></li>
                                                <li><a href=""><img src="/assets/images/icon_red_o.png" alt=""
                                                            class="img-fluid"></a></li>
                                                <li><a href=""><img src="/assets/images/btn_bluecircle.png" alt=""
                                                            class="img-fluid"></a>
                                                </li>
                                                <li><a href=""><img src="/assets/images/btn_blue_line.png" alt=""
                                                            class="img-fluid"></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main__bet-section-content">
                        <!-- 側邊切換按鈕群組 -->
                        <div class="main__bet-section-content-group-button">
                            <div class="main__bet-section-content-group-button-switch">
                                <a href="#">切換</a>
                            </div>
                            <div class="main__bet-section-content-group-button-adjust">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="/assets/images/plus_btn.png" class="img-fluid rounded-top" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <img src="/assets/images/line.png" class="img-fluid rounded-top" alt="" />
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/assets/images/minus_btn.png" class="img-fluid rounded-top" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- 頭部切換按鈕群組 -->
                        <div class="main__bet-section-content-function">
                            <div class="main__bet-section-content-function-group">
                                <div class="main__bet-section-content-function-group-btn">
                                    <a href="#" class="main__bet-section-content-function-group-btn-color">全路</a>
                                    <a href="#" class="main__bet-section-content-function-group-btn-color">大路</a>
                                    <a href="#"
                                        class="main__bet-section-content-function-group-btn-color btn-active">下三路</a>
                                </div>
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
                                <div class="main__bet-section-content-function-group-btn-return">
                                    <img src="/assets/images/icon_reload.png" alt="">
                                </div>

                            </div>
                            <div class="main__bet-section-content-function-group-tables">
                                <ul class="scrollbar">
                                    <li><img src="/assets/images/test_img (2).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                    <li><img src="/assets/images/test_img (1).png" alt="" class="img-fluid"></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
