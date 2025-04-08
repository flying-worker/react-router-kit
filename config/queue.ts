import { getEnv } from "flying-worker/core";
import { QueueConfig } from "flying-worker/types";

export const queue: QueueConfig = {
	bindingName: getEnv("QUEUE_BINDING_NAME", "MY_QUEUE"),
	syncQueue: getEnv("SYNC_QUEUE", false),
};
