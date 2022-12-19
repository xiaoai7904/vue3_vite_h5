import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, Button, Checkbox } from "vant";
import { useI18n } from "vue-i18n";
import { RouterNameEnum } from "@/common";
import { useLogin } from "@/hook";
import "./Login.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { loginStore, login, checkField } = useLogin();
    return () => (
      <div class="login">
        <h1>{t("login.title" /**华夏基金 */)}</h1>
        <div class="login-form">
          <Form onFailed={checkField} onSubmit={login}>
            <Field
              v-model={loginStore.form.username}
              left-icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAFQElEQVRYhaWYW6hWRRTHf+ci5iEMkdJKKvBImHkEHzIk0kCMJMnsIiZlKHTH082wh7ALRKE9lKXlBbGgiz5YD2aFFKXdDMtuUInQW0SkIVmQuf8xM+v79p49s79zyIHN7Fkzs2bNf/33mjW7S6v6SYpM4GrJ6vqjCyi4EjFV4nwK/YsYQcFhxPcUeg/xM4XNK0xPUdHb7gtt2XtvalHFoHyZhLQacS3Q1zaWpP4LsRN4DOlQ3K/aWDPIZM1GkUOHBxBPteeJ3wSfg35A/AqMQ0wEzUSMA5YgFgGrEM8khtc3Y++pUWpsPA/cbWMO2yJvII5kkBoN3IBYAQwg1gLnIQb9oBo9VDOyuxGhuDzpDQpKtgPTgQ3eoPqcUB9DbAEuRXrF5M7Ax5vQKd/VYBSRyxyZH7aJboFFyC9qO0z5UWn/DdyC2GrtR4C5jS7MIpW6rg/YaIKDSEuzO2wme6tehvjKDN4EjMwRvDU+RSoe5HjhuOBk97Z7FADK8SNGWVV9Kwj0cfquT0CozO+OhNVGUDbfBAeAD7OKcojl5fsQn5lsYRZlKx3cx2nADHvfmXCns7ti1Mr22zb3EtAoRRssUW12nzgLMcHev6yDmLguaWfrA/bm9I7tjFQ+Np1ZER5t+lKGV7cNPlqJTWOT0JMglcam0hCpLzuus6tyBvdVFv+z1KNIb8qp8jnig2Aok1vyfGwadj25HVzh95zrglF517nyh8UmJ56TosMZQxg0JsO1ORabDiKvPwdGhVP5Z7dNm+NIX4tN0xBfI90az9V0xLuIe2rcm2B6XNldrptCVXFfBkfYBpxAnA7JKf8R8CZiM/AL4vWArMsa+AexPtowrEVyelzeta2J5AGprC3tXbjF3GHs2jf63ceGrbYI/Sy4bEFv2dk2P3CmTfjbLIVxoif8Jkgifrt06aH+9EiIjwmXTe6TC3ghW3THxbpWtljPHjPt5R7N0P5U4jIKik5rdndwXWvgCeAay6FceQ7xGnBxZ6LrIuQP883W/klwHfLmZd3Werq0sr8kr2o5dCsMBNloCm0yN7qc2+32HQp2Ib6l0HHESAqcMVdRaAGix/Rtp9AyieMRitmPSy7zrHXmdhH8f8xyqcCvwMd5wLwhQsOriCWRzsYSOhsyzzjCWiR2n/he8ElfjntpO8ydC9qrECJGdXJb6+nNdlQmSiwGuTS2v8KXT3ABED5GHPKBtjTiHKAfMQv5tHkKjtz45y7/xUo7OuHVpQcnpkaFO5oz+CWJZdZ238xGn9oW2h/xr36nK9rIdVNotsTtFMbFgOQWxB0UPma1NlqL6BGkfsR4n9jJp7Gu7EBMA+5E7I95Ixrb4Ut732LULGCvuXa5pTHjE3e2z77YbQ7+PYgB+ejr83JH7O+iHUWGdKirJ4C4HHjaJAN+Hb9ehTOZJK8H4a7bU+yGewXw8rANSAyu3OnKRVdVzsUptl5P1YjagezvaM6gkxKzQftqYaHZVU11ta88fF/wF4lQ3Hpbq4ZXz74FwGJTdBPwRaxwiIWb+uvvpWydPx1C583A1SWnQulFWm9Ch9b2jovXYxNkEr/8na62gUHU4iovAiOoEH0pcDb4Y2Awe6cbLsGbkMrkTTboPns91/8QqSC10hRuyF4ShqyH/mmRR9tL97TvlHB/C6mZSBda6Nuc5UJSD0Hw5L12bCVg+UTRlanurtntCRY63dHxo+pKTi02NRsTx6ZdlUvKwm4faUP/B427PfXY1OS6VjkKfGONST2Pzhjj3HYSsUZynZkTPzLkf8emjmCB/xPYB6z5D1GSHf0t1ZD4AAAAAElFTkSuQmCC"
              placeholder={t("login.userNameTips" /**请输入用户名 */)}
              rules={[
                {
                  required: true,
                  message: t("login.userNameTips" /**请输入用户名 */),
                },
              ]}
            />
            <Field
              v-model={loginStore.form.password}
              type="password"
              left-icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAnCAYAAABqippxAAAFDklEQVRYhaWYa6hVRRTHf/d4bt0uppFgHyq7pGGawcXEUCroQyQE1YceVHIpjCLJsJcPKuxbYWARWWkvekEp92YfTCroYXDrg1gSYdHzWuCHCtLSym77HzN7nbP37D1zzoE27DMza2bP+s/6z5q15vRp3Ryij1qvSnX/TiXT1YhlZAxLDJHpOMSPZHyGeJdMO8n4zo/PBJl9m1m7VZeQ9cWBqFSWgWSsRdyFNLM1uTKOIk2SMa2keBKxiYwHyHQsDiJvy9qNuDmoWuE0xDjwMDATsQVYjlgAnI6YBcxFOEs9BTQRa4A9wIL2woJFKq9aO22RwhonIPYg5pPxAdJqxD63Cim+SjIWerCZFpHxE2IxGQdTtMQtoppkDJhvK70Y2BdQV1ml1fd65WIbeGvuyFHHvsmLODUFJdf4TSneB1bWJ1DYDveW+70B+U27GFiRosW103skH/WQNVa0qSrrT4Jo192mvd3q9/dukZCWc4EzEWOI72tjaooVfl/UdyF9AwwhP2d0jvgeyd8LbOBoLi8UqZPiiuVMvsPK8z0tgdUUsUg465A1JpIKQ2WJugd80GSnpsY2agqK5xQbXB+ToiUFCH5un0dVXck9UrzH0xqToqUKrBhQBTzVAM9QALYYG6Gm3fmXNQ9FLdITRW3Ae8G78VjUInJHcXWSvH0istgB5yH+RAzGQXShJa//jbjPH/lubvi9CqhZMcZS5A+uq8CokZ5td5cPj6hi1S1VAqwC1HYkd1KPt/rLQO4FbSx9/CXiH/CxxgUxBXuoQJZUXLGO8v3mvXG5Bc01iEewKIm3gtho9ccQTwJf11aeKntw5ZIxz0K6w05ct3C3B7f2ae0cF9YnkAZ8p9jcnqQULTtE2kg9nQC12ojVZDyKXD7DLOc1NwEDwBvA5ujKomXHgNf5W8zy7sTFO8FI08K163g54j3d6DjHR2e8J/yC2AkWl0qAVWmXdLwEXAla0swR+Z4DAYBapA1W6RRvQtxcmdzJHkfc04NF8Ed/Xk4re82x6OB6OYi0GzHsGc8VfwVchLgO6W5gBvKUdz744EhL2ii55ZQ0iGA/rDcQLlM7G+lO4GnE9YhL/eTiRuCyKC3hM6WloBGaIEVLu2+6z+LzU+FaVHLxfMw7iHUmu6ULLcHbqHV2okXMAw0iPgdPR+Ub3xg12dIgLMR0lBqNOoCOCVC/1Y/U3LRQNmkf9/tUNEVLRW86VYxbZMLqixAnhxO2AS802acF4IryCE2NqMmSO10H8oBFP/BCsMHzcq6/z+T1LeYG9UVGBI0QQE8J0Hrw18zLgY/Auaz3llWITxBngHZJvFYsoqSkulHtaQYDYhapW+dbxCX+VBRL/BsCfhX56Br3lIRhGjVlSRCBsnHk98Iq4AuTj+ZnRwJETHvpcXukz7j4tz2sfHhEgXlQh4EnEO+Z9BnEWxQJUC+0tHT2OYv0mdClAXEOOydAJ9nYMEPvjZaBAgiWHIvZ0Ym603bU6j/UT2JFAASC2VYeckA+tBW7LM0m6kpLWe7ux8tyijrkrHFvWWnlbkfNK8BviAuBDXVLdE2A3E3wbS9JgYg9YgN4nb8CLzr3PYy4FXgd8aBdvJ8D/39Yo33TS01eAtyFlow8YRz2/y7AiMlvA/5o2qq2uduYYCuSGzBiFysHIowXnc+YTrS43MW9063HeYyL0Ntdo7hgwfOIjw3EFcC8/5WXpjwF9iPetDRxv5cA/wFag/jWAFf3vgAAAABJRU5ErkJggg=="
              placeholder={t("login.passwordTips" /**请输入密码 */)}
              rules={[
                {
                  required: true,
                  message: t("login.passwordTips" /**请输入密码 */),
                },
              ]}
            />
            <Button
              round
              block
              type="primary"
              size="small"
              native-type="submit"
            >
              {t("login.loginBtn" /**登录 */)}
            </Button>
          </Form>
          <div class="login-footer flex-between">
            <span
              class="link"
              onClick={() =>
                router.push({ name: RouterNameEnum.FORGETPASSWORD })
              }
            >
              {t("login.forgetPassword" /**忘记密码 */)}
            </span>
            <Checkbox
              v-model={loginStore.rememberPassword}
              shape="square"
              icon-size="16px"
            >
              {t("login.savePassword" /**记住密码 */)}
            </Checkbox>
            <span
              class="link"
              onClick={() => router.push({ name: RouterNameEnum.REGISTER })}
            >
              {t("login.register" /**免费注册 */)}
            </span>
          </div>
        </div>
      </div>
    );
  },
});
