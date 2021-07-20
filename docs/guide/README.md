---
lang: zh-CN
title: 首页建站
description: 页面的描述
---

### 主设计器源

---
文件路径  `NS_portalManagement\designer\index.vue `，设计中心主入口文件。

1. 布局字段：`layoutFields`   ，预设四种布局标识 `['grid', 'report', 'tabs', 'divider']` ,分别对应三个递归布局组件，其中 `divider`  只是相当叶的根渲染组件，不属于递归组件。

2. 固有数据源 + 可变数据源

- `options`  则代表可配置字段，右侧进行实时 `json`  数据变更配置
- `list`  数组字段则代表每个 col 中的栏目 - 可以是布局栏目 或者 最终展示组件。每次拖拽，就会有一次的基础 `json`  的插入 `list` ,
  那么其他类似的数据源依次类推，最终生成所需要的 `json`

### 着重点

---

1. **WidgetElementItem**  组件
   - 路径：`NS_portalManagement\designer\components\WidgetForm\components\WidgetElementItem.vue`
   - 主要内容：拖拽后陈列的根组件（叶节点） ,包含了表单元素，html 渲染模式、内置组件渲染等等
   - 识别点： 挂载点 `el`  名称。如果是动态传入，需要和从数据字典里面拿 `el`  名称，如果是前端预设，则在拖拽时候按照唯一 key 来生成挂载点

```vue
<template v-if="element.type == 'component'">
  <component :is="`component-${element.key}`" ... />
</template>
<component :is="element.el" ... />
```

::: tip
请参考 [表单设计](http://new-see.oicp.io:25280/BI-design/#/formDesign/formManagement) 来了解更多信息。
:::

2. **WidgetConfig **组件

   - 路径： `NS_portalManagement\designer\components\WidgetForm\components\WidgetConfig.vue`
   - 主要内容：所有的布局配置项

   - 基本上不用动，但是需要像该组件一样，扩展配置项组件、可以名如 **ChartConfig **组件 ，放入右侧的配置项 `tab`  中

```vue
<el-form-item
  :label="'栏目内边距'"
  v-if="Object.keys(data.options).indexOf('padding') >= 0"
>
   <el-input v-model="data.options.padding.top" style="width: 130px;" placeholder="上边距（需要单位）"></el-input>
   <el-input
             v-model="data.options.padding.right"
             style="width: 130px;"
             placeholder="右边距（需要单位）"
             ></el-input>
   <el-input
             v-model="data.options.padding.bottom"
             style="width: 130px;"
             placeholder="下边距（需要单位）"
             ></el-input>
   <el-input v-model="data.options.padding.left" style="width: 130px;" placeholder="左边距（需要单位）"></el-input>
</el-form-item>
...
```

3. **GenerateElementItem **组件
   - 路径： `NS_portalManagement\generator\components\GenerateElementItem\index.vue`
   - 主要内容：所有需要-预览展示-生成 渲染部分的 根组件（叶节点） ，原理和**WidgetElementItem**类似，不多于赘述
   - 重点： 所有渲染展示的 根组件（叶节点） ，外层数据对象都有一个 `type`  属性，可以是布局字段 `grid` ，也可以是我们内置好的组件字段`component`,  也可以是表单字段 `editer`  等等

### 其他

---

1. 工具类与方法    >>>  NS_portalManagement\designer\utils

![image.png](https://cdn.nlark.com/yuque/0/2020/png/315567/1604060199786-2274411a-94e6-435d-8d6c-9a3dddba429e.png#align=left&display=inline&height=178&margin=%5Bobject%20Object%5D&name=image.png&originHeight=178&originWidth=979&size=19319&status=done&style=none&width=979)

2. 自动化注册 + 全局注册

`NS_portalManagement\UI\auto-register.js` 
`NS_portalManagement\UI\index.js`

3.  json 编辑器

`NS_portalManagement\components\CodeEditor` 
`NS_portalManagement\components\JsonPreview` 
![image.png](https://cdn.nlark.com/yuque/0/2020/png/315567/1604060478729-4dcca7be-40bd-49c3-8e59-4b68abdcc5aa.png#align=left&display=inline&height=91&margin=%5Bobject%20Object%5D&name=image.png&originHeight=91&originWidth=413&size=4499&status=done&style=none&width=413)
