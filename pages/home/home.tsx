import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
    TouchableWithoutFeedback,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    FlatList,
    Image,
    Text,
    View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonCustom, TextInputCustom } from '../../components';
import { dismissKeyboard } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
    updateStatusThunks,
    editStatusThunks,
    deleteTodoThunks,
    addTodoThunks,
    getTodoThunks,
    authThunks,
    getTodo,
} from '../../services';

const initialValues: any = {
    title: '',
    description: '',
};
export default function Home() {
    const [text, setText] = useState('');
    const [isButton, setIsButton] = useState(false);
    const [isModal, setModal] = useState(false);

    const dispatch = useAppDispatch();
    const select = useAppSelector(getTodo);
    const deleteIcon = require('../../assets/images/Delete.png');
    const editIcon = require('../../assets/images/Edit.png');

    const ellipse = require('../../assets/images/Ellipse.png');
    const ellipseRed = require('../../assets/images/Ellipse.png');
    const ellipseOringe = require('../../assets/images/Ellipse.png');

    useEffect(() => {
        dispatch(authThunks());
    }, []);

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <LinearGradient
                colors=
                {[
                    '180deg, #46F080 0%, rgba(70, 240, 138, 0.15) 100%',
                    '180deg, #EDF046 0%,rgba(240, 233, 70, 0.15)',
                    '180deg, #5F27FF 0%, rgba(202, 184, 255, 0.15)',
                    '180deg, #F0B646 0%, rgba(240, 203, 70, 0.15)',
                    '180deg, #46BDF0 0%, rgba(70, 179, 240, 0.15)',
                    '180deg, #7C46F0 0%, rgba(124, 70, 240, 0.15) 100%',]}
                style={{ height: '100%' }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Formik
                    style={styles.wrapper}
                    initialValues={initialValues}
                    onSubmit={values => {

                        if (values.description.length >= 2 && values.title.length >= 2) {
                            dispatch(addTodoThunks(values))
                            dispatch(getTodoThunks());
                            setIsButton(false);
                        }
                    }}
                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                    }) => (
                        <View style={styles.wrapper}>
                            <Text style={styles.headerTitle}>My To-Do</Text>
                            <SafeAreaView style={{ height: 225 }}>
                                <FlatList
                                    data={select}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.container}
                                            onPress={() => {
                                                setModal(!isModal)
                                            }}
                                        >
                                            <View style={styles.contant}>
                                                <View style={styles.imageContainer}>
                                                    <Image source={
                                                        item.status == 'pending' ? ellipse : null ||
                                                            item.status == 'Done' ? ellipseRed : null ||
                                                                item.status == 'WontDo' ? ellipseOringe : null
                                                    } style={styles.ellipse} />
                                                </View>
                                                <View style={styles.textContainer}>
                                                    <View style={styles.textContent}>
                                                        <Text style={styles.title}>{item?.title}</Text>
                                                        <Text style={styles.subtitle}>{item?.description}</Text>
                                                    </View>
                                                    <View style={styles.iconContainer}>

                                                        <TouchableOpacity onPress={() => {
                                                            dispatch(editStatusThunks(item.id))
                                                            // dispatch(getTodoThunks())
                                                        }}>
                                                            <Image source={editIcon} style={styles.icon} />
                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={() => {
                                                            dispatch(deleteTodoThunks(item.id))
                                                            dispatch(getTodoThunks())
                                                        }}>
                                                            <Image source={deleteIcon} style={styles.icon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                            {isModal ? <View style={styles.cardButtonContant}>
                                                <ButtonCustom
                                                    width={80}
                                                    color='rgba(36, 37, 44, 1)'
                                                    borderColor='rgba(252, 191, 73, 1)'
                                                    textButton='Pending'
                                                    click={() => {
                                                        dispatch(updateStatusThunks(item.id))
                                                        dispatch(getTodoThunks());
                                                    }}
                                                />
                                                <ButtonCustom
                                                    width={80}
                                                    borderColor='rgba(88, 129, 87, 1)'
                                                    textButton='Done'
                                                    click={() => {
                                                        dispatch(updateStatusThunks(item.id))
                                                        dispatch(getTodoThunks());
                                                    }}
                                                />
                                                <ButtonCustom
                                                    width={80}
                                                    color='rgba(36, 37, 44, 1)'
                                                    borderColor='rgba(214, 40, 40, 1)'
                                                    textButton='Won’t do'
                                                    click={() => {
                                                        dispatch(updateStatusThunks(item.id))
                                                        dispatch(getTodoThunks());
                                                    }}
                                                />
                                            </View> : null}
                                        </TouchableOpacity>
                                    )}
                                />
                            </SafeAreaView>
                            {
                                isButton ? <View style={styles.midleContainer}>
                                    <TextInputCustom
                                        handleChange={handleChange}
                                        placeholder="Title"
                                        height={40}
                                        value={values.title}
                                        fieldName="title"
                                    />

                                    <TextInputCustom
                                        handleChange={handleChange}
                                        placeholder="Description"
                                        paddingButton={100}
                                        marginTop={12}
                                        value={values.description}
                                        fieldName="description"
                                        multiline={true}
                                    />
                                    <View style={styles.formDonCansButton}>
                                        <ButtonCustom
                                            cancel
                                            color='rgba(95, 51, 225, 1)'
                                            borderColor='rgba(95, 51, 225, 1)'
                                            width={121}
                                            textButton='cancel'
                                            setIsButton={setIsButton}
                                        />
                                        <ButtonCustom
                                            color='rgba(95, 51, 225, 1)'
                                            borderColor='rgba(95, 51, 225, 1)'
                                            width={121}
                                            textButton='done'
                                            handleSubmit={handleSubmit}
                                        />
                                    </View>
                                </View>
                                    : null
                            }
                            <View style={styles.buttonContainer}>
                                <ButtonCustom
                                    addButton
                                    width={50}
                                    setIsButton={setIsButton}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        // height:800 ,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },


    gradient: {
    },
    wrapper: {
        flex: 1,
        paddingTop: 28,
        paddingRight: 22,
        paddingBottom: 0,
        paddingLeft: 22,
    },
    headerTitle: {
        // flex: 1,
        color: '#24252C',
        fontSize: 19,
        fontWeight: '600',
        lineHeight: 23.75,
        textAlign: 'center',
        marginBottom: 30,
    },
    container: {
        marginBottom: 17,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 5,
    },
    contant: {
        flexDirection: 'row',
    },
    cardButtonContant: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        padding: 8,
    },
    ellipse: {
        width: 16,
        height: 16,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    formDonCansButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContent: {

    },
    title: {
        fontSize: 9,
        fontWeight: '400',
        lineHeight: 11,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
    },
    iconContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 16,
    },
    midleContainer: {
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginBottom: 5,
        padding: 22,
        marginTop: 12
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
});
