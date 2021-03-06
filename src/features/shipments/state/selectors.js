import { createSelector } from "@reduxjs/toolkit";

export const getShipments = createSelector(
  (state) => state.shipments.shipmentsList,
  (shipmentsList) => shipmentsList
);
export const getSearchTerm = createSelector(
  (state) => state.shipments.searchTerm,
  (searchTerm) => searchTerm
);
