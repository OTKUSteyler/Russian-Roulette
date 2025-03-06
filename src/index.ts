import { registerSettings } from "@vendetta/settings";
import Settings from "./Settings"; // Ensure the path is correct
import { findByProps } from "@vendetta/metro";
import { showToast } from "@vendetta/ui/toasts";

export function onLoad() {
  registerSettings("Russian Roulette", Settings);
}

export function onUnload() {
  // Perform any necessary cleanup here
}

export function playRoulette() {
  const PluginManager = findByProps("removePlugin", "getPlugins");

  if (!PluginManager) {
    showToast("Error: Plugin manager not found!", { type: "danger" });
    return;
  }

  const plugins = Object.keys(PluginManager.getPlugins());

  if (plugins.length <= 1) {
    showToast("No plugins available to remove!", { type: "warning" });
    return;
  }

  const randomIndex = Math.floor(Math.random() * plugins.length);
  const chosenPlugin = plugins[randomIndex];

  if (!chosenPlugin) {
    showToast("No plugin selected. Try again!", { type: "warning" });
    return;
  }

  PluginManager.removePlugin(chosenPlugin);
  showToast(`🔥 Russian Roulette removed: ${chosenPlugin}!`, { type: "danger" });
}
