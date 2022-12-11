import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, CellGroup, Cell, Icon } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import defaultUserIcon from "@/assets/image/head.png";
import "./PersonalInformation.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const pageListRef = ref<PageListRefType | null>(null);
    const store = reactive({
      tabActive: 0,
      amount: "",
      list: [1, 2, 3, 4, 5],
      total: 5,
      pages: 20,
      current: 1,
      showPicker: false,
      time: "",
    });
    const getListApi = () => {};
    const timeConfirm = () => {};
    const userList = [
      {
        icon: "user-circle-o",
        label: "头像",
        right: () => <img src={defaultUserIcon} alt="" />,
      },
      {
        icon: "manager-o",
        label: "用户名",
        right: () => "xiaoai",
      },
      {
        icon: "phone-circle-o",
        label: "手机号",
        right: () => "14858484884",
      },
      {
        icon: "comment-circle-o",
        label: "姓名",
        right: () => "",
      },
      {
        icon: "idcard",
        label: "身份证",
        right: () => "",
      },
      {
        icon: "balance-pay",
        label: "钱包管理",
        right: () => "",
      },
      {
        icon: "sign",
        label: "密码管理",
        right: () => "",
      },
      {
        icon: "ecard-pay",
        label: "交易密码管理",
        right: () => "",
      },
      {
        icon: "cash-back-record",
        label: "交易密码管理",
        right: () => "",
      },
      {
        icon: "records",
        label: "实名认证",
        right: () => "",
      },
    ];
    return () => (
      <div class="personal-info">
        <NavBar
          title={t("personalInfo.title" /**个人信息 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="personal-info-content">
          <CellGroup>
            {userList.map((item) => (
              <Cell
                is-link
                v-slots={{
                  title: () => (
                    <div class="left-cell flex-start">
                      <Icon name={item.icon} />
                      <span class="label">{item.label}</span>
                    </div>
                  ),
                  value: () => (
                    <div class="right-cell flex-end">{item.right()}</div>
                  ),
                }}
              />
            ))}
          </CellGroup>
        </div>
      </div>
    );
  },
});
