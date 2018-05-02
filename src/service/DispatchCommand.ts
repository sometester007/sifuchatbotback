
const command = {
    "/(功能)+(.)*(介绍)+|(介绍)+(.)*(功能)+/":
        { label: "功能介绍:", url: "http://www.menusifu.com/zh/product-training/" }
    , "/(主界面)+(.)*(介绍)+|(介绍)+(.)*(主界面)+/":
        { label: "主界面介绍:", url: "https://www.youtube.com/embed/Ju13pukalUk?autoplay=1&enablejsapi=1&" }
    , "/(报告|commit)+(.)*(错误|bug)+|(错误|bug)+(.)*(报告|commit)+/":
        { label: "咱们单聊 :)", url: "http://www.menusifu.com/zh/product-training/" }
};
const DEFAULT_MESSAGE = { msg: "未能帮您找到内容,您可以试试如下链接:", results: [{ label:"教程集合",url: "http://www.menusifu.com/zh/product-training/" }] };


let Findway = function (search: string) {
    console.log('in findawy function,param1 is[%s]', search);
    let result = {msg:"帮您找到如下内容:"};
    let tmp=[];
    for (let keyword in command) {
        let rex = new RegExp(eval(keyword));
        if (rex.test(search)) tmp.push(command[keyword]);
    }
    if(tmp.length===0) return DEFAULT_MESSAGE

    result['results']=tmp;

    return result;
};

export { Findway, DEFAULT_MESSAGE };