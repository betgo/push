import { observable } from "mobx";

class AppState
{
    @observable top_menu_links = [
        {text:'首页', link:"/"},
        {text:'sendkey', link:"/sendkey"},
        {text:'第三方应应用', link:"/apps"},
        {text:'意见反馈', link:"/feedback"}
    ]
}

export default new AppState();