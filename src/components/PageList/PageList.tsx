import { defineComponent, reactive, computed, PropType } from "vue";
import { List, PullRefresh, Loading } from "vant";
import { useI18n } from "vue-i18n";
import pageListStyle from "./pageList.module.less";

type RequestParamsType = {
  current: number;
  size: number;
} & Record<string, any>;

export type PageListRefType = {
  resetStore: () => void;
  refreshList: () => void;
};

export default defineComponent({
  name: "PageListView",
  props: {
    contentStyle: { type: Object, default: () => ({ minHeight: "30vh" }) },
    requestApi: Function as PropType<() => any>,
    list: { type: Array as PropType<any[]>, default: () => [] },
    current: { type: Number as PropType<number>, default: 1 },
    total: { type: Number as PropType<number>, default: 0 },
    pages: { type: Number as PropType<number>, default: 0 },
    empty: { type: String as PropType<string>, default: "default" },
    isInit: { type: Boolean as PropType<boolean>, default: false },
  },
  emits: ["update:current"],
  setup(props, { emit, slots, expose }) {
    const { t } = useI18n();
    const state = reactive({
      refreshLoading: false,
      httpLoading: true,
      finished: false,
    });
    const isEmpty = computed(() => !props.list.length);

    const pageParams: RequestParamsType = { size: 10, current: props.current };

    const getList = async () => {
      state.httpLoading = true;
      if (props.requestApi) {
        await props.requestApi();
        state.httpLoading = false;
        if (state.refreshLoading) {
          state.refreshLoading = false;
          state.finished = false;
        }

        if (props.current >= props.pages && props.pages !== 0) {
          state.finished = true;
        }
        return;
      }
      state.httpLoading = false;
    };

    const onLoadList = () => {
      emit("update:current", props.current + 1);
      pageParams.current += 1;
      getList();
    };

    const refreshList = () => {
      resetStore();
      getList();
    };

    const resetStore = () => {
      state.finished = false;
      // state.httpLoading = true;
      emit("update:current", 1);
      pageParams.current = 1;
      state.httpLoading = false;
    };
    expose({ refreshList, resetStore });

    props.isInit && refreshList();

    return () => (
      <PullRefresh
        v-model={state.refreshLoading}
        onRefresh={refreshList}
        loosingText={t("common.loosingRefresh" /*释放即可刷新*/)}
        pullingText={t("common.pullRefresh" /* 松开刷新... */)}
        loadingText={t("common.loading" /* 加载中 */)}
      >
        {state.httpLoading}
        <div style={props.contentStyle}>
          {!isEmpty.value && (
            <List
              finished-text={t("common.pageListEnd" /*- 已加载全部内容 - */)}
              finished={state.finished}
              immediate-check={false}
              offset={200}
              v-model:loading={state.httpLoading}
              onLoad={onLoadList}
              loadingText={t("common.loadingText" /* 正在加载中... */)}
            >
              {slots.default?.(props.list)}
            </List>
          )}
          {/* {isEmpty.value && !state.httpLoading && <Empty type={props.empty} top={100} />} */}
          {isEmpty.value && state.httpLoading && (
            <div class={pageListStyle.pageListLoading}>
              <Loading />
            </div>
          )}
        </div>
      </PullRefresh>
    );
  },
});
