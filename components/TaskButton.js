import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function ClassButton({ name, due, onPress, tag1, color1, tag2, color2 }) {
    const [isChecked, setChecked] = useState(false)
    const [tagstate1, setTagstate1] = useState(!!tag1);
    const [tagstate2, setTagstate2] = useState(!!tag2);
    // if (tag1){
    //     setTagstate1(true)
    // } this gives fatal error i dont even know how maybe cause constant re render ho raha hai? huh
    // if (tag2){
    //     setTagstate2(true)
    // }
    return (
        <Pressable
            onPress={() => {
                setChecked(!isChecked);
                if (onPress) onPress();
            }}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#b9b9b9ff',
                padding: 15,
                borderRadius: 10,
                margin: -5,
                opacity: isChecked ? 0.5 : 1 
            }} 
        >
            <Checkbox.Android
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!isChecked)}
                color="#007AFF"          
                uncheckedColor="#565555ff" 
            />

            <View style={{ flexDirection: 'column', marginLeft: 15}}>
                <Text style={{ fontSize: 17, fontWeight: '600', textDecorationLine: isChecked ? 'line-through' : 'none' }}>{name}</Text>
                {tagstate1 ? <View style={{ flexDirection: 'row', gap: 6, marginTop: 4, alignItems: 'center' }}>
                {tagstate1 ? <Text style={{ fontSize: 13, fontWeight: '400', backgroundColor: color1, padding: 2, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, width: 'fit-content', borderRadius: 100 }}>{tag1}</Text> : null}
                {tagstate2 ? <Text style={{ fontSize: 13, fontWeight: '400', backgroundColor: color2, padding: 2, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, width: 'fit-content', borderRadius: 100 }}>{tag2}</Text> : null}
                </View> : null}
                <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555', marginTop: 4 }}>Due: {due}</Text>
            </View>
        </Pressable>
    );
}
