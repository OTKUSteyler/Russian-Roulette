import { useState } from "react";
import { View, Text, Button } from "@vendetta/metro/common";
import { playRussianRoulette } from "./index";

const Settings = () => {
    const [lastRoll, setLastRoll] = useState(null);

    const handleRoll = () => {
        playRussianRoulette();
        setLastRoll(Date.now()); // Refresh UI when rolled
    };

    return (
        <View>
            <Text>Press the button to play Russian Roulette with your plugins.</Text>
            <Button text="Roll the Dice!" onPress={handleRoll} />
        </View>
    );
};

export default Settings;
