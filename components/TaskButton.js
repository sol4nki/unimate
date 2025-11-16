import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Tag from '../assets/icons/tag.svg';

export default function ClassButton({ name, due, onPress, tag1, color1, tag2, color2, completed, onToggle }) {
    // const [isChecked, setChecked] = useState(false)
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
                onToggle();
                if (onPress) onPress();
            }}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ffffffff',
                padding: 15,
                borderRadius: 10,
                margin: -5,
                opacity: completed ? 0.5 : 1 
            }} 
        >
            <Checkbox.Android
                status={completed ? 'checked' : 'unchecked'}
                onPress={onToggle}
                color="#007AFF"
                uncheckedColor="#565555ff"
            />

            <View style={{ flexDirection: 'column', marginLeft: 15}}>
                <Text style={{ fontSize: 17, fontWeight: '600', textDecorationLine: completed ? 'line-through' : 'none' }}>{name}</Text>
                {tagstate1 ? <View style={{ flexDirection: 'row', gap: 6, marginTop: 4, alignItems: 'center' }}>
                {tagstate1 ? <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: color1, paddingVertical: 2, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, borderRadius: 100 }}>
                <Tag width={12} height={12} style={{ marginRight: 4 }} /> 
                <Text style={{ fontSize: 13, fontWeight: '400', color: 'white' }}>{tag1}</Text>
                </View> : null}
                {tagstate2 ? <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: color2, paddingVertical: 2, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, borderRadius: 100 }}>
                <Text style={{ fontSize: 13, fontWeight: '400', color: 'white' }}>{tag2}</Text></View> : null}
                </View> : null}
                <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555', marginTop: 4 }}>Due: {due}</Text>
            </View>
        </Pressable>
    );
}
