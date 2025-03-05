import { Forms } from "@vendetta/ui/components";
import { playRoulette } from "./Settings";

const { FormSection, FormRow, FormText } = Forms;

export default () => (
    <FormSection title="Russian Roulette Settings">
        <FormRow
            label="Play Plugin Roulette"
            onPress={playRoulette}
        />
        <FormText>
            Press "Play Plugin Roulette" to randomly remove an installed plugin.
        </FormText>
    </FormSection>
);
