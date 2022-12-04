import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, Button, Checkbox, NavBar, Icon } from "vant";
import { RouterNameEnum } from "@/common";
import "./Register.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    return () => (
      <div class="register">
        <NavBar
          title="注册"
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
        <div class="register-form">
          <Form>
            <Field
              // v-model="username"
              // name="用户名"
              // label="用户名"
              placeholder="请输入真实姓名"
              rules={[{ required: true, message: "请输入真实姓名" }]}
            />
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
              placeholder="请确认交易密码"
              rules={[{ required: true, message: "请确认交易密码" }]}
            />
            <Field
              placeholder="请输入推荐码"
              rules={[{ required: true, message: "请输入推荐码" }]}
            />
            <Checkbox icon-size="14">
              我已知晓并同意<span class="agreement">“开户协议”</span>各项条约
            </Checkbox>
            <div class="register-footer">
              <Button round block type="primary" size="small">
                注册
              </Button>
              <Button
                round
                block
                plain
                type="primary"
                size="small"
                onClick={() => router.push({ name: RouterNameEnum.LOGIN })}
              >
                已有账号, 马上登录
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  },
});
