import { registerSettings } from "@vendetta/settings";
import { showToast } from "@vendetta/ui/toasts";
import { uninstallPlugin, plugins } from "@vendetta/plugins";
import settings from "./Settings";

export const playRoulette = () => {
    const pluginList = Object.keys(plugins);
    
    if (pluginList.length === 0) {
        showToast("No plugins installed to remove.", { type: "info" });
        return;
    }

    const randomIndex = Math.floor(Math.random() * pluginList.length);
    const selectedPlugin = pluginList[randomIndex];

    uninstallPlugin(selectedPlugin);
    showToast(`Plugin "${selectedPlugin}" has been removed.`, { type: "danger" });
};

export const onLoad = () => {
    registerSettings("Russian Roulette", settings);
};

export const onUnload = () => {
    registerSettings("Russian Roulette", null);
};
