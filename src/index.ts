import { registerSettings, unregisterSettings } from "@vendetta/settings";
import Settings from "./Settings";
import { findByProps } from "@vendetta/metro";
import { showToast } from "@vendetta/ui/toasts";

export const onLoad = () => {
  registerSettings("Russian Roulette", Settings);
};

export const onUnload = () => {
  unregisterSettings("Russian Roulette");
};

export const playRoulette = () => {
  const PluginManager = findByProps("removePlugin", "getPlugins");

  if (!PluginManager) {
    showToast("Error: Plugin manager not found!", { type: "danger" });
    return;
  }

  const plugins = Object.keys(PluginManager.getPlugins()).filter(
    (plugin) => plugin !== "Russian Roulette"
  );

  if (plugins.length === 0) {
    showToast("No plugins available to remove!", { type: "warning" });
    return;
  }

  const randomIndex = Math.floor(Math.random() * plugins.length);
  const chosenPlugin = plugins[randomIndex];

  PluginManager.removePlugin(chosenPlugin);
  showToast(`🔥 Russian Roulette removed: ${chosenPlugin}!`, { type: "danger" });
};
