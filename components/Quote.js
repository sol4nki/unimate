import { Text, View } from 'react-native';

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The mind is everything. What you think you become. - Buddha"
];

// quick google search for quotes these are random ^
// aab random display honge on app open

export default function Quote() {
  return (
    // dupe this for hifi design man
    // <View style={{ alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#007bffbe', padding: 20, borderRadius: 10, paddingTop: 10 }}>
    <View style={{ alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#44474aff', padding: 20, borderRadius: 10, paddingTop: 10 }}>

        <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 10, color: 'white' }}>QUOTE OF THE DAY</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center', color: 'white' }}>"{quotes[Math.floor(Math.random() * quotes.length)]}"</Text>
    </View>
  );
}
