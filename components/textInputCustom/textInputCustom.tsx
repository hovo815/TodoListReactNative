import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export interface IInputProps {
    text?: string;
    setText?: (text: string) => void;
    placeholder?:string;
    height?:number;
    marginTop?:number;
    value?:string;
    handleChange?:any;
    //handleChange?: () => void;
    fieldName?:string;
    // name:any
     paddingButton?:number;
     multiline?:boolean
}

export const TextInputCustom: React.FC<IInputProps> = ({ 
    text, 
    setText, 
    placeholder,
    multiline,
    height,
    marginTop,
    value,
    handleChange,
    fieldName,
     paddingButton,
    // name 
}) => {
    return (
        <View style={styles.container}>
            <TextInput
            //    name={text}
                style={[styles.input, { height:height,marginTop:marginTop, paddingBottom:paddingButton}]}  
                placeholder={placeholder}
                placeholderTextColor="#888" 
                // onChangeText={(text) => setText(text)}  
                value={value} 
                multiline={multiline}
                // name={fieldName}
                onChangeText={handleChange(fieldName as string)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
    },
    input: {
        borderRadius: 8,  
        paddingHorizontal: 16, 
        fontSize: 16,  
        backgroundColor: 'rgba(252, 250, 255, 1)',
        paddingVertical:10
    },
});

