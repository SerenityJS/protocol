import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x9b, VarInt)
class DebugInfo extends Encapsulated {}

export { DebugInfo };
