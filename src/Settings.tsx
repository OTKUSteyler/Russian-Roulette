import { React } from "@vendetta/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormRow, FormSwitch, FormSection, FormDivider, FormInput, FormText } = Forms;

// Simple utility to ensure we update storage properly
const updateSetting = (key: string, value: any) => {
    storage.settings[key] = value;
    // Force a UI update if needed
    if (window.__vendetta_common?.FluxDispatcher) {
        window.__vendetta_common.FluxDispatcher.dispatch({ type: "VENDETTA_SETTINGS_UPDATE" });
    }
};

// Define the settings component with compatibility for older versions
export default () => {
    // Create local state if needed for version compatibility
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    
    // Helper to get setting with default value
    const getSetting = (key: string, defaultValue: any) => {
        return storage.settings[key] ?? defaultValue;
    };

    return (
        <>
            <FormSection title="Basic Settings">
                <FormRow
                    label="Exclude this plugin"
                    subLabel="Prevent this plugin from being removed by its own roulette"
                    leading={<FormRow.Icon source={{ uri: "https://cdn.discordapp.com/emojis/1098182204997910610.webp" }} />}
                    trailing={
                        <FormSwitch
                            value={getSetting("excludeSelf", true)}
                            onValueChange={(value: boolean) => {
                                updateSetting("excludeSelf", value);
                                forceUpdate();
                            }}
                        />
                    }
                />

                <FormRow
                    label="Allow reroll"
                    subLabel="Enable this to allow multiple attempts (no punishment)"
                    leading={<FormRow.Icon source={{ uri: "https://cdn.discordapp.com/emojis/1097457501932408933.webp" }} />}
                    trailing={
                        <FormSwitch
                            value={getSetting("allowReroll", false)}
                            onValueChange={(value: boolean) => {
                                updateSetting("allowReroll", value);
                                forceUpdate();
                            }}
                        />
                    }
                />
            </FormSection>

            <FormDivider />

            <FormSection title="Advanced Settings">
                <FormRow
                    label="Skip confirmation"
                    subLabel="Remove plugins without asking for confirmation (dangerous!)"
                    leading={<FormRow.Icon source={{ uri: "https://cdn.discordapp.com/emojis/1097457529678319706.webp" }} />}
                    trailing={
                        <FormSwitch
                            value={getSetting("skipConfirmation", false)}
                            onValueChange={(value: boolean) => {
                                updateSetting("skipConfirmation", value);
                                forceUpdate();
                            }}
                        />
                    }
                />
            </FormSection>

            <FormSection title="Information">
                <FormText>
                    Russian Roulette plugin will randomly remove one of your installed plugins when you lose.
                    Be careful - this can remove important plugins!
                </FormText>
            </FormSection>
        </>
    );
};
