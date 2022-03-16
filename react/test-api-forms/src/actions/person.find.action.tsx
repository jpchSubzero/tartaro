import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { IPersonFindResponseResult } from '../interfaces/integration/person/person.find.response.interface';
import { TypesAction } from '../types/types.action'

export const findPersonAction = (person:IPersonFindResponseResult | undefined):IActionReducer<IPersonFindResponseResult> => {
  if (!person) {
    return undefined!;
  }
  const action:IActionReducer<IPersonFindResponseResult> = {
    type: TypesAction.FIND_PERSON,
    payload: person
  }
  return action;
}
