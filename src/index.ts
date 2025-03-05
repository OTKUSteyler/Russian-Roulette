import { registerSettings } from "@vendetta/settings";
import settings from "./Settings";

export const onLoad = () => {
    registerSettings("Russian Roulette", settings);
};

export const onUnload = () => {
    registerSettings("Russian Roulette", null);
};
