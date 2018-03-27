/**
 * 获取依赖
 * @type {*}
 */
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
/**
 * 定义请求地址
 * @type {*}
 */
const reptileUrl = "https://www.zhihu.com/topic/19551683/hot";
/**
 * 处理空格和回车
 * @param text
 * @returns {string}
 */
function replaceText(text) {
    return text.replace(/\n/g, "").replace(/\s/g, "");
}
/**
 * 核心业务
 * 发请求，解析数据，生成数据
 */
superagent.get(reptileUrl).end(function (err, res) {
    // 抛错拦截
    if (err) {
        throw Error(err);
    }
    // 解析数据
    let $ = cheerio.load(res.text);
    /**
     * 存放数据容器
     * @type {Array}
     */
    let data = [];
    // 获取数据

    $('#TopicMain > div:nth-child(2) > div > div > div > div').each(function (i, elem) {
        let _this = $(elem);
        data.push({
            /* firstline: {
                from:replacetext(_this.find('.FeedSource-firstline span').text()),
                topic:replaeText(_this.find('.Popover div').text())
            }, */
            user: {
                img: _this.find('div > div.ContentItem-meta > div > span > div > div > a > img').attr('src'),
                name: replaceText(_this.find('div > div.ContentItem-meta > div > div > div > span > div > div > a').text()),
                motto: replaceText(_this.find('div > div.ContentItem-meta > div > div > div.AuthorInfo-detail > div > div').text())
            },
            passage: {
                title: replaceText(_this.find('div > h2 > div > a').text()),
                bodycoll: replaceText(_this.find('div > div.RichContent.is-collapsed > div.RichContent-inner > span').text()),
                bodyfull: replaceText(_this.find('div > div > div.RichContent > div.RichContent-inner > span').text())
            },
            vote: _this.find('div > div.RichContent.is-collapsed > div.ContentItem-actions > span > button.Button.VoteButton.VoteButton--up').text(),
            review: replaceText(_this.find('div > div.RichContent.is-collapsed > div.ContentItem-actions > button:nth-child(2)').text()) 
        });
    });
    // 生成数据
    // 写入数据, 文件不存在会自动创建
    fs.writeFile(__dirname + '/data/Language.json', JSON.stringify({
        status: 0,
        data: data
    }), function (err) {
        if (err) throw err;
        console.log('写入完成');
    });
});