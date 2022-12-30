import { reactive, computed } from "vue";
import {
  // GoodsListRequest,
  // GoodsDetailsRequest,
  // PositionRequest,
  MfundListRequest,
  MfundByIdRequest,
  FundsByIdRequest,
  FundsListRequest,
  BuyMRequest,
  SellMRequest,
  SellRequest,
  BuyRequest,
  FundsNetValuesRequest,
  ListType,
  FundsItemType,
  FundsMItemType,
  ProductStoreType,
} from "@/common";

const productStore = reactive<ProductStoreType>({
  productList: [],
  productPageNum: 1,
  productPageSize: 10,
  productTotal: 0,
  productPages: 0,

  productDetails: {} as FundsMItemType,

  fundsList: [],
  fundsPageNum: 1,
  fundsPageSize: 10,
  fundsTotal: 0,
  fundsPages: 0,
  fundsDetails: {} as FundsItemType,

  fundsNetValuesChart: [],
});
/**
 * 产品相关逻辑
 */
export function useProduct() {
  const productDetails = computed<FundsItemType>(
    () => productStore.fundsDetails
  );
  const fundsNetValuesChart = computed<Record<string, number>[]>(
    () => productStore.fundsNetValuesChart
  );

  // 货币基金
  const getMonetaryFundList = async () => {
    try {
      const { data } = await MfundListRequest<any, ListType<FundsMItemType>>({
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

  // 货币基金详情
  const getMonetaryFundDetails = async (id: number) => {
    try {
      const { data } = await MfundByIdRequest<
        { id: number },
        { data: FundsMItemType }
      >({ id });
      productStore.productDetails = data.data;
    } catch (error) {}
  };

  // 基金
  const getFundList = async () => {
    try {
      const { data } = await FundsListRequest<any, ListType<FundsItemType>>({
        pageNum: productStore.fundsPageNum,
        pageSize: productStore.fundsPageSize,
      });
      productStore.fundsPageNum = data.currentPage;
      productStore.fundsTotal = data.total;
      productStore.fundsPages = Math.ceil(
        data.total / productStore.fundsPageSize
      );
      productStore.fundsList = data.list;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // 基金详情
  const getFundDetails = async (id: number) => {
    try {
      const { data } = await FundsByIdRequest<
        { id: number },
        { data: FundsItemType }
      >({ id });
      productStore.fundsDetails = data.data;
    } catch (error) {}
  };

  // 购买基金
  const buyFund = async (count: number, fundId: string) => {
    try {
      await BuyRequest({ number: count, fundId });
    } catch (error) {}
  };

  // 出售基金
  const sellFund = async (order: number, count: number, force: number) => {
    try {
      await SellRequest({ number: count, order, force });
    } catch (error) {}
  };

  // 转入货币基金
  const buyMonetaryFund = async (count: number, fundId: string) => {
    try {
      await BuyMRequest({ number: count, fundId });
    } catch (error) {}
  };

  // 转出货币基金
  const sellMonetaryFund = async (
    order: number,
    count: number,
    force: number
  ) => {
    try {
      await SellMRequest({ number: count, order, force });
    } catch (error) {}
  };

  // 基金净值曲线图
  const getFundsNetValues = async (id: number) => {
    try {
      const { data } = await FundsNetValuesRequest<
        { id: number },
        { list: Record<string, number>[] }
      >({ id });
      productStore.fundsNetValuesChart = data.list;
    } catch (error) {}
  };

  return {
    productStore,
    productDetails,
    fundsNetValuesChart,
    getMonetaryFundList,
    getMonetaryFundDetails,
    getFundList,
    getFundDetails,
    buyMonetaryFund,
    sellMonetaryFund,
    buyFund,
    sellFund,
    getFundsNetValues,
  };
}
