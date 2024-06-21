import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function Produk(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center'
        }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold',
            textAlign:"center",
        }}>Flatshoes</Text>
        <Text style={{
            fontSize:10,
            fontWeight:'bold',
        }}>produk</Text>
        <ScrollView>
        <Image source={{
            uri:("https://down-id.img.susercontent.com/file/26df645cdb1500592d004b74f5572470")
        }}style={{width:200,height:200,margin:5}} /> 
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.179.999, tersedia 50pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://id-live-01.slatic.net/p/5c6cd7a9fd8c93820bd7d0c0366214b7.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.169.999, tersedia 15pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image 
        source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-85586132/no-brand_no-brand_full01.jpg" )
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.947.200, tersedia 32pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-38362055/laviola_laviola_shoes_-_sepatu_flat_shoes_wanita_-_2912_lsh_full07_kh92kh4x.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.450.999, tersedia 16pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://down-id.img.susercontent.com/file/id-11134207-7r98t-lnazkf04n8qp33")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.369.999, tersedia 68pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://down-id.img.susercontent.com/file/9f6e6da41bd5d3dd7c1bcfea7f3955f6")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.550.999, tersedia 125pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/7/e6c9c84f-d680-4dd9-b76e-5bb46c9c82ac.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.649.999, tersedia 42pcs</Text>
        </ScrollView>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        </View>
    )
}