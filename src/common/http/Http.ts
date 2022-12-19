/**
 * 请求工具
 */
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { showToast } from "vant";
import { XA_TOKEN, XA_LOGIN_EXPIRED, Utils, RequestResponse } from "@/common";
import { useLocalStorage } from "@/hook";
// let isExpired = false;
const singKey = "8MuEZabrACosmic829R3yNNFT";
let httpIns: Http;

const { localStore } = useLocalStorage();
export default class Http {
  $http: AxiosInstance;
  constructor() {
    this.$http = axios.create({});
    this.init();
  }
  init() {
    this._defaultsConfig();
    this._interceptRequest();
    this._interceptResponse();
  }
  _defaultsConfig() {
    this.$http.defaults.responseType = "json";
    this.$http.defaults.validateStatus = function () {
      return true;
    };
  }
  _interceptRequest() {
    this.$http.interceptors.request.use(
      (config: any) => {
        config.headers["Authorization"] = `Bearer ${localStore.get(XA_TOKEN)}`;
        return config;
      },
      (error: any) => Promise.reject(error)
    );
  }
  _interceptResponse() {
    this.$http.interceptors.response.use(
      (response: AxiosResponse) => {
        if (
          response.status === 200 &&
          response.data &&
          response.data.code === 0
        ) {
          return Promise.resolve(response.data);
        }
        if (
          response.data &&
          (response.data.code === 20006 ||
            response.data.code === 10003 ||
            response.data.code === 30002)
        ) {
          localStore.remove(XA_TOKEN);
          window.xaCustomEvent.trigger(XA_LOGIN_EXPIRED);
          return Promise.reject(response);
        }

        if (response.data && response.data.code) {
          showToast(response.data.message);
          return Promise.reject(response);
        }
        if (response.data && response.data.status) {
          // Toast.fail('数据获取失败');
        }
        if (!response.data) {
          // Toast.fail('数据获取失败');
        }
        return Promise.reject(response);
      },
      (error: any) => {
        // Toast.fail('数据获取失败');
        return Promise.reject(error);
      }
    );
  }
  handerParams(params: any) {
    const token = localStore.get(XA_TOKEN);
    for (let i in params) {
      typeof params[i] === "string" && (params[i] = params[i].trim());
      if (params[i] === undefined || params[i] === null) {
        delete params[i];
      }
    }
    token && (params.token = token);
    params.timestamp = Date.now() + "";
    const copyparams: Record<string, any> = Object.assign({}, params, {
      key: singKey,
    });
    let singParams: string[] = [];
    Object.keys(copyparams)
      .sort()
      .forEach(function (key) {
        singParams.push(`${key}=${copyparams[key]}`);
      });
    const sing_key = Utils.md5(singParams.join("&"));
    params.sign = sing_key;
    return params;
  }
  get<T = any, R = any>(url: string, params: T): Promise<RequestResponse<R>> {
    return this.$http.get(url, { params: this.handerParams(params) });
  }
  post<T = any, R = any>(url: string, params: T): Promise<RequestResponse<R>> {
    return this.$http.post(url, this.handerParams(params));
  }

  put<T = any, R = any>(url: string, params: T): Promise<RequestResponse<R>> {
    return this.$http.put(url, this.handerParams(params));
  }

  static of() {
    if (httpIns) return httpIns;
    httpIns = new Http();
    return httpIns;
  }
}
