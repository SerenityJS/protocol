import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x99, VarInt)
class PositionTrackingDBServerBroadcast extends Encapsulated {}

export { PositionTrackingDBServerBroadcast };
