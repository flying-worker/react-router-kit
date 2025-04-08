import { BaseListener } from "flying-worker/event";

export default class TestQueuedEventListener extends BaseListener {
	async process(): Promise<void> {
		return await (async () => {})();
	}
}
