
export default {
    /**
     * 
     * @param {} validDate 任何可以new Date()的有效日期
     * @param {*} fmt 形如 "yyyy-MM-dd hh:mm:ss", "MM月-dd日" 等字符串
     */
    formatDatetime: (validDate, fmt) => {
        if (typeof validDate === 'string') {
            validDate = validDate.replace('T', ' ').replace(/-/g, '\/');
        } else if (!validDate) {
            return '--';
        }
        let date = new Date(validDate);
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt
    },
    seed: '',
    upSeed: '',
    upIndex: -1
}