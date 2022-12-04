import { createVNode, defineComponent, Transition, VNode } from "vue";
import { RouterView, RouteLocationNormalizedLoaded } from "vue-router";

export default defineComponent({
  name: "RootRouterView",
  setup(_props, { slots }) {
    return () => (
      <RouterView
        v-slots={{
          default: ({
            Component,
          }: {
            Component: VNode;
            route: RouteLocationNormalizedLoaded;
          }) => (
            <Transition name="fade" appear>
              {Component && createVNode(Component)}
            </Transition>
          ),
        }}
      />
    );
  },
});
