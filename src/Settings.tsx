import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { General } from "@vendetta/ui/components";

const { View, Text, Switch } = General;

export default function Settings() {
    useProxy(storage);

    return (
        <View>
            <Text>Enable Russian Roulette?</Text>
            <Switch
                value={storage.enabled ?? true}
                onValueChange={(value) => (storage.enabled = value)}
            />
        </View>
    );
}
