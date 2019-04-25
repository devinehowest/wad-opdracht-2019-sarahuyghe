import { decorate, observable } from "mobx";

class UiStore {
	authUser = null;
}

decorate(UiStore, { authUser: observable });

export default UiStore;
