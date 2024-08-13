# Typescript 模板规范

::: details 注意事项

1. 在声明 prop 的时候，其命名应该始终使用 camelCase 并且尽量配置高级选项，如类型检测、自定义验证和设置默认值
2. 定义常量全部大写，单词拼接使用下划线
3. 使用 hooks 的时候，应该以 use 开头，例如 useMousePosition
   :::

```ts
// 1 引入外部库
import { defineComponent, reactive, ref, toRefs, computed, toRaw, watch } from 'vue';
import { MUtils } from '@paas/paas-library';
import type { MFormInstance } from '@paas/paas-design';
import { debounce } from 'lodash';

// 2 引入内部依赖
import { StateModel, ModalTypeModel} from './type';
import { RULES, NAME} from './constant';  //引入常量

export default defineComponent({
    components:{
        ...注册组件
    },

    // props
    props: {
      recruitOptions: {
        type: Array,
        required: true,
        default: () => []
      },
      campusOptions: {
        type: Array,
        required: true,
        default: () => []
      }
    },

    setup() {
        // hooks

        // refs
        // 页面组件实例集合
        const components = {
          editNodeRef:  ref<ModalTypeModel | null>(null)
        };

        //常量集中声明，解构导出
        const constants ={
          RULES: RULES,
          NAME: NAME
        }

        // state 模版属性(直接关联在模版上)
        const state = reactive<StateModel>({
            loading: false,
            isLoading: computed(() => {
                return state.loading
            })
            ...
        })

        // 内部计算状态，无需抛给模版只作为逻辑状态暂存
        const data = {
            isFirstChange: false
            ...
        }

        // methods
        const methods = {
            /**
             * 初始化方法
             * @description 初始化方法需加上‘init’前缀标识
             */
            init() {
                ...
            },
            /**
             * 更新方法
             */
            update() {
                ...
            },
            /**
             * 删除方法
             */
            remove() {
                ...删除逻辑
                methods.delete()
            },
            /**
             * 模版上的事件方法
             * @description 模版上的事件方法声明必须加上 ’on‘的前缀标识是模版事件方法
             */
            onTabClick() {
                ...
            },
            /**
             * 获取数据
             * @description 获取数据的方法声明必须加上‘get’的前缀标识
             * @return 返回值为字符串类型，返回值是xx信息
             */
            getTabValue(): string {
                return '获取到数据了'
            },
            /**
             * 设置值
             * @description 设置数据的方法声明必须加上‘set’的前缀标识
             * @params value为xx信息
             */
            setTabValue(value: string) {
                ...
            }
        }

        methods.init()   //直接调用

        // watch
        watch(() => state.loading, (newVal) => {
            ...
        })

        // lifecicle
        onBeforeUnmount(() => {
            methods.init();
        })

        // return
        return {
            ...components,
            ...constants,
            ...toRefs(state),
            ...methods
        }
    }
})
```
