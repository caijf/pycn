const pyCity = [{"adcode":"410300","name":"洛阳市","py":"luoyangshi"},{"adcode":"411200","name":"三门峡市","py":"sanmenxiashi"},{"adcode":"411100","name":"漯河市","py":"luoheshi"},{"adcode":"411000","name":"许昌市","py":"xuchangshi"},{"adcode":"411300","name":"南阳市","py":"nanyangshi"},{"adcode":"411500","name":"信阳市","py":"xinyangshi"},{"adcode":"419001","name":"济源市","py":"jiyuanshi"},{"adcode":"410900","name":"濮阳市","py":"puyangshi"},{"adcode":"411700","name":"驻马店市","py":"zhumadianshi"},{"adcode":"410600","name":"鹤壁市","py":"hebishi"},{"adcode":"410100","name":"郑州市","py":"zhengzhoushi"},{"adcode":"410800","name":"焦作市","py":"jiaozuoshi"},{"adcode":"410200","name":"开封市","py":"kaifengshi"},{"adcode":"410500","name":"安阳市","py":"anyangshi"},{"adcode":"410700","name":"新乡市","py":"xinxiangshi"},{"adcode":"411400","name":"商丘市","py":"shangqiushi"},{"adcode":"410400","name":"平顶山市","py":"pingdingshanshi"},{"adcode":"411600","name":"周口市","py":"zhoukoushi"},{"adcode":"440500","name":"汕头市","py":"shantoushi"},{"adcode":"440600","name":"佛山市","py":"foshanshi"},{"adcode":"441200","name":"肇庆市","py":"zhaoqingshi"},{"adcode":"441300","name":"惠州市","py":"huizhoushi"},{"adcode":"440300","name":"深圳市","py":"shenzhenshi"},{"adcode":"440400","name":"珠海市","py":"zhuhaishi"},{"adcode":"440800","name":"湛江市","py":"zhanjiangshi"},{"adcode":"440700","name":"江门市","py":"jiangmenshi"},{"adcode":"441700","name":"阳江市","py":"yangjiangshi"},{"adcode":"440900","name":"茂名市","py":"maomingshi"},{"adcode":"440200","name":"韶关市","py":"shaoguanshi"},{"adcode":"441500","name":"汕尾市","py":"shanweishi"},{"adcode":"445200","name":"揭阳市","py":"jieyangshi"},{"adcode":"445300","name":"云浮市","py":"yunfushi"},{"adcode":"441600","name":"河源市","py":"heyuanshi"},{"adcode":"445100","name":"潮州市","py":"chaozhoushi"},{"adcode":"441800","name":"清远市","py":"qingyuanshi"},{"adcode":"441900","name":"东莞市","py":"dongguanshi"},{"adcode":"440100","name":"广州市","py":"guangzhoushi"},{"adcode":"441400","name":"梅州市","py":"meizhoushi"},{"adcode":"442000","name":"中山市","py":"zhongshanshi"},{"adcode":"150300","name":"乌海市","py":"wuhaishi"},{"adcode":"150200","name":"包头市","py":"baotoushi"},{"adcode":"150800","name":"巴彦淖尔市","py":"bayannaoershi"},{"adcode":"150700","name":"呼伦贝尔市","py":"hulunbeiershi"},{"adcode":"150500","name":"通辽市","py":"tongliaoshi"},{"adcode":"152900","name":"阿拉善盟","py":"alashanmeng"},{"adcode":"152200","name":"兴安盟","py":"xinganmeng"},{"adcode":"152500","name":"锡林郭勒盟","py":"xilinguolemeng"},{"adcode":"150100","name":"呼和浩特市","py":"huhehaoteshi"},{"adcode":"150900","name":"乌兰察布市","py":"wulanchabushi"},{"adcode":"150600","name":"鄂尔多斯市","py":"eerduosishi"},{"adcode":"150400","name":"赤峰市","py":"chifengshi"},{"adcode":"230900","name":"七台河市","py":"qitaiheshi"},{"adcode":"232700","name":"大兴安岭地区","py":"daxinganlingdiqu"},{"adcode":"230400","name":"鹤岗市","py":"hegangshi"},{"adcode":"230700","name":"伊春市","py":"yichunshi"},{"adcode":"231200","name":"绥化市","py":"suihuashi"},{"adcode":"230100","name":"哈尔滨市","py":"haerbinshi"},{"adcode":"230600","name":"大庆市","py":"daqingshi"},{"adcode":"230800","name":"佳木斯市","py":"jiamusishi"},{"adcode":"230500","name":"双鸭山市","py":"shuangyashanshi"},{"adcode":"231100","name":"黑河市","py":"heiheshi"},{"adcode":"231000","name":"牡丹江市","py":"mudanjiangshi"},{"adcode":"230200","name":"齐齐哈尔市","py":"qiqihaershi"},{"adcode":"230300","name":"鸡西市","py":"jixishi"},{"adcode":"659005","name":"北屯市","py":"beitunshi"},{"adcode":"659006","name":"铁门关市","py":"tiemenguanshi"},{"adcode":"652700","name":"博尔塔拉蒙古自治州","py":"boertalamengguzizhizhou"},{"adcode":"659007","name":"双河市","py":"shuangheshi"},{"adcode":"654300","name":"阿勒泰地区","py":"aletaidiqu"},{"adcode":"659009","name":"昆玉市","py":"kunyushi"},{"adcode":"659001","name":"石河子市","py":"shihezishi"},{"adcode":"659008","name":"可克达拉市","py":"kekedalashi"},{"adcode":"653200","name":"和田地区","py":"hetiandiqu"},{"adcode":"654200","name":"塔城地区","py":"tachengdiqu"},{"adcode":"652300","name":"昌吉回族自治州","py":"changjihuizuzizhizhou"},{"adcode":"659004","name":"五家渠市","py":"wujiaqushi"},{"adcode":"652800","name":"巴音郭楞蒙古自治州","py":"bayinguolengmengguzizhizhou"},{"adcode":"659002","name":"阿拉尔市","py":"alaershi"},{"adcode":"654000","name":"伊犁哈萨克自治州","py":"yilihasakezizhizhou"},{"adcode":"652900","name":"阿克苏地区","py":"akesudiqu"},{"adcode":"653100","name":"喀什地区","py":"kashendiqu"},{"adcode":"659003","name":"图木舒克市","py":"tumushukeshi"},{"adcode":"653000","name":"克孜勒苏柯尔克孜自治州","py":"kezilesukeerkezizizhizhou"},{"adcode":"650500","name":"哈密市","py":"hamishi"},{"adcode":"650200","name":"克拉玛依市","py":"kelamayishi"},{"adcode":"659010","name":"胡杨河市","py":"huyangheshi"},{"adcode":"650400","name":"吐鲁番市","py":"tulufanshi"},{"adcode":"650100","name":"乌鲁木齐市","py":"wulumuqishi"},{"adcode":"420300","name":"十堰市","py":"shiyanshi"},{"adcode":"420600","name":"襄阳市","py":"xiangyangshi"},{"adcode":"429006","name":"天门市","py":"tianmenshi"},{"adcode":"420100","name":"武汉市","py":"wuhanshi"},{"adcode":"429005","name":"潜江市","py":"qianjiangshi"},{"adcode":"421100","name":"黄冈市","py":"huanggangshi"},{"adcode":"420500","name":"宜昌市","py":"yichangshi"},{"adcode":"429004","name":"仙桃市","py":"xiantaoshi"},{"adcode":"420800","name":"荆门市","py":"jingmenshi"},{"adcode":"420900","name":"孝感市","py":"xiaoganshi"},{"adcode":"422800","name":"恩施土家族苗族自治州","py":"enshitujiazumiaozuzizhizhou"},{"adcode":"421000","name":"荆州市","py":"jingzhoushi"},{"adcode":"421200","name":"咸宁市","py":"xianningshi"},{"adcode":"429021","name":"神农架林区","py":"shennongjialinqu"},{"adcode":"421300","name":"随州市","py":"suizhoushi"},{"adcode":"420200","name":"黄石市","py":"huangshishi"},{"adcode":"420700","name":"鄂州市","py":"ezhoushi"},{"adcode":"210100","name":"沈阳市","py":"shenyangshi"},{"adcode":"211400","name":"葫芦岛市","py":"huludaoshi"},{"adcode":"210700","name":"锦州市","py":"jinzhoushi"},{"adcode":"210200","name":"大连市","py":"dalianshi"},{"adcode":"210600","name":"丹东市","py":"dandongshi"},{"adcode":"210400","name":"抚顺市","py":"fushunshi"},{"adcode":"211100","name":"盘锦市","py":"panjinshi"},{"adcode":"210900","name":"阜新市","py":"fuxinshi"},{"adcode":"211200","name":"铁岭市","py":"tielingshi"},{"adcode":"210800","name":"营口市","py":"yingkoushi"},{"adcode":"210500","name":"本溪市","py":"benxishi"},{"adcode":"211000","name":"辽阳市","py":"liaoyangshi"},{"adcode":"210300","name":"鞍山市","py":"anshanshi"},{"adcode":"211300","name":"朝阳市","py":"chaoyangshi"},{"adcode":"370600","name":"烟台市","py":"yantaishi"},{"adcode":"371000","name":"威海市","py":"weihaishi"},{"adcode":"370200","name":"青岛市","py":"qingdaoshi"},{"adcode":"370300","name":"淄博市","py":"ziboshi"},{"adcode":"371500","name":"聊城市","py":"liaochengshi"},{"adcode":"370500","name":"东营市","py":"dongyingshi"},{"adcode":"371600","name":"滨州市","py":"binzhoushi"},{"adcode":"370400","name":"枣庄市","py":"zaozhuangshi"},{"adcode":"370700","name":"潍坊市","py":"weifangshi"},{"adcode":"371100","name":"日照市","py":"rizhaoshi"},{"adcode":"371400","name":"德州市","py":"dezhoushi"},{"adcode":"370100","name":"济南市","py":"jinanshi"},{"adcode":"371300","name":"临沂市","py":"linyishi"},{"adcode":"370800","name":"济宁市","py":"jiningshi"},{"adcode":"371700","name":"菏泽市","py":"hezeshi"},{"adcode":"370900","name":"泰安市","py":"taianshi"},{"adcode":"611000","name":"商洛市","py":"shangluoshi"},{"adcode":"610700","name":"汉中市","py":"hanzhongshi"},{"adcode":"610200","name":"铜川市","py":"tongchuanshi"},{"adcode":"610800","name":"榆林市","py":"yulinshi"},{"adcode":"610600","name":"延安市","py":"yananshi"},{"adcode":"610100","name":"西安市","py":"xianshi"},{"adcode":"610300","name":"宝鸡市","py":"baojishi"},{"adcode":"610900","name":"安康市","py":"ankangshi"},{"adcode":"610500","name":"渭南市","py":"weinanshi"},{"adcode":"610400","name":"咸阳市","py":"xianyangshi"},{"adcode":"310100","name":"上海城区","py":"shanghaichengqu"},{"adcode":"520400","name":"安顺市","py":"anshunshi"},{"adcode":"522300","name":"黔西南布依族苗族自治州","py":"qianxinanbuyizumiaozuzizhizhou"},{"adcode":"522700","name":"黔南布依族苗族自治州","py":"qiannanbuyizumiaozuzizhizhou"},{"adcode":"520300","name":"遵义市","py":"zunyishi"},{"adcode":"520200","name":"六盘水市","py":"liupanshuishi"},{"adcode":"520600","name":"铜仁市","py":"tongrenshi"},{"adcode":"522600","name":"黔东南苗族侗族自治州","py":"qiandongnanmiaozudongzuzizhizhou"},{"adcode":"520500","name":"毕节市","py":"bijieshi"},{"adcode":"520100","name":"贵阳市","py":"guiyangshi"},{"adcode":"500100","name":"重庆城区","py":"chongqingchengqu"},{"adcode":"500200","name":"重庆郊县","py":"chongqingjiaoxian"},{"adcode":"540200","name":"日喀则市","py":"rikazeshi"},{"adcode":"540600","name":"那曲市","py":"naqushi"},{"adcode":"540300","name":"昌都市","py":"changdushi"},{"adcode":"540500","name":"山南市","py":"shannanshi"},{"adcode":"540100","name":"拉萨市","py":"lasashi"},{"adcode":"540400","name":"林芝市","py":"linzhishi"},{"adcode":"542500","name":"阿里地区","py":"alidiqu"},{"adcode":"341700","name":"池州市","py":"chizhoushi"},{"adcode":"340500","name":"马鞍山市","py":"maanshanshi"},{"adcode":"341200","name":"阜阳市","py":"fuyangshi"},{"adcode":"340600","name":"淮北市","py":"huaibeishi"},{"adcode":"340700","name":"铜陵市","py":"tonglingshi"},{"adcode":"341000","name":"黄山市","py":"huangshanshi"},{"adcode":"340800","name":"安庆市","py":"anqingshi"},{"adcode":"341100","name":"滁州市","py":"chuzhoushi"},{"adcode":"340400","name":"淮南市","py":"huainanshi"},{"adcode":"341500","name":"六安市","py":"luanshi"},{"adcode":"340300","name":"蚌埠市","py":"bengbushi"},{"adcode":"341300","name":"宿州市","py":"suzhoushi"},{"adcode":"341600","name":"亳州市","py":"bozhoushi"},{"adcode":"340200","name":"芜湖市","py":"wuhushi"},{"adcode":"340100","name":"合肥市","py":"hefeishi"},{"adcode":"341800","name":"宣城市","py":"xuanchengshi"},{"adcode":"350300","name":"莆田市","py":"putianshi"},{"adcode":"350900","name":"宁德市","py":"ningdeshi"},{"adcode":"350100","name":"福州市","py":"fuzhoushi"},{"adcode":"350500","name":"泉州市","py":"quanzhoushi"},{"adcode":"350200","name":"厦门市","py":"xiamenshi"},{"adcode":"350600","name":"漳州市","py":"zhangzhoushi"},{"adcode":"350700","name":"南平市","py":"nanpingshi"},{"adcode":"350400","name":"三明市","py":"sanmingshi"},{"adcode":"350800","name":"龙岩市","py":"longyanshi"},{"adcode":"430600","name":"岳阳市","py":"yueyangshi"},{"adcode":"430800","name":"张家界市","py":"zhangjiajieshi"},{"adcode":"430400","name":"衡阳市","py":"hengyangshi"},{"adcode":"431200","name":"怀化市","py":"huaihuashi"},{"adcode":"430100","name":"长沙市","py":"changshashi"},{"adcode":"433100","name":"湘西土家族苗族自治州","py":"xiangxitujiazumiaozuzizhizhou"},{"adcode":"430700","name":"常德市","py":"changdeshi"},{"adcode":"430300","name":"湘潭市","py":"xiangtanshi"},{"adcode":"430200","name":"株洲市","py":"zhuzhoushi"},{"adcode":"431000","name":"郴州市","py":"chenzhoushi"},{"adcode":"430500","name":"邵阳市","py":"shaoyangshi"},{"adcode":"431100","name":"永州市","py":"yongzhoushi"},{"adcode":"430900","name":"益阳市","py":"yiyangshi"},{"adcode":"431300","name":"娄底市","py":"loudishi"},{"adcode":"469021","name":"定安县","py":"dinganxian"},{"adcode":"469024","name":"临高县","py":"lingaoxian"},{"adcode":"469022","name":"屯昌县","py":"tunchangxian"},{"adcode":"469026","name":"昌江黎族自治县","py":"changjianglizuzizhixian"},{"adcode":"469025","name":"白沙黎族自治县","py":"baishalizuzizhixian"},{"adcode":"469002","name":"琼海市","py":"qionghaishi"},{"adcode":"469007","name":"东方市","py":"dongfangshi"},{"adcode":"460300","name":"三沙市","py":"sanshashi"},{"adcode":"469006","name":"万宁市","py":"wanningshi"},{"adcode":"469030","name":"琼中黎族苗族自治县","py":"qiongzhonglizumiaozuzizhixian"},{"adcode":"469027","name":"乐东黎族自治县","py":"ledonglizuzizhixian"},{"adcode":"469028","name":"陵水黎族自治县","py":"lingshuilizuzizhixian"},{"adcode":"469023","name":"澄迈县","py":"chengmaixian"},{"adcode":"460200","name":"三亚市","py":"sanyashi"},{"adcode":"460400","name":"儋州市","py":"danzhoushi"},{"adcode":"469005","name":"文昌市","py":"wenchangshi"},{"adcode":"460100","name":"海口市","py":"haikoushi"},{"adcode":"469001","name":"五指山市","py":"wuzhishanshi"},{"adcode":"469029","name":"保亭黎族苗族自治县","py":"baotinglizumiaozuzizhixian"},{"adcode":"320600","name":"南通市","py":"nantongshi"},{"adcode":"320700","name":"连云港市","py":"lianyungangshi"},{"adcode":"321300","name":"宿迁市","py":"suqianshi"},{"adcode":"321200","name":"泰州市","py":"taizhoushi"},{"adcode":"320400","name":"常州市","py":"changzhoushi"},{"adcode":"320100","name":"南京市","py":"nanjingshi"},{"adcode":"320300","name":"徐州市","py":"xuzhoushi"},{"adcode":"320500","name":"苏州市","py":"suzhoushi"},{"adcode":"321000","name":"扬州市","py":"yangzhoushi"},{"adcode":"321100","name":"镇江市","py":"zhenjiangshi"},{"adcode":"320200","name":"无锡市","py":"wuxishi"},{"adcode":"320900","name":"盐城市","py":"yanchengshi"},{"adcode":"320800","name":"淮安市","py":"huaianshi"},{"adcode":"632700","name":"玉树藏族自治州","py":"yushucangzuzizhizhou"},{"adcode":"632500","name":"海南藏族自治州","py":"hainancangzuzizhizhou"},{"adcode":"632800","name":"海西蒙古族藏族自治州","py":"haiximengguzucangzuzizhizhou"},{"adcode":"630200","name":"海东市","py":"haidongshi"},{"adcode":"632600","name":"果洛藏族自治州","py":"guoluocangzuzizhizhou"},{"adcode":"632300","name":"黄南藏族自治州","py":"huangnancangzuzizhizhou"},{"adcode":"630100","name":"西宁市","py":"xiningshi"},{"adcode":"632200","name":"海北藏族自治州","py":"haibeicangzuzizhizhou"},{"adcode":"451000","name":"百色市","py":"baiseshi"},{"adcode":"450700","name":"钦州市","py":"qinzhoushi"},{"adcode":"450500","name":"北海市","py":"beihaishi"},{"adcode":"450200","name":"柳州市","py":"liuzhoushi"},{"adcode":"450400","name":"梧州市","py":"wuzhoushi"},{"adcode":"450300","name":"桂林市","py":"guilinshi"},{"adcode":"451100","name":"贺州市","py":"hezhoushi"},{"adcode":"451300","name":"来宾市","py":"laibinshi"},{"adcode":"451200","name":"河池市","py":"hechishi"},{"adcode":"450900","name":"玉林市","py":"yulinshi"},{"adcode":"450100","name":"南宁市","py":"nanningshi"},{"adcode":"450800","name":"贵港市","py":"guigangshi"},{"adcode":"451400","name":"崇左市","py":"chongzuoshi"},{"adcode":"450600","name":"防城港市","py":"fangchenggangshi"},{"adcode":"640200","name":"石嘴山市","py":"shizuishanshi"},{"adcode":"640400","name":"固原市","py":"guyuanshi"},{"adcode":"640500","name":"中卫市","py":"zhongweishi"},{"adcode":"640300","name":"吴忠市","py":"wuzhongshi"},{"adcode":"640100","name":"银川市","py":"yinchuanshi"},{"adcode":"330400","name":"嘉兴市","py":"jiaxingshi"},{"adcode":"330900","name":"舟山市","py":"zhoushanshi"},{"adcode":"330200","name":"宁波市","py":"ningboshi"},{"adcode":"331000","name":"台州市","py":"taizhoushi"},{"adcode":"330300","name":"温州市","py":"wenzhoushi"},{"adcode":"331100","name":"丽水市","py":"lishuishi"},{"adcode":"330700","name":"金华市","py":"jinhuashi"},{"adcode":"330500","name":"湖州市","py":"huzhoushi"},{"adcode":"330600","name":"绍兴市","py":"shaoxingshi"},{"adcode":"330800","name":"衢州市","py":"quzhoushi"},{"adcode":"330100","name":"杭州市","py":"hangzhoushi"},{"adcode":"130200","name":"唐山市","py":"tangshanshi"},{"adcode":"131000","name":"廊坊市","py":"langfangshi"},{"adcode":"130300","name":"秦皇岛市","py":"qinhuangdaoshi"},{"adcode":"130400","name":"邯郸市","py":"handanshi"},{"adcode":"130800","name":"承德市","py":"chengdeshi"},{"adcode":"130900","name":"沧州市","py":"cangzhoushi"},{"adcode":"130500","name":"邢台市","py":"xingtaishi"},{"adcode":"131100","name":"衡水市","py":"hengshuishi"},{"adcode":"130700","name":"张家口市","py":"zhangjiakoushi"},{"adcode":"130600","name":"保定市","py":"baodingshi"},{"adcode":"130100","name":"石家庄市","py":"shijiazhuangshi"},{"adcode":"620300","name":"金昌市","py":"jinchangshi"},{"adcode":"620100","name":"兰州市","py":"lanzhoushi"},{"adcode":"620900","name":"酒泉市","py":"jiuquanshi"},{"adcode":"620400","name":"白银市","py":"baiyinshi"},{"adcode":"620200","name":"嘉峪关市","py":"jiayuguanshi"},{"adcode":"620800","name":"平凉市","py":"pingliangshi"},{"adcode":"621200","name":"陇南市","py":"longnanshi"},{"adcode":"620700","name":"张掖市","py":"zhangyeshi"},{"adcode":"622900","name":"临夏回族自治州","py":"linxiahuizuzizhizhou"},{"adcode":"621100","name":"定西市","py":"dingxishi"},{"adcode":"620500","name":"天水市","py":"tianshuishi"},{"adcode":"621000","name":"庆阳市","py":"qingyangshi"},{"adcode":"620600","name":"武威市","py":"wuweishi"},{"adcode":"623000","name":"甘南藏族自治州","py":"gannancangzuzizhizhou"},{"adcode":"510700","name":"绵阳市","py":"mianyangshi"},{"adcode":"510800","name":"广元市","py":"guangyuanshi"},{"adcode":"510100","name":"成都市","py":"chengdushi"},{"adcode":"511900","name":"巴中市","py":"bazhongshi"},{"adcode":"511300","name":"南充市","py":"nanchongshi"},{"adcode":"511700","name":"达州市","py":"dazhoushi"},{"adcode":"510900","name":"遂宁市","py":"suiningshi"},{"adcode":"510600","name":"德阳市","py":"deyangshi"},{"adcode":"511600","name":"广安市","py":"guanganshi"},{"adcode":"512000","name":"资阳市","py":"ziyangshi"},{"adcode":"511000","name":"内江市","py":"neijiangshi"},{"adcode":"513400","name":"凉山彝族自治州","py":"liangshanyizuzizhizhou"},{"adcode":"510400","name":"攀枝花市","py":"panzhihuashi"},{"adcode":"511100","name":"乐山市","py":"leshanshi"},{"adcode":"510500","name":"泸州市","py":"luzhoushi"},{"adcode":"511400","name":"眉山市","py":"meishanshi"},{"adcode":"510300","name":"自贡市","py":"zigongshi"},{"adcode":"511500","name":"宜宾市","py":"yibinshi"},{"adcode":"513300","name":"甘孜藏族自治州","py":"ganzicangzuzizhizhou"},{"adcode":"513200","name":"阿坝藏族羌族自治州","py":"abacangzuqiangzuzizhizhou"},{"adcode":"511800","name":"雅安市","py":"yaanshi"},{"adcode":"120100","name":"天津城区","py":"tianjinchengqu"},{"adcode":"110100","name":"北京城区","py":"beijingchengqu"},{"adcode":"360700","name":"赣州市","py":"ganzhoushi"},{"adcode":"360300","name":"萍乡市","py":"pingxiangshi"},{"adcode":"360200","name":"景德镇市","py":"jingdezhenshi"},{"adcode":"360900","name":"宜春市","py":"yichunshi"},{"adcode":"360800","name":"吉安市","py":"jianshi"},{"adcode":"360500","name":"新余市","py":"xinyushi"},{"adcode":"361100","name":"上饶市","py":"shangraoshi"},{"adcode":"360100","name":"南昌市","py":"nanchangshi"},{"adcode":"360400","name":"九江市","py":"jiujiangshi"},{"adcode":"360600","name":"鹰潭市","py":"yingtanshi"},{"adcode":"361000","name":"抚州市","py":"fuzhoushi"},{"adcode":"220200","name":"吉林市","py":"jilinshi"},{"adcode":"220800","name":"白城市","py":"baichengshi"},{"adcode":"220700","name":"松原市","py":"songyuanshi"},{"adcode":"220400","name":"辽源市","py":"liaoyuanshi"},{"adcode":"220100","name":"长春市","py":"changchunshi"},{"adcode":"220500","name":"通化市","py":"tonghuashi"},{"adcode":"220300","name":"四平市","py":"sipingshi"},{"adcode":"222400","name":"延边朝鲜族自治州","py":"yanbianchaoxianzuzizhizhou"},{"adcode":"220600","name":"白山市","py":"baishanshi"},{"adcode":"140300","name":"阳泉市","py":"yangquanshi"},{"adcode":"140100","name":"太原市","py":"taiyuanshi"},{"adcode":"141100","name":"吕梁市","py":"lvliangshi"},{"adcode":"140700","name":"晋中市","py":"jinzhongshi"},{"adcode":"140400","name":"长治市","py":"changzhishi"},{"adcode":"140500","name":"晋城市","py":"jinchengshi"},{"adcode":"140800","name":"运城市","py":"yunchengshi"},{"adcode":"141000","name":"临汾市","py":"linfenshi"},{"adcode":"140900","name":"忻州市","py":"xinzhoushi"},{"adcode":"140600","name":"朔州市","py":"shuozhoushi"},{"adcode":"140200","name":"大同市","py":"datongshi"},{"adcode":"533300","name":"怒江傈僳族自治州","py":"nujianglisuzuzizhizhou"},{"adcode":"533400","name":"迪庆藏族自治州","py":"diqingcangzuzizhizhou"},{"adcode":"530700","name":"丽江市","py":"lijiangshi"},{"adcode":"530600","name":"昭通市","py":"zhaotongshi"},{"adcode":"532500","name":"红河哈尼族彝族自治州","py":"honghehanizuyizuzizhizhou"},{"adcode":"530400","name":"玉溪市","py":"yuxishi"},{"adcode":"530300","name":"曲靖市","py":"qujingshi"},{"adcode":"532800","name":"西双版纳傣族自治州","py":"xishuangbannadaizuzizhizhou"},{"adcode":"532900","name":"大理白族自治州","py":"dalibaizuzizhizhou"},{"adcode":"530500","name":"保山市","py":"baoshanshi"},{"adcode":"532600","name":"文山壮族苗族自治州","py":"wenshanzhuangzumiaozuzizhizhou"},{"adcode":"532300","name":"楚雄彝族自治州","py":"chuxiongyizuzizhizhou"},{"adcode":"530800","name":"普洱市","py":"puershi"},{"adcode":"530900","name":"临沧市","py":"lincangshi"},{"adcode":"530100","name":"昆明市","py":"kunmingshi"},{"adcode":"533100","name":"德宏傣族景颇族自治州","py":"dehongdaizujingpozuzizhizhou"}];
export default pyCity;