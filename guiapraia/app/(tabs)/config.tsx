import React, { useState } from 'react';
import {
StyleSheet,
View,
Text,
ScrollView,
TouchableOpacity,
Switch, // O componente "toggle"
Modal, // Para a janela "Sobre"
} from 'react-native';
// Vamos usar um ícone para o botão do Google
import { FontAwesome } from '@expo/vector-icons';
export default function ConfigScreen() {
// Estados para controlar os componentes
const [isDarkMode, setIsDarkMode] = useState(false);
const [isGpsEnabled, setIsGpsEnabled] = useState(false);
const [isModalVisible, setModalVisible] = useState(false);
// Funções para os toggles (apenas simulação)
const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
const toggleGps = () => setIsGpsEnabled(previousState => !previousState);
// Função para o login simulado
const handleGoogleLogin = () => {
console.log('Botão de login simulado pressionado!');
// Aqui você poderia adicionar a lógica de login real
};
return (
<ScrollView style={styles.container}>
{/* --- Seção de Login --- */}
{/* Item 1: Login (Texto) */}
<View style={styles.itemContainer}>
<Text style={styles.itemText}>Login</Text>
</View>
{/* Item 2: Botão Google (Abaixo do item Login, como pedido) */}
<TouchableOpacity
style={styles.googleButton}
onPress={handleGoogleLogin}
>
<FontAwesome name="google" size={20} color="#DB4437"
style={styles.googleIcon} />
<Text style={styles.googleButtonText}>Login com Google</Text>
</TouchableOpacity>

{/* --- Seção de Toggles --- */}
{/* Item 3: Modo Escuro */}
<View style={styles.itemContainer}>
<Text style={styles.itemText}>Modo Escuro/Claro</Text>
<Switch
trackColor={{ false: '#767577', true: '#005FFF' }} // Cor do trilho
thumbColor={'#f4f3f4'} // Cor do botão
onValueChange={toggleDarkMode}
value={isDarkMode}
/>
</View>
{/* Item 4: GPS */}
<View style={styles.itemContainer}>
<Text style={styles.itemText}>GPS</Text>
<Switch
trackColor={{ false: '#767577', true: '#005FFF' }}
thumbColor={'#f4f3f4'}
onValueChange={toggleGps}
value={isGpsEnabled}
/>
</View>
{/* --- Seção Sobre --- */}
{/* Item 5: Sobre (abre o Modal) */}
<TouchableOpacity
style={[styles.itemContainer, styles.lastItem]}
onPress={() => setModalVisible(true)}
>
<Text style={styles.itemText}>Sobre</Text>
</TouchableOpacity>
{/* --- O Modal --- */}
<Modal
animationType="fade" // Animação de aparição
transparent={true} // Fundo transparente
visible={isModalVisible}
onRequestClose={() => {
setModalVisible(!isModalVisible);
}}
>
{/* Overlay escuro */}
<View style={styles.modalOverlay}>
{/* Caixa de conteúdo do modal */}
<View style={styles.modalContent}>
<Text style={styles.modalText}>Desenvolvido por: Aluno</Text>
<TouchableOpacity

style={styles.modalCloseButton}
onPress={() => setModalVisible(false)}
>
<Text style={styles.modalCloseButtonText}>Fechar</Text>
</TouchableOpacity>
</View>
</View>
</Modal>
</ScrollView>
);
}
// --- Estilos ---
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
// Estilo para cada linha (Login, Modo Escuro, GPS, Sobre)
itemContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 20,
paddingHorizontal: 20,
borderBottomWidth: 1,
borderBottomColor: '#F0F0F0',
},
lastItem: {
borderBottomWidth: 0, // O último item não tem borda
},
itemText: {
fontSize: 18,
fontWeight: 'bold',
color: '#0055D4', // Azul do seu design
},
// Estilo do botão "Login com Google"
googleButton: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#FFF',
borderWidth: 1,
borderColor: '#DDD',
padding: 12,
borderRadius: 8,
marginHorizontal: 20,

marginTop: -10, // Puxa para perto do "Login"
marginBottom: 15,
},
googleIcon: {
marginRight: 12,
},
googleButtonText: {
fontSize: 16,
color: '#333',
fontWeight: '500',
},
// Estilos do Modal "Sobre"
modalOverlay: {
flex: 1,
backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
justifyContent: 'center',
alignItems: 'center',
},
modalContent: {
width: '80%',
backgroundColor: 'white',
borderRadius: 10,
padding: 20,
alignItems: 'center',
elevation: 5, // Sombra no Android
shadowColor: '#000', // Sombra no iOS
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 4,
},
modalText: {
fontSize: 16,
marginBottom: 20,
textAlign: 'center',
},
modalCloseButton: {
backgroundColor: '#005FFF', // Azul principal
paddingVertical: 10,
paddingHorizontal: 30,
borderRadius: 8,
},
modalCloseButtonText: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
});