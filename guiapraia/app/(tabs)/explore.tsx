import React from 'react';
import {
StyleSheet,
View,
Text,
Image,
TouchableOpacity,
ScrollView // Usando ScrollView para garantir que caiba em telas menores
} from 'react-native';
export default function HomeScreen() {
return (
<ScrollView style={styles.container}>
{/* 1. Imagem do Topo */}
<Image
// O caminho da imagem conforme você especificou
source={require('../../assets/images/praia.jpg')}
style={styles.headerImage}
/>
{/* 2. Títulos */}
<View style={styles.titleContainer}>
<Text style={styles.title}>Guia de Praias</Text>
<Text style={styles.subtitle}>Planeje sua Viagem</Text>
</View>
{/* 3. Grid de Botões */}
<View style={styles.gridContainer}>
{/* Linha 1 */}
<TouchableOpacity style={[styles.gridButton, styles.btnNordeste]}>
<Text style={styles.buttonText}>Nordeste</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.gridButton, styles.btnSP]}>
<Text style={styles.buttonText}>São Paulo</Text>
</TouchableOpacity>
{/* Linha 2 */}
<TouchableOpacity style={[styles.gridButton, styles.btnRJ]}>
<Text style={styles.buttonText}>Rio de Janeiro</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.gridButton, styles.btnInter]}>
<Text style={styles.buttonText}>Internacional</Text>
</TouchableOpacity>
</View>
</ScrollView>
);

}
// Estilos
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF', // Fundo branco
},
headerImage: {
width: '100%',
height: 250, // Você pode ajustar essa altura
resizeMode: 'cover',
},
titleContainer: {
alignItems: 'center', // Centraliza os textos
marginVertical: 20, // Espaçamento vertical
},
title: {
fontSize: 28,
fontWeight: 'bold',
color: '#0055D4', // Azul escuro do título
},
subtitle: {
fontSize: 16,
color: '#20C0C0', // Ciano/Verde-água do subtítulo
marginTop: 4,
},
gridContainer: {
flexDirection: 'row', // Organiza os filhos lado a lado
flexWrap: 'wrap', // Permite que os itens quebrem para a próxima linha
justifyContent: 'center', // Centraliza os botões no container
paddingHorizontal: 10, // Pequeno preenchimento nas laterais
},
gridButton: {
width: '46%', // Quase metade da tela, para caber 2 por linha
height: 120,
borderRadius: 16, // Bordas arredondadas
margin: '2%', // Espaçamento entre os botões
justifyContent: 'center', // Centraliza o texto verticalmente
alignItems: 'center', // Centraliza o texto horizontalmente
// Sombra leve (opcional, mas ajuda na aparência)
elevation: 4,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 3,
},

buttonText: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
textAlign: 'center',
},
// Cores específicas dos botões (baseadas no seu design)
btnNordeste: {
backgroundColor: '#005FFF',
},
btnSP: {
backgroundColor: '#2CE0C3',
},
btnRJ: {
backgroundColor: '#3D4A9B',
},
btnInter: {
backgroundColor: '#6EB1E1',
},
});