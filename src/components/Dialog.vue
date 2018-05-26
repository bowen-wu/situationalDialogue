<template>
  <div class="dialog">
    <aside>
        <div class="info">
            <div class="user">
                <div class="avatar-wrapper">
                    <img src="../assets/img/avatar.jpg" alt="" class="avatar icon">
                </div>
                <div class="name">Jack</div>
            </div>
            <div class="search">
                <input type="text" class="search-input" placeholder="search topic">
                <div class="search-icon-wrapper">
                    <img src="../assets/img/search.png" alt="" class="icon">
                </div>
            </div>
        </div>
        <div class="tabList">
            <ul class="tab-wrapper">
                <li class="tab" v-for="tab in tabList">
                    <div class="img-wrapper">
                        <img :src="tab.imgSrc" alt="" class="icon">
                    </div>
                    <div class="title">{{tab.title}}</div>
                </li>
            </ul>
        </div>
    </aside>
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      tabList: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "酒店"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "啦啦啦"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=500&q=60",
          title: "next"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/css/reset.scss";
@mixin flex($justifyContent: center, $alignItems: center, $direction: row) {
  display: flex;
  justify-content: $justifyContent;
  align-items: $alignItems;
  flex-direction: $direction;
}
@mixin fontLineColor($fontSize: 16px, $lineHeight: 20px, $color: #666) {
  font-size: $fontSize;
  line-height: $lineHeight;
  color: $color;
}
@mixin widthHeight($width: 100%, $height: 100%) {
  width: $width;
  height: $height;
}
@mixin textOverflow($maxWidth) {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: $maxWidth;
}
img.icon {
  @include widthHeight();
  vertical-align: top;
}

.dialog {
  width: 100vw;
  height: 600px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 80px;
  overflow: hidden;
  @include flex(flex-start, center);
}
aside {
  @include flex(center, flex-start, column);
  height: 100%;
  .info {
    @include flex(center, flex-start, column);
    padding: 20px 10px;
    background-color: #e45050;
    .user {
      @include flex(flex-start, center);
      margin-bottom: 10px;
      .avatar-wrapper {
        @include widthHeight(54px, 54px);
        margin-right: 8px;
        border: 2px solid #fff;
        border-radius: 50%;
        overflow: hidden;
      }
      .name {
        @include fontLineColor(18px, 28px, #fff);
        @include textOverflow(100px);
      }
    }
    .search {
      position: relative;
      .search-input {
        @include fontLineColor(12px, 16px, #999);
        padding: 6px 35px;
        border-radius: 28px;
        border: none;
        &:focus {
          outline: none;
        }
      }
      .search-icon-wrapper {
        position: absolute;
        top: 7px;
        left: 10px;
        @include widthHeight(14px, 14px);
      }
    }
  }
  .tabList {
    flex: 1;
    width: 100%;
    background-color: #363e47;
    max-height: 428px;
    .tab-wrapper {
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      height: 100%;
      .tab {
        @include flex(flex-start, flex-start);
        cursor: pointer;
        &:hover {
          background-color: #414b55;
        }
        &.active {
          background-color: #2f363e;
        }
        padding: 10px;
        .img-wrapper {
          @include widthHeight(42px, 42px);
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8px;
        }
        .title {
          @include fontLineColor(20px, 26px, #fff);
          @include textOverflow(120px);
        }
      }
    }
  }
}
</style>
