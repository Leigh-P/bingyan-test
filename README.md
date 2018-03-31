# bingyan-test
冰岩实习任务:知乎
<hr>
项目简述:
<br>前端界面：模仿知乎首页，响应式设计，固定导航条和侧边栏（使用html和css实现框架和样式）
<br>前端交互：实现滚动加载，动态折叠和展开，手动发表动态（js）
<br>后台搭建：爬虫，实现登录（node.js）
<hr>
<h4>前端静态页面构建<h4>
<h5>3.25<br>基本框架和样式设计<h5>
<li>version 1:由于采用相对布局和position：absolute和relative，导致无法实现响应式布局</li>
<li>version 2:修改相对布局为绝对布局，margin改为0 auto，实现响应式布局</li>
<li>version 3:细节修改，增加hover效果和字体颜色</li>
<h5>3.26<br>CSS文件分流<h5>
<h5>3.27<br>爬取数据<h5>
<p>查找到一个简单实现数据爬取的例子
<br>几次尝试都没有成功，原因总结如下：
<li>知乎首页需要登录才能显示数据</li>
<li>爬取数据文件格式有误，未能正确分析数据结构</li>
<br>解决方法如下：
<ol>浏览器选中元素进行copy selector</ol>
<ol>按照话题爬取数据</ol>
<br>可改进的地方
<li>XHR</li>
<li>只能爬取少数数据，寻找应付瀑布流加载的方法</li>
</p>
<h5>3.28<br>简单挪用数据 + node 学习<h5>
<p>使用js调用数据到页面
<br>html:复制 div.content 
<br>js: 
<li>将储存data的js文件在head处引用</li>
<li>使用原型创建对象（content），保存属性和方法</li>
<br>改进方向:
<ol>module
<br>封装函数的js文件通过exports暴露出接口，供他人调用
<br>模块化 .js 有利于保持全局变量的纯净，同时保持 .js 的独立性</ol>
<ol>封装函数，抽象过程</ol>
</p>
<p>node学习
<a>node</a>
<li>初步了解express
<ol>get</ol>
<ol>request 对象处理请求数据
<br>response 对象</ol>
</li>
<li>events监听器（EventEmitter），事件触发和绑定（类比js addEventListener）</li>
</p>

