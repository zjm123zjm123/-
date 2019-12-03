let Mock = require("mockjs")

let data =Mock.mock({
    "list|4":[{
        "nav|+1":["全部任务","进行中的任务","强制终止的任务","应完成的任务"],
        "content|4":[{
            "id|+1":1,
            img:"@image(70x70,@color())",
            name:"@cname()",
            txt:"@ctitle()",
            xing:"5星星",
            work:"日常工作"
        }]
    }]
})

module.exports={data}