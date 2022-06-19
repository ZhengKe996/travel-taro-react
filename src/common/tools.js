import Taro from "@tarojs/taro";

const tools = {
  request: (options) => {
    const { url = "", params = {}, method = "GET", ...rest } = options;
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        data: params,
        method,
        ...rest,
      })
        .then((res) => {
          const { data } = res;
          if (data?.code === 1) {
            return resolve(data);
          }
          reject(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  showLoading: (param = "") => {
    let dptOpts = {
      title: "加载中...",
      mask: true,
    };
    if (Object.prototype.toString.call(param) === "[object String]") {
      dptOpts.title = param;
    } else if (Object.prototype.toString.call(param) === "[object Object]") {
      dptOpts = { ...dptOpts, ...param };
    }
    return Taro.showLoading(dptOpts);
  },
  showToast: (param) => {
    let dptOpts = {
      title: "温馨提示",
      icon: "none",
      mask: true,
      duration: 2000,
    };

    if (Object.prototype.toString.call(param) === "[object String]") {
      dptOpts.title = param;
    } else if (Object.prototype.toString.call(param) === "[object Object]") {
      dptOpts = { ...dptOpts, ...param };
    } else {
      throw new Error("参数类型有误");
    }
    return Taro.showToast(dptOpts);
  },
};

export default tools;
