import React from 'react';
import { Text, Image, View, StyleSheet, Button, ImageBackground } from 'react-native';

export default function HomeSreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://png.pngtree.com/thumb_back/fh260/background/20210823/pngtree-simple-aesthetic-wallpapers-image_768350.jpg'
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://www.matahari.com/media/amasty/shopby/option_images/LP_Laviola.png'
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Selamat Datang di Bii Flatshoes Shop</Text>
        <Text style={styles.subtitle}>Selamat Berbelanja dan Pilih Produk Kesukaanmu</Text>
        <View style={styles.buttonContainer}>
          <Button title="Lihat Produk" onPress={() => console.log("Button pressed")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Warna transparan untuk membuat teks lebih mudah dibaca
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', 
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', 
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});
