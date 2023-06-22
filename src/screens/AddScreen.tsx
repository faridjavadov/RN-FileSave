import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState,useContext } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Context } from '../context/context';

const AddScreen = () => {
    const {filename,setfilename} = useContext(Context)

    const [file, setfile] = useState<any>()
    const upload = async() => {
        await launchImageLibrary({
            mediaType: 'photo'
        }, setfile)
    }

    const postFile = () => {
        const formData = new FormData();

        formData.append('img', {
            uri: file.assets[0].uri,
            name: file.assets[0].fileName,
            type: file.assets[0].type,
        })
        
        formData.append('uri', file.assets[0].fileName)
        axios.post('http://192.168.1.7:8080/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(data=>{
            console.log(data.data);
            
            setfilename(data.data)
        })
    }

    return (
        <View style={styles.container}>
            {
                file?<Image  source={{ uri:file.assets[0].uri }} style={{width:'100%',height:'40%'}}/>:<Text></Text> 
            }
            <Button title='Upload' onPress={upload} />
            <Button title='Post' onPress={postFile} />
        </View>
    )
}

export default AddScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        gap: 20,
        flex: 1,
        backgroundColor: '#15141F'
    }
})