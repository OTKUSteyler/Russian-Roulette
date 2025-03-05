import { registerSettings } from "@vendetta/settings";
import Settings from "./Settings"; // Make sure it's capitalized
import { storage } from "@vendetta/plugin";
import { findByProps } from "@vendetta/metro";
import { showToast } from "@vendetta/ui/toasts";

let MessageActions: any;

// Plugin initialization
export function onLoad() {
    registerSettings("Russian Roulette", Settings);

    console.log("[Russian Roulette] Loading...");

    // Try to find message acknowledgment functions
    MessageActions = findByProps("ack", "ackMessage", "markRead");

    if (!MessageActions) {
        console.error("[Russian Roulette] No message acknowledgment functions found.");
        showToast("Error: No valid message functions found!", { type: "danger" });
        return;
    }

    console.log("[Russian Roulette] Plugin loaded successfully.");
}

// Plugin unload cleanup
export function onUnload() {
    console.log("[Russian Roulette] Unloaded.");
}
