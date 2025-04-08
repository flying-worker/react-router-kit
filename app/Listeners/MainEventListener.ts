import { BaseListener } from "flying-worker/event";

export default class MainEventListener extends BaseListener {
	async process(): Promise<void> {
		return await (async () => {})();
	}
}
