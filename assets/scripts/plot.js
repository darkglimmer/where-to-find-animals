//本脚本用于控制剧情流

//控制图片和场景切换，数组中依次为：0左立绘，1右立绘，2背景图，3其他图片, 4场景
var control = {
    2: ['Crazy'],
    3: ['Confused'],
    4: ['Normal'],
    5: ['Smile'],
    6: [,'Worried'],
    7: ['Normal'],
    8: [,'Normal'],
    9: [,'Crazy'],
    10: [,'Angry'],
    12: [,'Confused'],
    13: ['Question'],
    14: ['Realize'],
    15: [,,,,'test']
}
var popControl = {4: 1,10: 2,12: 3}

module.exports={
    story:[
        "甄探@Hello，我是<color=#495A80>甄探</color>，是一名初出茅庐的见习侦探",//0;背景为侦探事务所内部；侦探打招呼，笑容
        "甄探@最近师父有事出差了，留我一个人在事务所里无所事事。",
        "甄探@好无聊啊——！",//2 ；侦探发狂的表情动作；画面颤抖
        "甄探@咦，这是什么？", // 3；信封闪亮效果；侦探向右移动发现信封；侦探疑惑的表情，动作摸头
        "甄探@啊，是<color=#FE4C40>师父给我的信！</color>", //4:图同上一个场景，只不过放大，突出桌子上的信封；侦探常规动作表情；出现手引导点击 
        // 弹出弹出框（新建）
        // 场景转换到农场
        "甄探@您好，我是负责本次案件的侦探", // 5；背景为农场，侦探打招呼微笑
        "农场主@你总算来了!",//6，农场主焦急皱眉
        "甄探@请和我描述一下大致情况吧。",//7 侦探常规动作表情
        "农场主@我的农场已经经营十多年了，戒备一直很森严，从来没有过失窃的情况。",//8 农场主常规动作表情
        "农场主@但是昨天一夜之间，我的猫、我的狗、我的马、我的鸟、我的猪都不见了！",//9 农场主抓狂；侦探与农场主之间展示动物
        "农场主@你一定要帮我找回那5只动物啊，更重要的是，一定要帮我找到那个可恶的小偷！",// 10 农场主愤恨
        // 弹出框（有按钮）任务单
        "甄探@好的，那么您有没有怀疑的对象呢？或者其他有用的线索。",
        "农场主@说到这里我想起来，今天早上我在卧室的桌子上看到了一个纸条，上面写着一些奇怪的东西",//12 农场主疑惑摸头
        // 弹出框（无按钮） 纸条图片
        "甄探@emmm……这是什么意思？",//13 侦探疑惑，一团乱麻
        "甄探@对了，师父的侦探手册也许会有帮助！",//14 侦探眼前一亮的表情；之后提示点击图标打开侦探手册
        // 暂时阻止点击获取下一行，出现提示手指向侦探手册
        // 关闭侦探手册后 跳转test场景
        "@",//15
        "甄探@（虽然终于找回了五只动物，可是背后的始作俑者到底是谁呢？根本无从下手啊.....）",// 16
        "甄探@（冷静冷静！静下心来一定会有突破口）",
        "甄探@（从时间上来看，凶手应该是夜间犯案，检查过栅栏和门窗发现并没有撬动的痕迹）",
        "甄探@（也就是说......犯案者应该是农场里的人！！！）",
        "甄探@（看来得去农场一趟，找农场主要一下名单了）",
        "甄探@您好，根据我的初步判断，小偷应该就是农场里的人",
        "甄探@麻烦您给我一份农场的人员名单",
        "农场主@好的",
        
    ],
    control: control,
    popControl: popControl,
}