import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, Button, NavBar, Icon } from "vant";
import { RouterNameEnum } from "@/common";
import "./ForgetPassword.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    return () => (
      <div class="forget">
        <NavBar
          title="找回密码"
          fixed
          safe-area-inset-top
          v-slots={{
            left: () => (
              <Icon
                name="cross"
                size="20"
                onClick={() => router.push({ name: RouterNameEnum.LOGIN })}
              />
            ),
          }}
        />
        <div class="forget-form">
          <Form>
            <Field
              type="tel"
              placeholder="请输入手机号"
              rules={[{ required: true, message: "请输入手机号" }]}
              v-slots={{
                button: (
                  <Button round block type="primary" size="mini">
                    发送验证码
                  </Button>
                ),
              }}
            />
            <Field
              // v-model="username"
              // name="用户名"
              // label="用户名"
              type="number"
              placeholder="请输入短信验证码"
              rules={[{ required: true, message: "请输入短信验证码" }]}
            />
            <Field
              // v-model="username"
              // name="用户名"
              // label="用户名"
              type="password"
              placeholder="请输入密码"
              rules={[{ required: true, message: "请输入密码" }]}
            />
            <Field
              // v-model="username"
              // name="用户名"
              // label="用户名"
              type="password"
              placeholder="请确认密码"
              rules={[{ required: true, message: "请确认密码" }]}
            />
            <div class="forget-footer">
              <Button round block type="primary" size="small">
                提交
              </Button>
              <Button
                round
                block
                plain
                type="primary"
                size="small"
                onClick={() => router.push({ name: RouterNameEnum.LOGIN })}
              >
                已有账号, 去登录
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  },
});
