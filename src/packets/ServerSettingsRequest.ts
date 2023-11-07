import { VarInt, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x66, VarInt)
class ServerSettingsRequest extends Encapsulated {}

export { ServerSettingsRequest };
