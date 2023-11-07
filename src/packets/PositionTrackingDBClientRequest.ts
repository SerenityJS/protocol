import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x9a, VarInt)
class PositionTrackingDBClientRequest extends Encapsulated {}

export { PositionTrackingDBClientRequest };
