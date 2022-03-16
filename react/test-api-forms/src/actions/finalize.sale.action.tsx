import React from 'react'
import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { IFinalizeSaleResponse, IFinalizeSaleResponseResult } from '../interfaces/sale/finalize.sale.response.interface'
import { TypesAction } from '../types/types.action'

export const finalizeSaleAction = (sale:IFinalizeSaleResponse  | undefined):IActionReducer<IFinalizeSaleResponseResult> => {
  if (!sale?.result) {
    return undefined!;
  }
  const action:IActionReducer<IFinalizeSaleResponseResult > = {
    type: TypesAction.FINALIZE_SALE,
    payload: sale?.result
  }
  return action;
}
