import axios from "axios";

export const getGeneralData = async (sessionId) => {
  const grpName =
    "VanSalePackageInfo,AccountExpense,product_order_category,Manufacturer,DMSProductListHeaderList,ProductListingSorting,PaymentMode,clienttype,PurchaseQuantity,discounttypes,billdiscountper,repeatavgpendingorder,purchasequantity,searchproductlist,newproductformfilter,searchproducttype,godownforsalereturn,dmsinventorylabelunittype,clienttypeforsale,clienttypefororder,clienttypeforreturn,intergodowntransfer,dmssalebillinggallary,selectbillfor,productdivision,dmsreturnproducttype,selectreturnfor,godownforsalereturn,dmspackageinfosequence,clienttypeforsalereturn,returnproductissue,dmsproductcategoryfilter,ClientTypeForReceiving,PurchaseSource,ClaimTopSheetFilter,DMSselectInfo5duringOrder,DmsAdditionCharges";

  const res = await axios.post("/api/Lead/GetGeneralData", {
    SessionId: sessionId,
    GroupName: grpName
  });

  return res.data;
};

export const GetZoneStateCity = (generalData = []) => {
  const zoneData = [];
  const stateData = [];
  const cityData = [];
  const areaData = [];

  generalData.forEach(zone => {
    if (zone.GroupName?.toLowerCase() !== "employeezone") return;

    zoneData.push(zone);

    zone.Child?.forEach(state => {
      stateData.push(state);

      state.Child?.forEach(city => {
        cityData.push(city);

        city.Child?.forEach(area => {
          areaData.push(area);
        });
      });
    });
  });

  return { zoneData, stateData, cityData, areaData };
};
