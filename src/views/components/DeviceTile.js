import { Switch, Text, View } from 'react-native';

export default function DeviceTile({ device, onToggle }) {
  return (
    <View
      style={{
        backgroundColor: '#0f172a',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text style={{ color: 'white', fontSize: 16 }}>{device.name}</Text>

        {device.type === 'sensor' && (
          <Text style={{ color: '#94a3b8' }}>
            {device.value} {device.unit}
          </Text>
        )}
      </View>

      {device.type === 'light' && (
        <Switch value={device.isOn} onValueChange={onToggle} />
      )}
    </View>
  );
}
