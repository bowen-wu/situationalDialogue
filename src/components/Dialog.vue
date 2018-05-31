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
                    <li class="tab" v-for="tab in tabList" @click="selectTab(tab)" :class={{tab.active ? 'active' : ''}}>
                        <div class="img-wrapper">
                            <img :src="tab.theme" alt="" class="icon">
                        </div>
                        <div class="title">{{tab.title}}</div>
                    </li>
                </ul>
            </div>
        </aside>
        <div class="content">
            <div class="header">
                <div class="text">
                    {{dialogue.interlocutor}}
                </div>
                <div class="online"></div>
            </div>
            <div class="container">
                <ul class="paragraph-wrapper">
                    <!-- {{dialogue.messageArr}}{{switchSrc}}{{dialogueContent}} -->
                    <!-- <li class="paragraph" v-for="message in dialogue.messageArr"> -->
                    <li class="paragraph" v-for="message in dialogueContent">
                        <div class="title">{{message.title}}</div>
                        <ul>
                            <li class="message" v-for="contentItem in message.content" :class="contentItem.type === 0 ? 'user' : ''">
                                <div class="avatar-wrapper">
                                    <img :src="contentItem.type === 1 ? dialogue.user : dialogue.person" alt="" class="icon">
                                </div>
                                <div class="text">{{contentItem.msg}}</div>
                                <!-- <div class="switch">
                                <div class="img-wrapper">
                                    <img :src="switchSrc" alt="" class="icon">
                                </div>
                                </div> -->
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      switchSrc: "../assets/img/bottom.png",
      tabList: [
        {
          theme:
            "https://images.unsplash.com/photo-1505492537188-de71a52767cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4bbefaa3c24a65fcf0d20ec3872fe1a&auto=format&fit=crop&w=500&q=60",
          title: "Hotel",
          active: false
        },
        {
          theme:
            "https://images.unsplash.com/photo-1508237866955-4439ca21b062?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c934f134692ab12b0c4c699c17109b6f&auto=format&fit=crop&w=500&q=60",
          title: "ask-the-way",
          active: false
        },
        {
          theme:
            "https://images.unsplash.com/photo-1519095614420-850b5671ac7f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ffaa8c9b9aca319b57204b5d620f56&auto=format&fit=crop&w=500&q=60",
          title: "Tour",
          active: false
        }
      ],
      dialogue: {},
      dialogueContent: []
    };
  },
  created() {
    this.getFileContent(this.tabList[0].title);
  },
  methods: {
    tabStatusInit() {
      this.tabList.forEach(tab => {
        tab.active = false;
      });
    },
    selectTab(tab) {
      this.tabStatusInit();
      tab.active = true;
      this.getFileContent(tab.title);
    },
    getFile() {},
    getFileContent(fileName) {
      //   console.log("fileName", fileName.toLowerCase());
      let xmlHttp = null;
      if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
      }
      if (xmlHttp !== null) {
        xmlHttp.open(
          "get",
          `./static/script/${fileName.toLowerCase()}.txt`,
          true
        );
        xmlHttp.onreadystatechange = () => {
          if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            this.dialogueContent = this.processingData(xmlHttp.responseText);
          }
        };
        xmlHttp.send();
      }
    },
    processingData(data) {
      let arr = [];
      let img = JSON.parse(data.slice(0, data.indexOf("}") + 1).trim());
      let { interlocutor, person, user } = img;
      Object.assign(this.dialogue, {
        interlocutor,
        person,
        user,
        messageArr: []
      });
      let contentArr = data
        .slice(data.indexOf("}") + 1)
        .trim()
        .match(/#[^#]+#/g);
      contentArr.forEach(it => {
        let title = it.match(/#[^-]+-/g)[0].match(/\w.+/g)[0];
        let content = [];
        let messageArr = it.match(/-[^#]+#/g)[0].match(/[-*].*/g);
        messageArr.forEach(message => {
          let type = message.includes("-") ? 0 : 1;
          let msg = message.match(/\w.+/g)[0];
          content.push({ type, msg });
        });
        arr.push({ title, content });
      });
      return arr;
    }
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
  padding: 10px 180px;
  overflow: hidden;
  @include flex(flex-start, flex-start);
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
      margin-bottom: 16px;
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
    max-height: 452px;
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
.content {
  flex: 1;
  background-color: #fafafa;
  border: 1px solid #cccccc;
  height: 100%;
  @include flex(flex-start, flex-start, column);
  .header {
    @include flex(flex-start);
    width: 100%;
    padding: 16px 12px;
    border-bottom: 1px solid #e2e2e2;
    .text {
      @include fontLineColor(16px, 24px, #262d34);
      margin-right: 8px;
    }
    .online {
      border: 4px solid #70d672;
      border-radius: 50%;
    }
  }
  .container {
    padding: 20px 10px;
    width: 100%;
    max-height: 523px;
    .paragraph-wrapper {
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      height: 483px;
      .paragraph {
        .title {
          @include fontLineColor(32px, 36px, #e45050);
          text-align: center;
          padding: 16px 0;
        }
        .message {
          @include flex(flex-start, flex-start);
          margin-bottom: 16px;
          &.user {
            flex-direction: row-reverse;
            .avatar-wrapper {
              margin-left: 10px;
            }
            .text::before {
              left: initial;
              right: -16px;
              border-left-color: #e8e8e8;
              border-right-color: transparent;
            }
          }
          .avatar-wrapper {
            @include widthHeight(34px, 34px);
            margin-right: 10px;
            margin-top: 4px;
          }
          .text {
            @include fontLineColor(16px, 22px, #333);
            padding: 8px 16px 8px 12px;
            background-color: #e8e8e8;
            border-radius: 8px;
            max-width: 540px;
            position: relative;
            &::before {
              content: "";
              display: block;
              border: 8px solid transparent;
              border-right-color: #e8e8e8;
              position: absolute;
              top: 20px;
              left: -16px;
              transform: translateY(-50%);
            }
          }
          .switch {
            margin-top: 12px;
            .img-wrapper {
              @include widthHeight(18px, 18px);
            }
          }
        }
      }
    }
  }
}
</style>
