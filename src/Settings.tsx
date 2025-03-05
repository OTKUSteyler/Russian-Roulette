import { useState } from "react";
import { playRoulette } from "./index";
import { Forms } from "@vendetta/ui/components";

const { FormSection, FormRow, FormText } = Forms;

export default () => {
    const [result, setResult] = useState("");

    return (
        <FormSection title="Russian Roulette">
            <FormRow
                label="Play Plugin Roulette"
                onPress={() => setResult(playRoulette())}
            />
            {result ? <FormText>{result}</FormText> : null}
        </FormSection>
    );
};
