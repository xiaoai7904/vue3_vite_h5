import { reactive, computed } from "vue";
import {
  GoodsListRequest,
  GoodsDetailsRequest,
  PositionRequest,
  ListType,
  ProductItemType,
  ProductStoreType,
} from "@/common";

const productStore = reactive<ProductStoreType>({
  productList: [],
  productPageNum: 1,
  productPageSize: 10,
  productTotal: 0,
  productPages: 0,

  productDetails: {} as ProductItemType,
});
/**
 * 产品相关逻辑
 */
export function useProduct() {
  const productDetails = computed<ProductItemType>(
    () => productStore.productDetails
  );

  // 产品列表
  const getProductList = async () => {
    try {
      const { data } = await GoodsListRequest<any, ListType<ProductItemType>>({
        pageNum: productStore.productPageNum,
        pageSize: productStore.productPageSize,
      });
      productStore.productPageNum = data.currentPage;
      productStore.productTotal = data.total;
      productStore.productPages = Math.ceil(
        data.total / productStore.productPageSize
      );
      productStore.productList = data.list;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // 产品详情
  const getProductDetails = async (id: number) => {
    try {
      const { data } = await GoodsDetailsRequest<
        { id: number },
        { data: ProductItemType }
      >({ id });
      productStore.productDetails = data.data;
    } catch (error) {}
  };

  // 持仓
  const getPositionList = async () => {
    try {
      await PositionRequest();
    } catch (error) {}
  };

  return {
    productStore,
    productDetails,
    getProductList,
    getProductDetails,
    getPositionList,
  };
}
