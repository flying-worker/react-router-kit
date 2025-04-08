import MainEventListener from "@/app/Listener/MainEventListener";
import TestQueuedEventListener from "@/app/Listener/TestQueuedEventListener";
import { Events } from "flying-worker/types";

export const eventListener: Events = {
	"update-product": () => {},
	"update-admin": MainEventListener,
	"ai-process": TestQueuedEventListener,
};
