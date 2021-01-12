import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { ClientStateModel } from "./client-state-model";
import {CreateClient, DeleteClient} from '../actions/client-action';
import {Client} from '../client';

@State<ClientStateModel>({
  name: "client",
  defaults: {
    client : {
      nom: '',
      prenom: '',
      adresse: '',
      codepostal: '',
      ville: '',
      pays: '',
      tel: '',
      mail: '',
      login: '',
      pass: '',
      passwdConf: '',
      civilite: ''
    }
  }
})
export class ClientState {
  @Selector()
  static getClient(state: ClientStateModel): Client {
    if(state.client.login == ''){
      console.log("disconnected");
      return undefined;
    }
    console.log("connected");
    return state.client;

  }

  @Action(CreateClient)
  Create(
    { getState, patchState }: StateContext<ClientStateModel>,
    { payload }: CreateClient
  ) {
    const state = getState();
    patchState({
      client : payload
    });
  }

  @Action(DeleteClient)
  del(
    { getState, patchState }: StateContext<ClientStateModel>,
    { payload }: DeleteClient
  ) {
    const state = getState();
    patchState({
      client : payload
    });
  }



}
