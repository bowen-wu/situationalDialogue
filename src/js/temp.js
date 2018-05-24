{
    let view = {
        el: '',
        template: '',
        init() { // 初始化

        },   
        render(data = {}) { // 初始 render

        }, 
        create(data) { // 创建新的项
            console.log(data)
        }, 
        update(data) { // 局部更新视图

        }, 
        // 切换状态函数
        active() { // 激活，添加 active 类

        },
        deactive() { // 移除激活，移除 active 类

        },
    }
    let model = {
        data: {},
        init() { // 初始化

        }, 
        create(data) { // 创建数据 ==> 更新 data
            console.log(data)
        },
        update(data) { // 编辑数据 ==> 更新 data
            console.log(data)
        },
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.view.init()
            this.model.init()
            this.view.render(this.model.data)
            this.bindEvents()
            this.bindEventhub()
        },
        bindEvents(){

        },
        bindEventHub() {
            window.eventHub.on('', (data) => {
                console.log(data)
            })
        },
    }
    controller.init(view, model)
}