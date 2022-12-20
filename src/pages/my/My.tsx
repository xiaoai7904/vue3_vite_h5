import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Button } from "vant";
import { RouterNameEnum, UserInfoType, XA_USERINFO } from "@/common";
import { useLogin, useLocalStorage } from "@/hook";
import defaultUserIcon from "@/assets/image/head.png";
import useIcon from "@/assets/image/7.png";
import positionIcon from "@/assets/image/3.png";
import rechargeIcon from "@/assets/image/2.png";
import accountIcon from "@/assets/image/4.png";
import incomeIcon from "@/assets/image/12.png";
import withdrawIcon from "@/assets/image/5.png";
import inviteIcon from "@/assets/image/1.png";
import infoIcon from "@/assets/image/10.png";
import teamIcon from "@/assets/image/8.png";

import "./My.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const { loginStore, logout } = useLogin();
    const { localStore } = useLocalStorage();

    const userInfo = (localStore.get(XA_USERINFO) || {}) as UserInfoType;

    return () => (
      <div class="my">
        <div class="my-account">
          <header class="my-account-header flex-between">
            <div class="user-info flex-start">
              <img src={defaultUserIcon} alt="User" />
              <span>用户名:</span>
              <span>{userInfo.userName}</span>
            </div>
            <span
              onClick={() => router.push({ name: RouterNameEnum.PERSONALINFO })}
            >
              设置
            </span>
          </header>
          <div class="my-account-income">
            <div class="my-account-income-money flex-between">
              <span>总资产（元）</span>
              <span class="value">28388.87</span>
            </div>
            <div class="my-account-income-list">
              <div>
                <h3>昨日收益</h3>
                <span>111</span>
              </div>
              <div>
                <h3>累计收益</h3>
                <span>111</span>
              </div>
              <div>
                <h3>今日收益</h3>
                <span>111</span>
              </div>
            </div>
          </div>
          <div class="my-account-btns">
            <Button
              onClick={() => router.push({ name: RouterNameEnum.RECHARGE })}
            >
              在线充值
            </Button>
            <Button
              onClick={() => router.push({ name: RouterNameEnum.WITHDRAW })}
            >
              快速提现
            </Button>
          </div>
        </div>

        <div class="my-financial">
          <h1>理财宝账户</h1>
          <div class="my-financial-list">
            <div>
              <h3>资产</h3>
              <span>11000.00</span>
            </div>
            <div>
              <h3>最新收益</h3>
              <span>100.00</span>
            </div>
          </div>
          <div class="my-financial-btns">
            <Button
              type="primary"
              onClick={() => router.push({ name: RouterNameEnum.BALANCEBAO })}
            >
              转入
            </Button>
            <Button
              onClick={() =>
                router.push({ name: RouterNameEnum.BALANCEBAORECORD })
              }
            >
              取现
            </Button>
          </div>
        </div>

        <div class="my-nav">
          <div
            class="flex-center"
            onClick={() => router.push({ name: RouterNameEnum.PERSONALINFO })}
          >
            <img src={useIcon} alt="" />
            <p>个人信息</p>
          </div>
          <div
            class="flex-center"
            onClick={() => router.push({ name: RouterNameEnum.POSITIONRECORD })}
          >
            <img src={positionIcon} alt="" />
            <p>持仓记录</p>
          </div>
          <div
            class="flex-center"
            onClick={() => router.push({ name: RouterNameEnum.ACCOUNTDETAILS })}
          >
            <img src={rechargeIcon} alt="" />
            <p>账户明细</p>
          </div>
          <div
            class="flex-center"
            onClick={() => router.push({ name: RouterNameEnum.RECHARGERECORD })}
          >
            <img src={accountIcon} alt="" />
            <p>充值记录</p>
          </div>
          <div
            class="flex-center"
            onClick={() => router.push({ name: RouterNameEnum.COMMISSION })}
          >
            <img src={incomeIcon} alt="" />
            <p>我的佣金</p>
          </div>
          <div
            class="flex-center"
            onClick={() => router.push({ name: RouterNameEnum.WITHDRAWRECORD })}
          >
            <img src={withdrawIcon} alt="" />
            <p>提现记录</p>
          </div>
          <div class="flex-center">
            <img src={inviteIcon} alt="" />
            <p>邀请好友</p>
          </div>
          <div>
            <img src={infoIcon} alt="" />
            <p>信息公告</p>
          </div>
          <div
            class="flex-center"
            onClick={() =>
              router.push({ name: RouterNameEnum.TEAMPERFORMANCE })
            }
          >
            <img src={teamIcon} alt="" />
            <p>团队业绩</p>
          </div>
        </div>

        <div class="my-logout">
          <Button type="primary" block loading={loginStore.loading} onClick={logout}>
            退出登录
          </Button>
        </div>
      </div>
    );
  },
});
