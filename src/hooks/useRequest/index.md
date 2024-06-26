---
nav:
  title: hooks
title: useRequest
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useRequest` 是一个异步请求管理的Hook，React 项目中的网络请求场景使用 `useRequest` 就够了。

接下来让我们先从两个最简单的例子认识 `useRequest`。

### 默认用法（自动请求）

`useRequest` 的第一个参数是一个异步函数，在组件初次加载时，会自动触发该函数执行。同时自动管理该异步函数的 `loading` , `data` , `query` 等状态。且在请求没有返回时，做了防抖，不会触发多余的点击。
getTask为异步请求函数， 对于getTask异步请求，需统一成下面这种（主要是对于不同项目返回结构不同的处理）:

```js
const getTask = async (...params) => {
  const res = await axios.get(...params);
  if (res?.success) {
    return {
      success: true,
      data: res?.xxx,
    };
  }
  return {
    success: false,
    msg: res?.xxxx,
  };
};

const { data, query, loading } = useRequest(getTask);
```

<code src="./demo/default.tsx"></code>

### 手动触发

默认设置了 `options.manual = true`，则 useRequest 会默认执行，如果需要不自动触发的，可以在需要的地方手动调用query;

```js
const { data, query, loading } = useRequest(getTask, {
  manual: false,
});
```

<code src="./demo/manual.tsx"></code>

### 配置onError ｜ onSuccess

onError 默认是alert，当请求出现错误时，会alert出错误，如想要自定义错误的处理，传入onError，该方法会接受请求时catch到的error；onSuccess则会接受请求成功后的数据和success；

<code src="./demo/callback.tsx"></code>
上面两个例子，我们演示了 `useRequest` 最基础的用法，接下来的我们开始逐个详细介绍 `useRequest` 的特性。

### API

| 参数      | 说明         | 类型      | 默认值                                 |
| --------- | ------------ | --------- | -------------------------------------- |
| manual    | 自动请求     | boolean   | true                                   |
| init      | 初始参数     | any       | {}                                     |
| onSuccess | 成功回调     | undefined | (arg: Res<Record<string,any>>) => void |
| onError   | 失败回调     | undefined | (error) => void                        |
| onRepeat  | 重复请求回调 | undefined | (error) => void                        |
