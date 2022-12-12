import MD5 from "js-md5";

export default class Utils {
  static throttle = (fn: (...arg: any[]) => void, ms: number) => {
    let startTime = 0;

    return (...arg: any[]) => {
      if (Date.now() - startTime > ms) {
        fn(...arg);
        startTime = Date.now();
      }
    };
  };
  static debounce = (fn: (...arg: any[]) => void, ms: number) => {
    let timer: any = null;

    return (...arg: any[]) => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...arg);
      }, ms);
    };
  };
  static deepClone = (data: any): any => {
    if (Array.isArray(data)) {
      return data.map(Utils.deepClone);
    } else if (data && typeof data === "object") {
      let cloneData: any = {};
      for (let i in data) {
        cloneData[i] = Utils.deepClone(data[i]);
      }
      return cloneData;
    } else {
      return data;
    }
  };
  static isPc = () => {
    if (
      window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      return false;
    }
    return true;
  };
  static md5(word: string, isHex = false) {
    if (!word) throw new Error("word is required!");
    if (isHex) return MD5.hex(word);
    return MD5(word);
  }
  static getScrollTop = (el: Document | Element) => {
    if (el === document || el === document.body) {
      return Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
    }
    return (el as Element).scrollTop;
  };

  static getScrollHeight = (el: Document | Element) => {
    return (
      (el as Element).scrollHeight ||
      Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      )
    );
  };

  static getClientHeight = (el: Document | Element) => {
    return (
      (el as Element).clientHeight ||
      Math.max(
        document.documentElement.clientHeight,
        document.body.clientHeight
      )
    );
  };

  static formatNumber = (data: number) =>
    new Intl.NumberFormat("en-IN").format(data);
}
