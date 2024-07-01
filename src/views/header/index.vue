<template>
  <div>
    <div class="header">
      <div class="left-header">
        <img class="left-logo" src="@/assets/logo.jpg" />
        <div class="left-title">
          <div class="title-one">TEBU SHEJI</div>
          <div class="title-two">PROTOCO LLDKK</div>
        </div>
      </div>
      <div class="right-header">
        <div class="share">
          <img class="share-img" src="@/assets/share.png" />
        </div>
        <div class="login-back">
          <div class="login">login</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="less">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  .left-header {
    display: flex;
    flex-direction: row;
    .left-logo {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .left-title {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      .title-one {
        color: white;
      }
      .title-two {
        color: #662eca;
      }
    }
  }
  .right-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .share {
      width: 15px;
      height: 15px;
      padding: 10px;
      .share-img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      width: 90px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 2px solid transparent; /* 设置透明实际边框颜色 */
      border-image: linear-gradient(180deg, #62a9ea 0%, #c941ff 100%) 1; /* 渐变色边框 */
      border-radius: 11px; /* 设置圆角 */
      color: white;
    }
  }
}
</style>
