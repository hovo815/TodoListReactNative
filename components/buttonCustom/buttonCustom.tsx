
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export interface IButtonCustom {
    done?: boolean;
    cancel?: boolean;
    addButton?: boolean;
    handleSubmit?: () => void;
    click?: () => void;
    setIsButton?: any;
    isButton?: any;
    textButton?: string;
    color?: string;
    borderColor?: string;
    width?:number,
}

export const ButtonCustom: React.FC<IButtonCustom> = ({
    color,
    click,
    width,
    cancel,
    isButton,
    addButton,
    textButton,
    setIsButton,
    borderColor,
    handleSubmit,
}) => {
    const add = require('../../assets/images/Add.png')
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={addButton ?
                    [styles.button, {width:width}] : [styles.buttonCancel,
                    {
                        borderColor: borderColor,
                        borderWidth: 1,
                        height: 36,
                        width: width,
                        margin:15
                    }]}
                onPress={() => {
                    handleSubmit && handleSubmit();
                    setIsButton && addButton && setIsButton(true)
                    setIsButton && cancel && setIsButton(false)
                    click && click()
                }}>
                {addButton ? null : <Text style={{ color: color }}>
                    {/* {done ? 'Done' : null}
                    {cancel ? 'Cancel' : null} */}
                    {textButton}
                </Text>
                }
                {addButton ? <Image source={add} style={styles.buttonAdd} /> : null}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(95, 51, 225, 1)',
        marginBottom: 35,
        borderRadius: 100,
        height: 50,
        width: 50,
    },
    buttonAdd: {
        height: 24,
        width: 24,
    },
    buttoDone: {
        backgroundColor: 'rgba(95, 51, 225, 1)',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        width: 121,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    buttonCancel: {
        borderWidth: 1,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        width: 121,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    container: {
        // paddingBottom:19
    },
});
